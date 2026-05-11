'use client';

import { useState, FormEvent } from 'react';
import { Building2, ShieldCheck, LayoutDashboard, Zap } from 'lucide-react';

const PLAN_OPTIONS = [
  { value: 'Basic', name: 'Basic', tag: '당일 운영 시작형' },
  { value: 'Pro', name: 'Pro', tag: '운영 자동화형', recommended: true },
  { value: 'Expert', name: 'Expert', tag: '일당·직접지급 전문형' },
] as const;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [plan, setPlan] = useState<string>('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting') return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      company: String(fd.get('company') ?? '').trim(),
      manager: String(fd.get('manager') ?? '').trim(),
      address: String(fd.get('address') ?? '').trim(),
      phone: String(fd.get('phone') ?? '').trim(),
      plan: String(fd.get('plan') ?? '').trim(),
      message: String(fd.get('message') ?? '').trim(),
    };

    setStatus('submitting');
    setErrorMsg('');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const code = (data && data.error) || 'send_failed';
        setStatus('error');
        setErrorMsg(
          code === 'mail_not_configured'
            ? '메일 서비스가 아직 연결되지 않았습니다. 관리자에게 문의해주세요.'
            : code === 'gmail_auth_failed'
              ? '메일 계정 인증에 실패했습니다. 관리자에게 문의해주세요.'
              : '전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
        );
        return;
      }
      setStatus('success');
      form.reset();
      setPlan('');
    } catch {
      setStatus('error');
      setErrorMsg('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  }

  const submitting = status === 'submitting';
  const success = status === 'success';

  return (
    <section id="contact" className="bg-blue-50/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            가다 데스크 계정 발급을 요청하세요
          </h2>
          <p className="mt-4 text-base text-slate-600">
            담당자가 확인 후 요금제, 결제, 계정 발급 절차를 안내드립니다.
            <br className="hidden sm:inline" /> 초기 도입 상담에서는 현재 운영 방식에 맞는 등급을
            함께 추천드립니다.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <InfoCard
              icon={<Building2 size={20} aria-hidden />}
              title="인력사무소 전용"
              desc="건설 일용직 매칭과 출역 업무에 맞춘 구조"
            />
            <InfoCard
              icon={<ShieldCheck size={20} aria-hidden />}
              title="등급별 권한 제공"
              desc="결제된 요금제에 따라 이용 범위를 부여"
            />
            <InfoCard
              icon={<LayoutDashboard size={20} aria-hidden />}
              title="일일 운영 대시보드"
              desc="출역, 마감, 지원자, 일당 지급 내역을 한 화면에서"
            />
            <InfoCard
              icon={<Zap size={20} aria-hidden />}
              title="인력 자동 배치"
              desc="반복되는 당일 인력 배치를 자동화해 시간 단축"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            aria-label="회원가입 요청 폼"
            className="rounded-2xl border border-slate-100 bg-white p-7 md:p-9 lg:col-span-3"
          >
            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field
                  label="인력사무소명"
                  id="company"
                  placeholder="예: 행복 인력사무소"
                  required
                />
                <Field label="담당자명" id="manager" placeholder="예: 김소장" required />
              </div>

              <Field
                label="인력사무소 주소"
                id="address"
                placeholder="예: 서울특별시 강남구 테헤란로 123, 4층"
                required
              />

              <Field
                label="연락처"
                id="phone"
                placeholder="예: 010-0000-0000"
                type="tel"
                required
              />

              <PlanSelector value={plan} onChange={setPlan} />

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  문의 내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="현재 운영 방식, 도입 일정 등을 자유롭게 작성해주세요."
                  className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0669F7] focus:outline-none focus:ring-2 focus:ring-[#0669F7]/20"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting || success}
              aria-live="polite"
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#0669F7] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0556d6] disabled:opacity-60"
            >
              {submitting
                ? '전송 중...'
                : success
                  ? '요청이 접수되었습니다'
                  : '회원가입 요청하기'}
            </button>

            {status === 'success' && (
              <p
                role="status"
                className="mt-3 rounded-lg border border-[#0669F7]/20 bg-blue-50 px-3.5 py-2.5 text-xs font-medium text-[#0556d6]"
              >
                담당자가 확인 후 빠르게 연락드리겠습니다.
              </p>
            )}
            {status === 'error' && (
              <p
                role="alert"
                className="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-xs font-medium text-rose-700"
              >
                {errorMsg}
              </p>
            )}

            <p className="mt-3 text-xs text-slate-500">
              개인정보 수집 동의 및 PG 결제 연동 문구는 실 운영 시 추가됩니다.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function PlanSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <span
        id="plan-label"
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        희망 요금제
      </span>
      <div
        role="radiogroup"
        aria-labelledby="plan-label"
        className="grid grid-cols-1 gap-3 sm:grid-cols-3"
      >
        {PLAN_OPTIONS.map((p) => {
          const active = value === p.value;
          return (
            <label
              key={p.value}
              className={`relative flex cursor-pointer items-start gap-3 rounded-xl border bg-white p-4 transition ${
                active
                  ? 'border-[#0669F7] bg-blue-50/60 shadow-[0_0_0_3px_rgba(6,105,247,0.12)]'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <input
                type="radio"
                name="plan"
                value={p.value}
                checked={active}
                onChange={() => onChange(p.value)}
                required
                className="sr-only"
              />
              <span
                aria-hidden
                className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition ${
                  active ? 'border-[#0669F7]' : 'border-slate-300'
                }`}
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    active ? 'bg-[#0669F7]' : 'bg-transparent'
                  }`}
                />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-1.5">
                  <span
                    className={`text-sm font-bold ${
                      active ? 'text-[#0669F7]' : 'text-slate-900'
                    }`}
                  >
                    {p.name}
                  </span>
                  {'recommended' in p && p.recommended && (
                    <span className="inline-flex items-center rounded-full bg-[#FFC72C] px-1.5 py-0.5 text-[10px] font-bold text-slate-900">
                      추천
                    </span>
                  )}
                </span>
                <span className="mt-0.5 block text-xs text-slate-500">{p.tag}</span>
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0669F7]">
        {icon}
      </div>
      <h3 className="mt-4 text-base font-bold text-slate-900">{title}</h3>
      <p className="mt-1.5 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function Field({
  label,
  id,
  placeholder,
  type = 'text',
  required = false,
}: {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2 text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-12 rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0669F7] focus:outline-none focus:ring-2 focus:ring-[#0669F7]/20"
      />
    </div>
  );
}
