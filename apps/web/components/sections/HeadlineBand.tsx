import Reveal from "@/components/Reveal";

/** 히어로 아래 그라데이션 헤드라인 밴드 (Figma 88:477) */
export default function HeadlineBand() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-[10%] top-1/2 h-[224px] w-[245px] -translate-y-1/2 rounded-full bg-[#fdf6e0] blur-[50px]" />
        <div className="absolute left-[28%] top-[55%] h-[224px] w-[400px] rounded-full bg-[#e8f8e9] blur-[50px]" />
        <div className="absolute right-[10%] top-1/2 h-[224px] w-[505px] -translate-y-1/2 rounded-full bg-[#cee2ff] blur-[50px]" />
      </div>
      <Reveal className="relative">
        <div className="mx-auto max-w-[1200px] px-6 text-center text-[28px] font-bold leading-[1.35] lg:text-[52px] lg:leading-[68px]">
          <p className="text-black">성공적인 인력사무소 운영을 위한</p>
          <p className="bg-gradient-to-r from-[#079d07] via-[#00a2ac] to-[#0669f7] bg-clip-text text-transparent">
            올인원 디지털 파트너, 가다 데스크
          </p>
        </div>
      </Reveal>
    </section>
  );
}
