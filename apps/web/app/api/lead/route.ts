import { NextResponse } from 'next/server';
import MailComposer from 'nodemailer/lib/mail-composer';

export const runtime = 'nodejs';

const TO = process.env.MAIL_TO ?? 'sales@worksmate.co.kr';
const SLACK_EMAIL = (process.env.MAIL_SLACK_EMAIL ?? process.env.MAIL_BCC ?? '').trim();

type Body = {
  company?: string;
  manager?: string;
  address?: string;
  phone?: string;
  plan?: string;
  message?: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function getAccessToken(
  clientId: string,
  clientSecret: string,
  refreshToken: string,
): Promise<string> {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
  });
  const data = (await res.json()) as { access_token?: string; error?: string };
  if (!res.ok || !data.access_token) {
    throw new Error(`token_refresh_failed: ${JSON.stringify(data)}`);
  }
  return data.access_token;
}

function buildMime(opts: {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}): Promise<Buffer> {
  const composer = new MailComposer(opts);
  return new Promise((resolve, reject) => {
    composer.compile().build((err, msg) => (err ? reject(err) : resolve(msg)));
  });
}

function toBase64Url(buf: Buffer): string {
  return buf
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const company = body.company?.trim();
  const manager = body.manager?.trim();
  const address = body.address?.trim();
  const phone = body.phone?.trim();
  const plan = body.plan?.trim();
  const message = body.message?.trim() ?? '';

  if (!company || !manager || !address || !phone || !plan) {
    return NextResponse.json({ error: 'missing_fields' }, { status: 400 });
  }

  const user = process.env.GMAIL_USER;
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!user || !clientId || !clientSecret || !refreshToken) {
    console.error('[lead] Gmail OAuth env vars are not set');
    return NextResponse.json({ error: 'mail_not_configured' }, { status: 500 });
  }

  const isAddOn = plan.includes('추가 문의') || plan.includes('추천 근로자');
  const subject = isAddOn
    ? `[가다 데스크] ${company} - ${manager} - 추가 문의 (추천 근로자 제공)`
    : `[가다 데스크] ${company} - ${manager} - ${plan} 도입 문의`;

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Pretendard','Helvetica Neue',sans-serif;color:#111827;line-height:1.6;padding:24px;background:#f8fafc;">
      <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
        <div style="background:#0669F7;color:#fff;padding:18px 24px;">
          <div style="font-size:13px;opacity:.85;letter-spacing:.02em;">GADA Desk · 회원가입 요청</div>
          <div style="font-size:18px;font-weight:700;margin-top:2px;">${escapeHtml(company)} - ${escapeHtml(plan)}</div>
        </div>
        <table style="width:100%;border-collapse:collapse;">
          <tbody>
            ${row('인력사무소명', company)}
            ${row('담당자명', manager)}
            ${row('인력사무소 주소', address)}
            ${row('연락처', phone)}
            ${row('희망 요금제', plan)}
            ${row('문의 내용', message ? message.replace(/\n/g, '<br/>') : '(없음)', true)}
          </tbody>
        </table>
        <div style="padding:14px 24px;background:#f8fafc;color:#64748b;font-size:12px;border-top:1px solid #e2e8f0;">
          이 메일은 가다 데스크 랜딩 페이지의 회원가입 요청 폼에서 자동 발송되었습니다.
        </div>
      </div>
    </div>
  `;

  const divider = '━'.repeat(28);
  const text =
    `[가다 데스크] 회원가입 요청\n` +
    `${divider}\n\n` +
    `인력사무소명: ${company}\n` +
    `담당자명: ${manager}\n` +
    `인력사무소 주소: ${address}\n` +
    `연락처: ${phone}\n` +
    `희망 요금제: ${plan}\n\n` +
    `문의 내용:\n${message || '(없음)'}\n\n` +
    `${divider}\n` +
    `가다 데스크 랜딩 페이지에서 자동 발송됨\n`;

  const fromName = process.env.MAIL_FROM_NAME ?? 'GADA Desk';
  const from = `"${fromName}" <${user}>`;

  try {
    const accessToken = await getAccessToken(clientId, clientSecret, refreshToken);

    const sendOne = async (recipient: string) => {
      const mime = await buildMime({ from, to: recipient, subject, html, text });
      const raw = toBase64Url(mime);
      const res = await fetch(
        'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ raw }),
        },
      );
      const data = (await res.json()) as { id?: string; error?: unknown };
      return { ok: res.ok, data };
    };

    const primary = await sendOne(TO);
    if (!primary.ok) {
      console.error('[lead] gmail api error (primary)', primary.data);
      return NextResponse.json({ error: 'send_failed' }, { status: 502 });
    }

    if (SLACK_EMAIL) {
      const slack = await sendOne(SLACK_EMAIL);
      if (!slack.ok) {
        console.warn('[lead] slack notification failed', slack.data);
      }
    }

    return NextResponse.json({ ok: true, id: primary.data.id });
  } catch (e) {
    const err = e as Error;
    console.error('[lead] unexpected error', err.message);
    if (err.message.startsWith('token_refresh_failed')) {
      return NextResponse.json({ error: 'gmail_auth_failed' }, { status: 502 });
    }
    return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  }
}

function row(label: string, value: string, multiline = false) {
  const safe = multiline ? value : escapeHtml(value);
  return `
    <tr>
      <td style="padding:14px 24px;border-bottom:1px solid #f1f5f9;width:120px;color:#64748b;font-size:13px;font-weight:600;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:14px 24px;border-bottom:1px solid #f1f5f9;color:#0f172a;font-size:14px;">${safe}</td>
    </tr>
  `;
}
