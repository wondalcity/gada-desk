import Reveal from "@/components/Reveal";

/** 가다 데스크 차별점 — POINT 01/02 (Figma 88:1006) */
export default function FeatureDetail() {
  return (
    <section className="flex flex-col items-center gap-14 bg-white pb-24 pt-28 lg:gap-20 lg:pb-32 lg:pt-40">
      <Reveal>
        <div className="flex flex-col items-center gap-4 px-6 text-center">
          <p className="text-[14px] font-bold leading-[18px] text-primary">가다 데스크만의 차별점</p>
          <h2 className="text-[26px] font-bold leading-tight text-black lg:text-[40px] lg:leading-[52px]">
            부족한 인력은 채우고, 복잡한 서류는 줄이고
          </h2>
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
              <h3 className="text-[26px] font-bold leading-[1.2] tracking-[-0.72px] text-black lg:text-[36px]">
                사람이 모자라면, <span className="text-primary">가다가 채워드립니다</span>
              </h3>
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
            {/* 지도·스탯 카드가 베이크된 저해상도 이미지 대신 코드로 합성 */}
            <div className="group relative aspect-[544/432] overflow-hidden rounded-[24px] bg-[#e9f1fd]">
              <p className="absolute left-7 top-6 z-10 text-[15px] font-semibold text-[#5c6b84]">
                전국 인력 현황
              </p>
              <div className="absolute left-1/2 top-1/2 h-[88%] -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src="/assets/feature1-map.png"
                  alt="전국 인력 현황 지도 — 전국 활동 근로자 약 2만명, 누적 현장 수 6,400현장+"
                  className="h-full w-auto"
                />
                {/* 활동 지역 핀 */}
                {[
                  { left: "27%", top: "21%", big: true }, // 서울
                  { left: "47%", top: "38%" }, // 충청북도
                  { left: "20%", top: "45%" }, // 충청남도
                  { left: "67%", top: "56%" }, // 대구
                  { left: "80%", top: "70%" }, // 부산
                  { left: "27%", top: "72%" }, // 광주
                  { left: "77%", top: "26%" }, // 강원 동부
                ].map((pin, i) => (
                  <span
                    key={i}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: pin.left, top: pin.top }}
                    aria-hidden
                  >
                    <span className="animate-pin-pulse absolute inset-0 -m-2 rounded-full bg-primary/30" />
                    <span
                      className={`relative block rounded-full bg-primary ${
                        pin.big ? "size-5 border-4 border-white" : "size-3 border-2 border-white"
                      } shadow-[0_2px_6px_rgba(6,105,247,0.45)]`}
                    />
                  </span>
                ))}
              </div>
              {/* 스탯 카드 */}
              <div className="absolute bottom-6 right-6 z-10 flex gap-3">
                <div className="rounded-[14px] bg-white px-5 py-4 shadow-[0_8px_20px_rgba(16,24,40,0.08)]">
                  <p className="text-[12.5px] font-medium text-[#6b7280]">전국 활동 근로자</p>
                  <p className="mt-1 text-[22px] font-bold leading-none text-primary">약 2만명</p>
                </div>
                <div className="rounded-[14px] bg-white px-5 py-4 shadow-[0_8px_20px_rgba(16,24,40,0.08)]">
                  <p className="text-[12.5px] font-medium text-[#6b7280]">누적 현장 수</p>
                  <p className="mt-1 text-[22px] font-bold leading-none text-primary">6,400현장+</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* POINT 02 — 노무 문서 */}
        <div className="mx-auto flex w-full max-w-[1280px] flex-col-reverse items-center gap-10 px-5 lg:flex-row lg:gap-16 lg:px-10">
          <Reveal delay={150} className="w-full lg:w-[544px] lg:shrink-0">
            <div className="group relative aspect-[544/432] overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#e9f7ea_0%,#dcebfb_100%)]">
              <img
                src="/assets/feature1-docs.png"
                alt="노무 문서 9종 — 근로계약서, 임금명세서, 노무비 지급명세서 등"
                className="size-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
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
              <h3 className="text-[26px] font-bold leading-[1.2] tracking-[-0.72px] text-black lg:text-[36px]">
                <span className="text-primary">노무 문서 9종</span>을 디지털로
              </h3>
              <div className="flex flex-col gap-3 text-[16px] font-medium leading-[1.45] text-black/55 lg:text-[18px]">
                <p>
                  기존 노무 문서 업무를 디지털화해 현장 관리자의 부담을 최소화합니다. 현장 일정에 맞춘 자동 생성,
                  근로계약서 내 서명 반영, 엑셀·PDF 다운로드까지.
                </p>
                <p>가다 데스크를 쓰면 추가 비용 없이 무료로 함께 이용합니다.</p>
              </div>
              <a
                href="https://1gada.com/office"
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
