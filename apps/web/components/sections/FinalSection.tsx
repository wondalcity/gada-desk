"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/Reveal";

/** 최종 CTA + 무료 체험 신청 폼 (Figma 88:2220) */
export default function FinalSection() {
  const [form, setForm] = useState({ office: "", manager: "", phone: "", source: "", message: "" });
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.office.trim() || !form.manager.trim() || !form.phone.trim() || !form.source) {
      setError("필수 항목을 입력해 주세요.");
      return;
    }
    if (!/^[0-9\-+() ]{9,}$/.test(form.phone.trim())) {
      setError("연락처 형식을 확인해 주세요.");
      return;
    }
    if (!agreed) {
      setError("개인정보 수집·이용에 동의해 주세요.");
      return;
    }
    setError(null);
    setSending(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: form.office.trim(),
          manager: form.manager.trim(),
          phone: form.phone.trim(),
          source: form.source,
          message: form.message.trim(),
        }),
      });
      if (!res.ok) throw new Error("send_failed");
      setSubmitted(true);
    } catch {
      setError("접수에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="final-cta" className="relative overflow-hidden py-24 lg:py-32">
      <div
        className="absolute inset-0"
        aria-hidden
        style={{ background: "radial-gradient(50% 60% at 50% 50%, #12203c 0%, #0c1322 100%)" }}
      />
      <div
        className="pointer-events-none absolute right-[-10%] top-[-78px] h-[419px] w-[60%] rounded-full bg-primary opacity-25 blur-[130px]"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-5">
        <Reveal>
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-[26px] font-bold leading-tight text-white lg:text-[40px] lg:leading-[52px]">
              지금 가입하고{" "}
              <span className="bg-gradient-to-r from-[#8cc800] to-[#3186ff] bg-clip-text text-transparent">
                무료로 사용
              </span>
              해 보세요
            </h2>
            <p className="text-[15px] leading-relaxed text-[#9ba6bc] lg:text-[17px]">
              담당자가 확인 후 계정 발급 절차를 안내드립니다.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="w-full max-w-[540px]">
          <div className="mt-[52px] w-full rounded-[24px] border border-[#eaecf0] bg-white p-6 drop-shadow-[0_30px_35px_rgba(16,24,40,0.28)] lg:p-[35px]">
            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-[#e8f8e9] text-[24px]" aria-hidden>
                  ✓
                </span>
                <p className="text-[18px] font-bold text-[#16181d]">신청이 접수되었습니다</p>
                <p className="text-[14px] leading-relaxed text-[#6b7280]">
                  담당자가 확인 후 {form.phone} 으로
                  <br />
                  계정 발급 절차를 안내드리겠습니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="인력사무소명"
                  value={form.office}
                  onChange={(e) => setForm((f) => ({ ...f, office: e.target.value }))}
                  className="h-[54px] w-full rounded-[12px] border border-[#eaecf0] px-5 text-[15px] text-[#16181d] outline-none transition-colors placeholder:text-[#16181d]/50 focus:border-primary"
                />
                <input
                  type="text"
                  placeholder="담당자명"
                  value={form.manager}
                  onChange={(e) => setForm((f) => ({ ...f, manager: e.target.value }))}
                  className="h-[54px] w-full rounded-[12px] border border-[#eaecf0] px-5 text-[15px] text-[#16181d] outline-none transition-colors placeholder:text-[#16181d]/50 focus:border-primary"
                />
                <input
                  type="tel"
                  placeholder="연락처"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="h-[54px] w-full rounded-[12px] border border-[#eaecf0] px-5 text-[15px] text-[#16181d] outline-none transition-colors placeholder:text-[#16181d]/50 focus:border-primary"
                />
                <div className="relative">
                  <select
                    value={form.source}
                    onChange={(e) => setForm((f) => ({ ...f, source: e.target.value }))}
                    className={`h-[54px] w-full cursor-pointer appearance-none rounded-[12px] border border-[#eaecf0] bg-white px-5 pr-12 text-[15px] outline-none transition-colors focus:border-primary ${
                      form.source ? "text-[#16181d]" : "text-[#16181d]/50"
                    }`}
                  >
                    <option value="" disabled>
                      가다 데스크를 알게 된 경로
                    </option>
                    <option value="네이버 검색">네이버 검색</option>
                    <option value="구글 검색">구글 검색</option>
                    <option value="블로그·기사 콘텐츠">블로그·기사 콘텐츠</option>
                    <option value="SNS·온라인 광고">SNS·온라인 광고</option>
                    <option value="지인 추천">지인 추천</option>
                    <option value="가다 앱 이용 중">가다 앱 이용 중</option>
                    <option value="기타">기타</option>
                  </select>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                    className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#16181d]/40"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <textarea
                  placeholder="문의내용 (선택) — 궁금한 점이나 요청사항을 남겨주세요."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  rows={3}
                  className="w-full resize-none rounded-[12px] border border-[#eaecf0] px-5 py-4 text-[15px] leading-relaxed text-[#16181d] outline-none transition-colors placeholder:text-[#16181d]/50 focus:border-primary"
                />
                <div className="flex flex-col gap-2 rounded-[12px] bg-[#f7f9fc] px-4 py-3">
                  <label className="flex cursor-pointer items-center gap-2 text-[13.5px] font-medium text-[#16181d]">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="size-4 shrink-0 accent-primary"
                    />
                    [필수] 개인정보 수집·이용에 동의합니다
                  </label>
                  <details className="text-[12px] leading-relaxed text-[#6b7280]">
                    <summary className="cursor-pointer select-none">자세히 보기</summary>
                    <p className="pt-1">
                      · 수집 항목: 인력사무소명, 담당자명, 연락처
                      <br />
                      · 수집 목적: 무료 체험 신청 확인 및 계정 발급 안내
                      <br />
                      · 보유 기간: 수집일로부터 1년 (이후 지체 없이 파기)
                      <br />
                      동의를 거부할 수 있으나, 거부 시 무료 체험 신청이 제한됩니다.
                    </p>
                  </details>
                </div>
                {error && <p className="text-[13px] font-medium text-red-500">{error}</p>}
                <div className="flex flex-col gap-2.5 pt-1 sm:flex-row">
                  <button
                    type="submit"
                    disabled={sending}
                    className="h-14 shrink-0 rounded-full bg-primary text-[16px] font-bold text-white drop-shadow-[0_10px_12px_rgba(6,105,247,0.5)] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:flex-1"
                  >
                    {sending ? "접수 중..." : "무료 체험하기"}
                  </button>
                  <a
                    href="/docs/gada-desk-intro-v1.0.pdf"
                    download="가다 데스크 서비스 소개서 ver 1.0.pdf"
                    className="flex h-14 shrink-0 items-center justify-center rounded-full border border-[#eaecf0] bg-white text-[16px] font-bold text-[#16181d] transition-colors hover:bg-[#f7f9fc] sm:flex-1"
                  >
                    소개자료 다운받기
                  </a>
                </div>
              </form>
            )}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
