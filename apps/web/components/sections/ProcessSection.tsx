import Reveal from "@/components/Reveal";

interface Step {
  no: string;
  title: string;
  description: string;
  image: string;
  /** Figma 88:1257 기준 카드 내 일러스트 위치·크기 */
  imageClass: string;
  accent?: boolean;
}

const STEPS: Step[] = [
  {
    no: "1",
    title: "가입 요청",
    description: "인력사무소 정보와 담당자 연락처를 남깁니다.",
    image: "/assets/process-step1.png",
    imageClass: "bottom-[24px] right-[30px] h-[112px]",
  },
  {
    no: "2",
    title: "계정 발급",
    description: "담당자 확인 후 운영 계정이 발급됩니다.",
    image: "/assets/process-step2.png",
    // 손목 일러스트는 원본 디자인대로 카드 오른쪽 밖으로 살짝 잘려나감
    imageClass: "bottom-[38px] right-[-8px] h-[66px]",
  },
  {
    no: "3",
    title: "무료 사용",
    description: "베타 기간 동안 전 기능을 무료로 사용합니다.",
    image: "/assets/process-step3.png",
    imageClass: "bottom-[24px] right-[30px] h-[106px]",
    accent: true,
  },
];

/** 도입 절차 3단계 (Figma 88:1252) */
export default function ProcessSection() {
  return (
    <section id="process" className="flex flex-col items-center gap-14 bg-[#f6f6f6] px-5 py-24 lg:gap-20 lg:px-10 lg:py-32">
      <Reveal>
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-[14px] font-bold leading-[18px] text-primary">도입 절차</p>
          <h2 className="text-[26px] font-bold leading-tight text-black lg:text-[40px] lg:leading-[52px]">
            가입 후 무료로 사용하세요
          </h2>
          <p className="text-[15px] leading-relaxed text-[#6b7280] lg:text-[17px]">
            인력사무소 확인 후 계정이 발급되면, 베타 기간 동안 전 기능을 무료로 사용합니다.
          </p>
        </div>
      </Reveal>

      <div className="flex w-full max-w-[1200px] flex-col items-center gap-5 lg:flex-row lg:gap-6">
        {STEPS.map((step, i) => (
          <div key={step.no} className="contents">
            {i > 0 && (
              <img
                src="/assets/process-arrow.svg"
                alt=""
                aria-hidden
                className="h-8 w-[34px] shrink-0 rotate-90 lg:rotate-0"
              />
            )}
            <Reveal delay={i * 150} className="w-full flex-1">
              <div
                className={`relative flex h-[260px] flex-col gap-8 overflow-hidden rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(16,24,40,0.1)] ${
                  step.accent
                    ? "border-2 border-transparent [background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(108deg,#00c800_3.5%,#0669f7_82%)_border-box]"
                    : "border border-black/10 bg-white"
                }`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex size-[31px] items-center justify-center rounded-[8px] text-[16.5px] font-bold text-white ${
                        step.accent ? "bg-[#00c800]" : "bg-primary"
                      }`}
                    >
                      {step.no}
                    </span>
                    <span
                      className={`text-[24px] font-bold leading-9 lg:text-[28px] ${
                        step.accent ? "text-[#00c800]" : "text-primary"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  <p className="text-[15px] font-medium leading-5 text-black/55 lg:text-[16px]">{step.description}</p>
                </div>
                <img
                  src={step.image}
                  alt=""
                  aria-hidden
                  className={`pointer-events-none absolute w-auto ${step.imageClass}`}
                />
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
