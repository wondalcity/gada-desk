import Reveal from "@/components/Reveal";

/** 다크 배너 — 상생 플랫폼 메시지 (Figma 88:992) */
export default function BannerSection() {
  return (
    <section className="relative overflow-hidden bg-[#0c1322] py-20 lg:py-[90px]">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: "radial-gradient(60% 140% at 50% 0%, #12203c 0%, #0c1322 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[-110px] size-[360px] -translate-x-1/2 rounded-full bg-primary opacity-25 blur-[70px]"
        aria-hidden
      />
      <Reveal className="relative">
        <div className="mx-auto flex max-w-[900px] flex-col items-center px-6 text-center">
          <h2 className="text-[24px] font-normal leading-[1.5] tracking-[-1px] text-white lg:text-[38px] lg:leading-[56px]">
            가다는 인력사무소가 아니라,
            <br />
            <span className="bg-gradient-to-r from-[#8cc800] to-[#3186ff] bg-clip-text font-bold text-transparent">
              인력사무소와 상생하는 플랫폼
            </span>
            입니다.
          </h2>
          <p className="pb-[52px] pt-4 text-[15px] leading-relaxed text-[#9ba6bc] lg:text-[17px]">
            베타 기간에는 등급 구분 없이 핵심 기능과 가다 오피스 노무 문서까지 모두 무료로 제공합니다.
          </p>
          <a
            href="#final-cta"
            className="flex h-[58px] items-center rounded-full border-2 border-[#88c50d] px-8 text-[18px] font-bold text-white transition-all duration-300 hover:bg-[#88c50d] hover:text-[#0c1322] hover:shadow-[0_6px_24px_rgba(136,197,13,0.4)]"
          >
            무료 체험하기
          </a>
          <p className="pt-6 text-[13px] leading-relaxed text-[#5c677e]">
            요금 정책은 추후 수립되며, 전환 시점은 사전에 안내드립니다.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
