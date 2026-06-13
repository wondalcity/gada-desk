'use client';

import { motion } from 'framer-motion';
import { CalendarCheck, Users, MapPin, Wallet } from 'lucide-react';

const items = [
  {
    icon: <CalendarCheck size={20} aria-hidden />,
    title: '당일 인력 배치 · 마감',
    desc: '당일 인력 배치, 출역 현황 확인, 현장 마감 체크까지 인력사무소의 반복 업무를 한 화면에서 관리합니다.',
  },
  {
    icon: <Users size={20} aria-hidden />,
    title: '고정 인력 · 반장 관리',
    desc: '바로 배치할 인력을 찾고, 반장과 팀 정보를 정리해 현장에 맞는 인력을 빠르게 연결합니다.',
  },
  {
    icon: <MapPin size={20} aria-hidden />,
    title: '현장 운영 데이터',
    desc: '자주 가는 현장 관리와 근처 현장 보기로 영업과 인력 배치 전략을 함께 세울 수 있습니다.',
  },
  {
    icon: <Wallet size={20} aria-hidden />,
    title: '일당 지급 내역 관리',
    desc: 'Pro 등급에서는 월별·현장별 일당 지급 내역까지 정리해 정산 현황을 한눈에 확인합니다.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            인력사무소 업무 흐름에 맞춘 기능
          </h2>
          <p className="mt-4 text-base text-slate-600">
            복잡한 ERP가 아니라, 인력사무소가 매일 쓰는 매칭·출역·마감·지급 업무를 중심으로
            설계했습니다.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 transition hover:border-[#0669F7]/30 hover:shadow-[0_10px_30px_-15px_rgba(6,105,247,0.25)]"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0669F7]">
                {item.icon}
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
