import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return map[c]!;
  });
}

function page(title: string, bodyHtml: string, status = 200) {
  return new NextResponse(
    `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif; max-width: 720px; margin: 60px auto; padding: 0 24px; color: #111827; line-height: 1.55; }
      h1 { color: #0669F7; font-size: 22px; margin-bottom: 12px; }
      pre { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px; word-break: break-all; white-space: pre-wrap; font-size: 13px; }
      code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 13px; }
      .muted { color: #64748b; font-size: 13px; }
      .err { color: #b91c1c; }
    </style>
  </head>
  <body>${bodyHtml}</body>
</html>`,
    { status, headers: { 'Content-Type': 'text/html; charset=utf-8' } },
  );
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  const oauthError = url.searchParams.get('error');

  if (oauthError) {
    return page(
      'OAuth 오류',
      `<h1 class="err">OAuth 오류</h1><pre>${escapeHtml(oauthError)}</pre>`,
      400,
    );
  }
  if (!code) {
    return page('OAuth 오류', `<h1 class="err">code 파라미터가 없습니다.</h1>`, 400);
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return page(
      '환경변수 누락',
      `<h1 class="err">.env.local 에 GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET 가 없습니다.</h1>`,
      500,
    );
  }

  const redirectUri = `${url.origin}/api/auth/google/callback`;

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  });

  const data = (await tokenRes.json()) as {
    refresh_token?: string;
    access_token?: string;
    error?: string;
    error_description?: string;
  };

  if (!tokenRes.ok) {
    return page(
      '토큰 교환 실패',
      `<h1 class="err">토큰 교환 실패</h1>
       <pre>${escapeHtml(JSON.stringify(data, null, 2))}</pre>
       <p class="muted">redirect_uri 가 콘솔의 "승인된 리디렉션 URI"와 정확히 일치해야 합니다: <code>${escapeHtml(redirectUri)}</code></p>`,
      500,
    );
  }

  if (!data.refresh_token) {
    return page(
      'refresh_token 미수신',
      `<h1 class="err">refresh_token 이 발급되지 않았습니다.</h1>
       <p>이미 한 번 동의한 계정에서 다시 받으려면 <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer">myaccount.google.com/permissions</a> 에서 이 앱의 액세스 권한을 제거한 뒤 <a href="/api/auth/google">다시 시작</a>하세요.</p>
       <pre>${escapeHtml(JSON.stringify(data, null, 2))}</pre>`,
      500,
    );
  }

  return page(
    'Refresh Token 발급 완료',
    `<h1>✓ Refresh Token 발급 완료</h1>
     <p>아래 값을 <code>.env.local</code> 의 <code>GOOGLE_REFRESH_TOKEN</code> 에 붙여넣고 dev 서버를 재시작하세요.</p>
     <pre>${escapeHtml(data.refresh_token)}</pre>
     <p class="muted">한 번 발급된 refresh token은 사용자가 액세스를 철회하기 전까지 유효합니다. 이 페이지를 닫아도 됩니다.</p>`,
  );
}
