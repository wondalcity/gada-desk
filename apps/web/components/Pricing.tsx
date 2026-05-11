'use client';

import { useState } from 'react';
import { Check, Sparkles, Gift } from 'lucide-react';

type Plan = {
  key: 'basic' | 'pro' | 'expert';
  badge: string;
  name: string;
  monthly: number;
  yearly: number;
  desc: string;
  features: string[];
  recommended?: boolean;
};

const plans: Plan[] = [
  {
    key: 'basic',
    badge: '당일 운영 시작형',
    name: 'Basic',
    monthly: 11900,
    yearly: 9900,
    desc: '당일 인력 배치와 출역 관리를 중심으로 인력사무소의 기본 업무를 디지털화합니다.',
    features: [
      '당일 인력 배치',
      '고정 인력 관리',
      '바로 배치할 인력 찾기',
      '출역 현황 확인',
      '현장 마감 체크',
    ],
  },
  {
    key: 'pro',
    badge: '운영 자동화형',
    name: 'Pro',
    monthly: 31900,
    yearly: 29900,
    desc: '인력 자동 배치와 반장·현장·일당 지급까지 운영을 체계적으로 자동화합니다.',
    recommended: true,
    features: [
      'Basic 전체 기능 포함',
      '인력 자동 배치',
      '인력 모집 알림 발송',
      '반장 / 팀 관리',
      '자주 가는 현장 관리',
      '근처 현장 보기',
      '일당 지급 관리',
    ],
  },
  {
    key: 'expert',
    badge: '일당·직접지급 전문형',
    name: 'Expert',
    monthly: 51900,
    yearly: 49900,
    desc: '인력 배치 대행과 일당 지급/청구 대행, 직접지급시스템까지 금융 운영 영역을 확장합니다.',
    features: [
      'Pro 전체 기능 포함',
      '인력 배치 대행',
      '일당 지급 / 청구 대행',
      '일당 직접지급시스템 적용',
      '사용량 및 지급 규모별 추가 과금',
    ],
  },
];

export default function Pricing() {
  const [period, setPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="bg-slate-50/70 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            필요한 운영 범위에 맞춰 선택하세요
          </h2>
          <p className="mt-4 text-base text-slate-600">
            PG 결제 완료 후 해당 등급의 서비스 이용 권한이 부여됩니다.
            <br className="hidden sm:inline" /> 세부 사용량 과금은 별도 안내될 수 있습니다.
          </p>
        </div>

        <div className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-2 rounded-full border border-[#FFC72C]/40 bg-[#FFC72C]/15 px-4 py-2.5 text-center">
          <Gift size={16} className="text-amber-700" aria-hidden />
          <p className="text-sm font-semibold text-slate-800">
            모든 요금제 <span className="text-amber-700">2주간 무료 사용</span> 후 결제됩니다
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div
            role="group"
            aria-label="결제 주기"
            className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1"
          >
            <button
              type="button"
              aria-pressed={period === 'monthly'}
              onClick={() => setPeriod('monthly')}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                period === 'monthly' ? 'bg-[#0669F7] text-white' : 'text-slate-600'
              }`}
            >
              월간
            </button>
            <button
              type="button"
              aria-pressed={period === 'yearly'}
              onClick={() => setPeriod('yearly')}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
                period === 'yearly' ? 'bg-[#0669F7] text-white' : 'text-slate-600'
              }`}
            >
              연간 할인
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                  period === 'yearly'
                    ? 'bg-[#FFC72C] text-slate-900'
                    : 'bg-amber-100 text-amber-700'
                }`}
              >
                SAVE
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = period === 'monthly' ? plan.monthly : plan.yearly;
            const isPro = !!plan.recommended;
            return (
              <div
                key={plan.key}
                className={`relative flex flex-col rounded-2xl border bg-white p-7 ${
                  isPro
                    ? 'border-[#0669F7] shadow-pro lg:-translate-y-2'
                    : 'border-slate-100'
                }`}
              >
                {isPro && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#FFC72C] px-3 py-1 text-xs font-bold text-slate-900">
                    <Sparkles size={12} aria-hidden /> 가장 추천
                  </span>
                )}

                <span
                  className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                    isPro ? 'bg-blue-50 text-[#0669F7]' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {plan.badge}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{plan.desc}</p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-slate-900">
                    {price.toLocaleString('ko-KR')}원
                  </span>
                  <span className="text-sm font-medium text-slate-500">/ 월</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  {period === 'monthly'
                    ? `연간 결제 시 ${plan.yearly.toLocaleString('ko-KR')}원 / 월`
                    : `월간 결제 시 ${plan.monthly.toLocaleString('ko-KR')}원 / 월`}
                </p>

                <a
                  href="#contact"
                  className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition ${
                    isPro
                      ? 'bg-[#0669F7] text-white hover:bg-[#0556d6]'
                      : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {plan.name} 시작하기
                </a>

                <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check
                        size={16}
                        aria-hidden
                        className={`mt-0.5 flex-shrink-0 ${
                          isPro ? 'text-[#0669F7]' : 'text-slate-400'
                        }`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
