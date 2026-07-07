"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "주요 기능", href: "#features" },
  { label: "도입 절차", href: "#process" },
  { label: "자주묻는 질문", href: "#faq" },
  { label: "회사 소개", href: "https://www.worksmate.co.kr" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_12px_rgba(16,24,40,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[60px] w-full max-w-[1280px] items-center justify-between px-5 lg:px-10">
        <div className="flex items-center">
          <a href="#top" className="flex items-center gap-[6px] px-1 py-3">
            <img src="/assets/logo-icon.svg" alt="가다" className="h-[30px] w-[64px]" />
            <img src="/assets/logo-text.svg" alt="데스크" className="h-[17px] w-[37px]" />
          </a>
          <nav className="ml-4 hidden items-center lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap px-5 py-[14px] text-[16px] font-medium leading-5 text-black transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://blog.1gada.com"
            className="flex h-10 items-center whitespace-nowrap rounded px-4 text-[16px] font-bold text-primary transition-colors bg-primary-light hover:bg-[#d3e6ff]"
          >
            가다레터
          </a>
          <a
            href="#final-cta"
            className="flex h-10 items-center whitespace-nowrap rounded bg-primary px-4 text-[16px] font-bold text-white transition-all hover:brightness-110 hover:shadow-[0_4px_14px_rgba(6,105,247,0.4)]"
          >
            무료 체험하기
          </a>
        </div>

        <button
          type="button"
          aria-label="메뉴 열기"
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`h-[2px] w-5 bg-black transition-transform ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span className={`h-[2px] w-5 bg-black transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-[2px] w-5 bg-black transition-transform ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-[#eaecf0] bg-white px-5 pb-6 pt-2 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-[16px] font-medium text-black"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 flex gap-3">
            <a
              href="https://blog.1gada.com"
              className="flex h-10 flex-1 items-center justify-center rounded bg-primary-light text-[15px] font-bold text-primary"
            >
              가다레터
            </a>
            <a
              href="#final-cta"
              className="flex h-10 flex-1 items-center justify-center rounded bg-primary text-[15px] font-bold text-white"
              onClick={() => setMenuOpen(false)}
            >
              무료 체험하기
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
