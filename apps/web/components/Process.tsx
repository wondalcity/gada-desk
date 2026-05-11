'use client';

import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: '가입 요청',
    desc: '인력사무소 정보와 담당자 연락처를 남깁니다.',
  },
  {
    num: '02',
    title: '계정 발급',
    desc: '담당자 확인 후 운영 계정이 발급됩니다.',
  },
  {
    num: '03',
    title: '2주 무료 사용',
    desc: '결제 없이 모든 기능을 2주간 무료로 사용해 봅니다.',
    highlight: true,
  },
  {
    num: '04',
    title: '요금제 결제',
    desc: '무료 기간 종료 후 PG 결제로 정식 이용을 시작합니다.',
  },
];

export default function Process() {
  return (
    <section id="service" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            가입 후 2주 무료 사용, 결제는 그 다음에
          </h2>
          <p className="mt-4 text-base text-slate-600">
            인력사무소 확인과 2주 무료 사용을 거쳐 실제 운영에 맞는 등급을 결제합니다.
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#FFC72C]/20 px-3 py-1 text-xs font-bold text-amber-800">
            <Gift size={12} aria-hidden /> 모든 요금제 2주 무료 사용
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`relative rounded-2xl border p-7 ${
                s.highlight
                  ? 'border-[#0669F7]/30 bg-blue-50/60'
                  : 'border-slate-100 bg-slate-50/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#0669F7]">{s.num}</span>
                {s.highlight && (
                  <span className="inline-flex items-center rounded-full bg-[#FFC72C] px-2 py-0.5 text-[10px] font-bold text-slate-900">
                    무료
                  </span>
                )}
              </div>
              <h3 className="mt-3 text-xl font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
