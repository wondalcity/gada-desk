import Reveal from "@/components/Reveal";

/** 히어로 아래 그라데이션 헤드라인 밴드 (Figma 88:477) */
export default function HeadlineBand() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* blur() 필터는 클리핑 경계가 그대로 드러나 radial-gradient로 대체 */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: [
            "radial-gradient(40% 55% at 16% 50%, #fdf6e0 0%, rgba(253,246,224,0) 75%)",
            "radial-gradient(35% 50% at 45% 56%, #e8f8e9 0%, rgba(232,248,233,0) 75%)",
            "radial-gradient(42% 60% at 84% 50%, #cee2ff 0%, rgba(206,226,255,0) 75%)",
          ].join(", "),
        }}
      />
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
