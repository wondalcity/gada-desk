import Reveal from "@/components/Reveal";

/** 배경에 흩뿌려진 장식 파티클 — Figma 좌표(2174×1117)를 %로 환산 */
const particles = [
  { left: "8%", top: "17.6%", size: 6, opacity: 0.2 },
  { left: "92%", top: "28.4%", size: 4, opacity: 0.36 },
  { left: "15%", top: "80.5%", size: 8, opacity: 0.63 },
  { left: "85%", top: "69.2%", size: 5, opacity: 0.44 },
  { left: "45%", top: "7.9%", size: 4, opacity: 0.53 },
  { left: "60%", top: "94%", size: 6, opacity: 0.26 },
  { left: "25%", top: "47%", size: 3, opacity: 0.2 },
  { left: "78%", top: "90%", size: 7, opacity: 0.61 },
];

/** 대시보드 주변을 떠다니는 기능 칩 */
const floatingChips = [
  {
    label: "출역 마감",
    icon: "/assets/hero-chip-closing.svg",
    tint: "bg-[rgba(33,150,243,0.2)] border-[rgba(33,150,243,0.33)]",
    position: "-top-[3%] -right-24",
    rotate: "8.66deg",
    floatDelay: "0s",
  },
  {
    label: "근로계약서",
    icon: "/assets/hero-chip-contract.svg",
    tint: "bg-[rgba(0,188,212,0.2)] border-[rgba(0,188,212,0.33)]",
    position: "top-[22%] -right-56",
    rotate: "1.67deg",
    floatDelay: "0.8s",
  },
  {
    label: "작업 관리",
    icon: "/assets/hero-chip-work.svg",
    tint: "bg-[rgba(255,87,34,0.2)] border-[rgba(255,87,34,0.33)]",
    position: "top-[62%] -right-16",
    rotate: "-7.4deg",
    floatDelay: "1.6s",
  },
  {
    label: "출근 확인",
    icon: "/assets/hero-chip-attendance.svg",
    tint: "bg-[rgba(63,81,181,0.2)] border-[rgba(63,81,181,0.33)]",
    position: "top-[92%] -right-72",
    rotate: "4.29deg",
    floatDelay: "2.4s",
  },
  {
    label: "현장 안전 관리",
    icon: "/assets/hero-chip-safety.svg",
    tint: "bg-[rgba(255,152,0,0.2)] border-[rgba(255,152,0,0.33)]",
    position: "-top-[6%] -left-52",
    rotate: "9.7deg",
    floatDelay: "1.2s",
  },
  {
    label: "현장 배치",
    icon: "/assets/hero-chip-assign.svg",
    tint: "bg-[rgba(156,39,176,0.2)] border-[rgba(156,39,176,0.33)]",
    position: "top-[16%] -left-80",
    rotate: "-2.22deg",
    floatDelay: "2s",
  },
];

/** 대시보드 주변 지표 카드 */
const statCards = [
  {
    value: "1,155건",
    badge: "+12%",
    label: "이번 달 현장",
    position: "top-[38%] -left-56",
    rotate: "-8.47deg",
    floatDelay: "0.4s",
  },
  {
    value: "683명",
    badge: null,
    label: "오늘 출역 인원",
    position: "top-[70%] -left-24",
    rotate: "5.29deg",
    floatDelay: "1.4s",
  },
  {
    value: "254명",
    badge: "+5%",
    label: "현장 배치 완료",
    position: "top-[20%] -right-20",
    rotate: "6.69deg",
    floatDelay: "2.2s",
  },
];

