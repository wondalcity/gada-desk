"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "베타 기간은 언제까지인가요? 끝나면 요금은 어떻게 되나요?",
    answer:
      "베타 기간은 별도 공지 시까지 운영되며, 기간 중에는 등급 구분 없이 전 기능을 무료로 사용할 수 있습니다. 요금 정책은 추후 수립되며, 유료 전환 시점과 정책은 반드시 사전에 안내드립니다.",
  },
  {
    question: "가입 후 바로 사용할 수 있나요?",
    answer:
      "가입 요청을 남기시면 담당자가 인력사무소 정보를 확인한 뒤 운영 계정을 발급해 드립니다. 계정이 발급되면 즉시 모든 기능을 사용할 수 있습니다.",
  },
  {
    question: "가다 오피스 노무 문서는 어떤 문서를 제공하나요?",
    answer:
      "근로계약서, 임금명세서, 노무비 지급명세서, 퇴직공제 신고서, 근로내용 확인신고서, 무사고 귀환 확인서, 거래명세서, 위임장, 작업확인서까지 총 9종의 노무 문서를 디지털로 제공합니다. 현장 일정에 맞춘 자동 생성과 엑셀·PDF 다운로드를 지원합니다.",
  },
  {
    question: "가다 인력 지원은 어떻게 요청하나요?",
    answer:
      "가다 데스크에서 필요한 인원과 조건을 등록하면, 전국에서 활동하는 가다 근로자 풀에서 조건에 맞는 인력을 확인하고 현장에 연결할 수 있습니다.",
  },
];

/** FAQ 아코디언 (Figma 88:2191) */
// 구글 FAQ 리치 결과용 구조화 데이터
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white px-5 py-24 lg:px-10 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto flex max-w-[800px] flex-col items-center gap-14 lg:gap-20">
        <Reveal>
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-[14px] font-bold leading-[18px] text-primary">자주 묻는 질문</p>
            <h2 className="text-[26px] font-bold leading-tight tracking-[-1px] text-[#16181d] lg:text-[38px] lg:leading-[47.5px]">
              궁금한 점이 있으신가요?
            </h2>
          </div>
        </Reveal>

        <Reveal className="w-full">
          <div className="flex w-full flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`overflow-hidden rounded-[16px] border bg-white transition-colors ${
                    isOpen ? "border-primary/40" : "border-[#eaecf0]"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-[22px] text-left"
                  >
                    <span className="text-[15.5px] font-bold leading-relaxed text-[#16181d] lg:text-[16.5px]">
                      {item.question}
                    </span>
                    <span
                      className={`shrink-0 text-[22px] font-bold leading-none text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-[#6b7280]">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
