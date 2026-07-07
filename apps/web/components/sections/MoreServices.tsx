import Reveal from "@/components/Reveal";

/** 가다의 더 많은 서비스 (Figma 88:2242) */
export default function MoreServices() {
  return (
    <section className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 bg-white px-5 py-24 lg:flex-row lg:gap-16 lg:px-10 lg:py-32">
      <Reveal className="flex-1">
        <div className="flex flex-col items-start gap-8 lg:gap-12">
          <div className="flex flex-col gap-6">
            <h4 className="text-[26px] font-bold leading-[1.2] tracking-[-0.72px] text-black lg:text-[36px]">
              가다의 더 많은 서비스 알아보기
            </h4>
            <p className="text-[16px] font-medium leading-[1.45] text-black/55 lg:text-[18px]">
              스마트한 건설 현장의 시작, 가다가 제공하는
              <br className="hidden lg:block" />
              다양한 디지털 현장&인력 관리 솔루션을 확인해보세요.
            </p>
          </div>
          <a
            href="https://www.worksmate.co.kr"
            className="rounded-[12px] bg-black px-4 py-3 text-[18px] font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
          >
            보러가기
          </a>
        </div>
      </Reveal>
      <Reveal delay={150} className="w-full lg:w-[568px] lg:shrink-0">
        <div className="group overflow-hidden rounded-[24px]">
          <img
            src="/assets/feature2-banner.png"
            alt="가다 서비스 배너"
            className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </Reveal>
    </section>
  );
}
