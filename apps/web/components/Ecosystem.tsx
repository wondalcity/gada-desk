'use client';

import { motion } from 'framer-motion';
import { Gift, Megaphone, BadgeCheck, ArrowUpRight, Handshake } from 'lucide-react';

const benefits = [
  {
    icon: <Gift size={20} aria-hidden />,
    title: '가다 오피스 기능 무료 제공',
    desc: '가다 데스크를 사용하면 가다 오피스에서 제공하는 기능을 추가 비용 없이 무료로 함께 이용할 수 있습니다.',
  },
  {
    icon: <Megaphone size={20} aria-hidden />,
    title: '가다 앱에 공고 자동 등록',
    desc: '현장 공고가 가다 앱에 자동으로 노출되어, 우리 사무소 인력뿐 아니라 근처의 다른 근로자까지 더 많이 모집할 수 있습니다.',
  },
  {
    icon: <BadgeCheck size={20} aria-hidden />,
    title: '출역해도 수수료 0원',
    desc: '가다 앱을 통해 모집된 근로자가 현장에 출역하더라도, 가다 데스크 이용자에게는 별도의 수수료를 부과하지 않습니다.',
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="overflow-hidden rounded-3xl border border-[#0669F7]/15 bg-gradient-to-br from-blue-50/80 via-white to-amber-50/40 p-7 md:p-12">
          <div className="max-w-2xl">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#0669F7]/20 bg-white px-3 py-1 text-xs font-semibold text-[#0669F7]">
              <Handshake size={13} aria-hidden /> 인력사무소와 상생하는 가다 데스크
            </span>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              가다 생태계와 연결되어
              <br className="hidden sm:inline" /> 더 많은 인력을, 더 적은 부담으로
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              가다 데스크는 단순한 관리 도구가 아닙니다. 가다 오피스와 가다 앱에 연결되어
              사무소의 운영 비용은 줄이고, 모집할 수 있는 인력은 넓힙니다.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {benefits.map((b, idx) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_10px_30px_-20px_rgba(6,105,247,0.3)]"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0669F7]">
                  {b.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#FFC72C]/50 bg-[#FFC72C]/10 p-6 sm:flex-row sm:items-center sm:justify-between md:p-7">
            <div className="flex items-start gap-3">
              <span
                aria-hidden
                className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#FFC72C] text-slate-900"
              >
                <Handshake size={18} />
              </span>
              <p className="text-sm leading-relaxed text-slate-700">
                <span className="font-bold text-slate-900">가다는 인력사무소의 경쟁자가 아닙니다.</span>{' '}
                가다 앱으로 모집한 근로자가 출역해도 수수료를 받지 않고, 가다 오피스 기능까지
                무료로 더해 사무소가 더 많이 일하고 더 많이 벌 수 있도록 돕습니다.
              </p>
            </div>
            <a
              href="https://1gada.com/office"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-shrink-0 items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              가다 오피스 자세히 보기 <ArrowUpRight size={16} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
