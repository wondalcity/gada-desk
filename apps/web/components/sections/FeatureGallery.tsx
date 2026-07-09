"use client";

import { useCallback, useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

interface GalleryImage {
  src: string;
  caption: string;
}

interface Tab {
  title: string;
  description: string;
  /** 탭 안에서 무한 롤링되는 이미지들 — 이미지 추가 시 배열에 넣기만 하면 됨 */
  images: GalleryImage[];
}

const TABS: Tab[] = [
  {
    title: "근로자 관리 및 인력 배치",
    description:
      "우리 사무소 근로자의 출역 이력과 프로필을 한곳에서 관리합니다. 경력·자격·연락처는 물론 어느 현장에 며칠 나갔는지까지 기록돼, 필요한 인력을 빠르게 찾아 배치할 수 있습니다.",
    images: [
      { src: "/assets/gallery/worker-detail.png", caption: "근로자 상세정보" },
      { src: "/assets/gallery/worker-monthly.png", caption: "근로자 월별 근로 이력" },
      { src: "/assets/gallery/worker-team.png", caption: "기능공 팀 정보" },
    ],
  },
  {
    title: "현장 대응 및 출역 관리",
    description:
      "운영 중인 현장의 출역을 한눈에 관리합니다. 현장별 메모와 상태를 남겨 대응 이력을 정리할 수 있어 문제 현장을 놓치지 않습니다.",
    images: [
      { src: "/assets/gallery/site-register.png", caption: "현장 등록" },
      { src: "/assets/gallery/site-list.png", caption: "현장 리스트" },
      { src: "/assets/gallery/site-detail.png", caption: "현장 정보 상세" },
    ],
  },
  {
    title: "작업 등록 및 공고·매칭",
    description:
      "현장에 필요한 작업을 등록하고 공고·매칭·출역·마감·인원 요청까지 한 흐름에서 관리합니다. 오늘 어느 현장에 몇 명이 필요한지, 매칭은 얼마나 됐는지 실시간으로 파악할 수 있습니다.",
    images: [
      { src: "/assets/gallery/job-register.png", caption: "신규 작업 등록" },
      { src: "/assets/gallery/job-closing.png", caption: "현장 마감 현황" },
      { src: "/assets/gallery/job-daily.png", caption: "일간 출역 현황" },
    ],
  },
  {
    title: "지급 관리 및 내역 다운로드",
    description:
      "선지급·기성 청구·미수금까지 정산 현황을 한 페이지에서 관리합니다. 월별·현장별 지급 내역을 정리해 돈이 어디서 얼마나 나가고 들어오는지 한눈에 확인할 수 있습니다.",
    images: [
      { src: "/assets/gallery/pay-daily-close.png", caption: "일일 마감 확인하기" },
      { src: "/assets/gallery/pay-site.png", caption: "현장별 지급 내역" },
      { src: "/assets/gallery/pay-monthly.png", caption: "월별 지급 내역" },
    ],
  },
];

export default function FeatureGallery() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeImg, setActiveImg] = useState(0);
  const [paused, setPaused] = useState(false);

  const images = TABS[activeTab].images;

  // 화살표·자동재생은 탭을 벗어나지 않고 현재 탭의 이미지만 순환
  const goImg = useCallback(
    (next: number) => {
      setActiveImg((next + images.length) % images.length);
    },
    [images.length],
  );

  const selectTab = useCallback((i: number) => {
    setActiveTab(i);
    setActiveImg(0);
  }, []);

  useEffect(() => {
    if (paused || images.length < 2) return;
    const timer = setInterval(() => {
      setActiveImg((v) => (v + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, activeTab, images.length]);

  return (
    <section className="flex flex-col items-center gap-14 bg-white pb-28 pt-24 lg:gap-20 lg:pb-40 lg:pt-32">
      <Reveal>
        <div className="flex flex-col items-center gap-4 px-6 text-center">
          <p className="text-[14px] font-bold leading-[18px] text-primary">기능 자세히 보기</p>
          <p className="text-[26px] font-bold leading-tight text-black lg:text-[40px] lg:leading-[52px]">
            가다 데스크의 주요 기능을 확인해 보세요
          </p>
          <p className="text-[15px] leading-relaxed text-[#6b7280] lg:text-[17px]">
            현장·근로자·작업·문서·정산, 그리고 가다 인력 지원까지 한 곳에서
          </p>
        </div>
      </Reveal>

      <Reveal className="w-full">
        <div
          className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-center gap-8 px-5 lg:flex-row lg:px-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* 슬라이드 패널 */}
          <div className="relative aspect-[824/464] w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[#0d3688] to-[#12203c] lg:w-[824px] lg:shrink-0">
            <p className="absolute left-1/2 top-6 z-10 -translate-x-1/2 whitespace-nowrap text-[16px] font-bold text-white lg:top-[34px] lg:text-[20px]">
              {images[activeImg].caption}
            </p>
            {/* 이미지 비율이 제각각이라 중앙 정렬 + contain으로 표시 */}
            <div className="absolute inset-0 flex items-center justify-center px-20 pb-12 pt-16 lg:px-28 lg:pt-20">
              <img
                key={`${activeTab}-${activeImg}`}
                src={images[activeImg].src}
                alt={`${TABS[activeTab].title} — ${images[activeImg].caption}`}
                className="max-h-full max-w-full animate-[galleryFade_0.5s_ease-out] rounded-[10px] drop-shadow-[0_16px_24px_rgba(0,0,0,0.35)]"
              />
            </div>

            <button
              type="button"
              aria-label="이전 이미지"
              onClick={() => goImg(activeImg - 1)}
              className="absolute left-4 top-1/2 z-10 flex size-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 lg:left-[26px] lg:size-[52px]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M15 5l-7 7 7 7"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="다음 이미지"
              onClick={() => goImg(activeImg + 1)}
              className="absolute right-4 top-1/2 z-10 flex size-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 lg:right-[26px] lg:size-[52px]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-start gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`${i + 1}번째 이미지 보기`}
                  onClick={() => goImg(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeImg ? "w-6 bg-primary" : "w-2 bg-primary/50 hover:bg-primary/70"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 탭 목록 — 탭 클릭 시에만 화면 전환 (간격: Figma 88:975 기준) */}
          <div className="flex w-full flex-col gap-1 lg:min-w-0 lg:flex-1">
            {TABS.map((tab, i) => (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => selectTab(i)}
                  className={`flex w-full items-center gap-3 rounded-[14px] px-4 py-3 text-left transition-colors lg:rounded-[100px] lg:px-6 ${
                    i === activeTab ? "bg-[#0d3688]" : "hover:bg-[#f2f6fc]"
                  }`}
                >
                  {i === activeTab && (
                    <svg
                      width="8"
                      height="14"
                      viewBox="0 0 8 14"
                      fill="none"
                      className="shrink-0"
                      aria-hidden
                    >
                      <path
                        d="M1 1l6 6-6 6"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  <span
                    className={`text-[17px] font-bold leading-[25px] lg:text-[20px] ${
                      i === activeTab ? "text-white" : "text-[#1a202c]/40"
                    }`}
                  >
                    {tab.title}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ${
                    i === activeTab
                      ? "grid-rows-[1fr] pb-5 pt-4 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden pl-6 text-[15px] leading-6 text-black lg:text-[16px]">
                    {tab.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
