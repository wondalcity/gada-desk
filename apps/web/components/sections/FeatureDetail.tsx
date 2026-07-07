import Reveal from "@/components/Reveal";

/** 가다 데스크 차별점 — POINT 01/02 (Figma 88:1006) */
export default function FeatureDetail() {
  return (
    <section className="flex flex-col items-center gap-14 bg-white pb-24 pt-28 lg:gap-20 lg:pb-32 lg:pt-40">
      <Reveal>
        <div className="flex flex-col items-center gap-4 px-6 text-center">
          <p className="text-[14px] font-bold leading-[18px] text-primary">가다 데스크만의 차별점</p>
          <p className="text-[26px] font-bold leading-tight text-black lg:text-[40px] lg:leading-[52px]">
            부족한 인력은 채우고, 복잡한 서류는 줄이고
          </p>
          <p className="max-w-[720px] text-[15px] leading-relaxed text-[#6b7280] lg:text-[17px]">
            대부분의 프로그램은 기록에서 끝납니다. 가다 데스크는 부족한 인력을 전국 근로자 풀로 채우고, 노무 문서
            9종까지 무료로 디지털화합니다.
          </p>
        </div>
      </Reveal>

      <div className="flex w-full flex-col gap-20 lg:gap-[100px]">
        {/* POINT 01 — 인력 지원 */}
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-5 lg:flex-row lg:gap-16 lg:px-10">
          <Reveal className="flex-1">
            <div className="flex flex-col items-start gap-6 lg:gap-8">
              <span
                className="rounded-full px-[17px] py-2 text-[14px] font-bold leading-[14px] text-white drop-shadow-[0_2px_5px_rgba(6,105,247,0.08)]"
                style={{ backgroundImage: "linear-gradient(105deg, #00c800 6%, #0669f7 92%)" }}
              >
                POINT 01
              </span>
              <h4 className="text-[26px] font-bold leading-[1.2] tracking-[-0.72px] text-black lg:text-[36px]">
                사람이 모자라면, <span className="text-primary">가다가 채워드립니다</span>
              </h4>
              <div className="flex flex-col gap-3 text-[16px] font-medium leading-[1.45] text-black/55 lg:text-[18px]">
                <p>
                  가다 앱을 통해 전국에서 활동하는 검증된 근로자와 연결됩니다. 우리 사무소 인력이 모자랄 때, 가까운
                  지역의 인력을 지도에서 바로 확인하고 현장에 연결하세요.
                </p>
                <p>발품 팔 필요 없이 가다 데스크에서 인력을 요청해 현장의 공백을 메웁니다.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} className="w-full lg:w-[544px] lg:shrink-0">
            <div className="group relative overflow-hidden rounded-[24px]">
              <img
                src="/assets/feature1-map.png"
                alt="전국 인력 현황 지도 — 전국 활동 근로자 1,500명+, 연결 현장 80현장"
                className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </Reveal>
        </div>

        {/* POINT 02 — 노무 문서 */}
        <div className="mx-auto flex w-full max-w-[1280px] flex-col-reverse items-center gap-10 px-5 lg:flex-row lg:gap-16 lg:px-10">
          <Reveal delay={150} className="w-full lg:w-[544px] lg:shrink-0">
            <div className="group relative overflow-hidden rounded-[24px]">
              <img
                src="/assets/feature1-docs.png"
                alt="노무 문서 9종 — 근로계약서, 임금명세서, 노무비 지급명세서 등"
                className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </Reveal>
          <Reveal className="flex-1">
            <div className="flex flex-col items-start gap-6 lg:gap-8">
              <span
                className="rounded-full px-[17px] py-2 text-[14px] font-bold leading-[14px] text-white drop-shadow-[0_2px_5px_rgba(6,105,247,0.08)]"
                style={{ backgroundImage: "linear-gradient(105deg, #00c800 6%, #0669f7 92%)" }}
              >
                POINT 02
              </span>
              <h4 className="text-[26px] font-bold leading-[1.2] tracking-[-0.72px] text-black lg:text-[36px]">
                <span className="text-primary">노무 문서 9종</span>을 디지털로
              </h4>
              <div className="flex flex-col gap-3 text-[16px] font-medium leading-[1.45] text-black/55 lg:text-[18px]">
                <p>
                  기존 노무 문서 업무를 디지털화해 현장 관리자의 부담을 최소화합니다. 현장 일정에 맞춘 자동 생성,
                  근로계약서 내 서명 반영, 엑셀·PDF 다운로드까지.
                </p>
                <p>가다 데스크를 쓰면 추가 비용 없이 무료로 함께 이용합니다.</p>
              </div>
              <a
                href="https://www.worksmate.co.kr"
                className="text-[15px] font-bold leading-6 text-primary transition-transform hover:translate-x-1"
              >
                가다 오피스 자세히 보기 →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
