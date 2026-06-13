'use client';

import { useState } from 'react';
import { Check, Sparkles, Gift, Users, ArrowRight } from 'lucide-react';

type Plan = {
  key: 'basic' | 'pro';
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
    badge: '통합 인력 관리',
    name: 'Basic',
    monthly: 31900,
    yearly: 29900,
    desc: '현장과 공고, 출역과 마감까지 인력사무소의 일상 운영을 한 곳에서 통합 관리합니다.',
    features: [
      '현장 관리',
      '일용직 공고 관리',
      '상용직 공고 관리',
      '일간 출역 일보',
      '현장 마감 현황',
    ],
  },
  {
    key: 'pro',
    badge: 'Basic 기능 포함',
    name: 'Pro',
    monthly: 61900,
    yearly: 59900,
    desc: '위험 현장과 기능공 팀 정보, 일당 지급 내역까지 운영을 한층 더 깊이 들여다봅니다.',
    recommended: true,
    features: [
      'Basic 기능 포함',
      '위험 현장 정보',
      '기능공 팀 정보',
      '월별 일당 지급 내역',
      '현장별 일당 지급 내역',
    ],
  },
];

export const ADD_ON_PLAN = '추가 문의 (추천 근로자)';

function selectPlan(name: string) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('gada:select-plan', { detail: name }));
}

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

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 items-start gap-6 sm:grid-cols-2">
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
                  onClick={() => selectPlan(plan.name)}
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

        <div className="mx-auto mt-6 max-w-3xl overflow-hidden rounded-2xl border border-[#FFC72C]/50 bg-gradient-to-br from-slate-900 to-slate-800 p-7 text-white md:p-9">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="md:max-w-xl">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#FFC72C] px-2.5 py-1 text-xs font-bold text-slate-900">
                <Users size={12} aria-hidden /> 추가 문의 · 추천 근로자 제공
              </span>
              <h3 className="mt-4 text-2xl font-bold">추천 근로자로 매출을 한 단계 더</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                가다 플랫폼이 추천하는 검증된 근로자를 직접 확인하고 현장에 투입해 인력사무소의
                매출을 키울 수 있습니다. 추천 근로자가 현장에 투입되면, 발생한 수익을 인력사무소와
                가다가 <span className="font-bold text-[#FFC72C]">5:5</span>로 나눕니다.
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  '가다 플랫폼 추천 근로자 열람',
                  '추천 근로자 현장 투입',
                  '투입 수익 인력사무소와 5:5 분배',
                  '별도 사용계약 후 이용',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-200">
                    <Check size={16} aria-hidden className="mt-0.5 flex-shrink-0 text-[#FFC72C]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-stretch gap-2 md:w-56 md:flex-shrink-0">
              <span className="text-sm font-medium text-slate-400">별도 사용계약 필요</span>
              <a
                href="#contact"
                onClick={() => selectPlan(ADD_ON_PLAN)}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#FFC72C] px-4 py-3 text-sm font-bold text-slate-900 transition hover:bg-[#f0bd24]"
              >
                추가 문의하기 <ArrowRight size={16} aria-hidden />
              </a>
              <p className="text-xs leading-relaxed text-slate-400">
                문의 주시면 담당자가 사용계약과 정산 구조를 안내드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