/** 히어로 — 그라데이션 배경 + 카피 + CTA + 떠다니는 대시보드 (Figma 88:156) */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-b-[24px]"
      style={{
        backgroundImage:
          "linear-gradient(169.4deg, #0a2463 8.49%, #1565c0 29.24%, #1976d2 50%, #1e88e5 66.61%, #42a5f5 79.06%, #90caf9 91.51%)",
      }}
    >
      {/* float 키프레임 — tailwind.config/globals.css 수정 없이 컴포넌트에 내장 */}
      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        /* 칩·지표 카드용 — 더 큰 진폭 + 좌우 드리프트 + 기울기 */
        @keyframes heroChipFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(6px, -14px) rotate(2.5deg); }
          50% { transform: translate(-4px, -26px) rotate(-2deg); }
          75% { transform: translate(-8px, -10px) rotate(1.5deg); }
        }
        @keyframes heroChipFloatAlt {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-7px, -12px) rotate(-3deg); }
          50% { transform: translate(5px, -24px) rotate(2deg); }
          75% { transform: translate(9px, -8px) rotate(-1.5deg); }
        }
      `}</style>

      {/* 배경 글로우 */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(55% 40% at 50% 0%, rgba(255,255,255,0.12) 0%, rgba(128,128,128,0.04) 40%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(30% 45% at 20% 94%, rgba(30,136,229,0.4) 0%, transparent 60%), radial-gradient(30% 45% at 80% 82%, rgba(100,181,246,0.3) 0%, transparent 60%)",
        }}
      />

      {/* 파티클 */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full bg-white/30"
          aria-hidden
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
        />
      ))}

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center px-6 pb-12 pt-32 lg:px-8 lg:pt-36">
        {/* 헤드라인 */}
        <Reveal>
          <h1 className="text-center text-[38px] font-bold leading-[1.3] text-white md:text-[52px] lg:text-[64px] lg:leading-[82px]">
            인력 관리부터 충원까지,
            <br />
            <span className="bg-gradient-to-r from-white via-[#bbdefb] to-[#e3f2fd] bg-clip-text text-transparent">
              한 화면에서 끝!
            </span>
          </h1>
        </Reveal>

        {/* 서브 카피 */}
        <Reveal delay={120}>
          <p className="pt-7 text-center text-base leading-[1.65] text-white/75 md:text-lg">
            출역·마감·정산은 디지털로 간편하게,
            <br />
            사람이 모자랄 땐 가다 인력으로. 인력사무소의 반복 업무를 줄여드립니다.
          </p>
        </Reveal>

        {/* CTA 버튼 */}
        <Reveal delay={240}>
          <div className="flex flex-col items-center gap-4 pt-10 sm:flex-row">
            <a
              href="#final-cta"
              className="inline-flex h-[60px] min-w-[180px] items-center justify-center rounded-full bg-white px-8 text-[20px] font-bold text-[#0454c5] shadow-[0px_8px_32px_0px_rgba(21,101,192,0.5)] transition-all duration-300 hover:scale-105 hover:brightness-95"
            >
              무료 체험하기
            </a>
            <a
              href="/docs/gada-desk-intro-v1.0.pdf"
              download="가다 데스크 서비스 소개서 ver 1.0.pdf"
              className="inline-flex h-[60px] min-w-[180px] items-center justify-center rounded-full border-2 border-white/45 bg-white/[0.08] px-8 text-[18px] font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              소개자료 다운받기
            </a>
          </div>
        </Reveal>

        {/* 대시보드 + 플로팅 요소 */}
        <Reveal delay={380} className="relative mt-16 w-full max-w-[891px] lg:mt-20">
          <div style={{ animation: "heroFloat 7s ease-in-out infinite" }}>
            <div className="relative overflow-hidden rounded-[12px] border-2 border-black shadow-[0px_0px_0px_1px_rgba(255,255,255,0.08),0px_40px_80px_0px_rgba(7,40,87,0.6)] lg:rounded-[20px] lg:border-[3px]">
              <img
                src="/assets/hero-dashboard.png"
                alt="가다데스크 관리자 대시보드 — 현장 유지 현황과 출역 인원을 한 화면에서 관리"
                className="block w-full"
              />
            </div>
          </div>

          {/* 플로팅 칩 — 데스크톱에서만 노출 */}
          {floatingChips.map((chip, i) => (
            <div
              key={chip.label}
              className={`pointer-events-none absolute hidden lg:block ${chip.position}`}
              style={{
                animation: `${i % 2 === 0 ? "heroChipFloat" : "heroChipFloatAlt"} ${4.5 + (i % 3) * 0.9}s ease-in-out ${chip.floatDelay} infinite`,
              }}
            >
              <div
                className="flex items-center gap-2 rounded-[16px] border border-white/30 bg-white/20 px-[13px] py-[9px] shadow-lg backdrop-blur-sm"
                style={{ transform: `rotate(${chip.rotate})` }}
              >
                <span
                  className={`flex size-6 items-center justify-center rounded-[10px] border ${chip.tint}`}
                >
                  <img src={chip.icon} alt="" className="size-[13px]" />
                </span>
                <span className="whitespace-nowrap text-[11px] font-medium leading-none text-white/90">
                  {chip.label}
                </span>
              </div>
            </div>
          ))}

          {/* 지표 카드 — 데스크톱에서만 노출 */}
          {statCards.map((card, i) => (
            <div
              key={card.label}
              className={`pointer-events-none absolute hidden lg:block ${card.position}`}
              style={{
                animation: `${i % 2 === 0 ? "heroChipFloatAlt" : "heroChipFloat"} ${5 + (i % 3) * 0.8}s ease-in-out ${card.floatDelay} infinite`,
              }}
            >
              <div
                className="flex min-w-[120px] flex-col rounded-[16px] bg-white/90 px-4 py-3 shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]"
                style={{ transform: `rotate(${card.rotate})` }}
              >
                <div className="flex items-center gap-2">
                  <span className="whitespace-nowrap text-[18px] font-bold leading-7 text-[#1e2939]">
                    {card.value}
                  </span>
                  {card.badge && (
                    <span className="rounded-full bg-[#dcfce7] px-1.5 py-0.5 text-[11px] font-bold leading-none text-[#00a63e]">
                      {card.badge}
                    </span>
                  )}
                </div>
                <span className="whitespace-nowrap pt-1 text-[10px] font-medium leading-[15px] text-[#6a7282]">
                  {card.label}
                </span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
