'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV = [
  { label: '서비스', href: '#service' },
  { label: '기능', href: '#features' },
  { label: '요금제', href: '#pricing' },
  { label: '도입문의', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" aria-label="가다 데스크 홈" className="flex items-baseline gap-2">
          <span className="text-lg font-bold tracking-tight text-slate-900">가다 데스크</span>
          <span className="hidden text-[11px] font-medium text-slate-400 sm:inline">
            GADA Desk for Manpower Offices
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="메인 내비게이션">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg bg-[#0669F7] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0556d6]"
          >
            회원가입 요청
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <div className="flex flex-col px-5 py-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-slate-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mb-3 mt-2 inline-flex items-center justify-center rounded-lg bg-[#0669F7] px-4 py-2.5 text-sm font-semibold text-white"
            >
              회원가입 요청
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
