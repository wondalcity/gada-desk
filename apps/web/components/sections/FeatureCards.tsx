import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

interface FeatureCard {
  title: string;
  description: string;
  badge?: string;
  icon: ReactNode;
  visual: ReactNode;
}

/* ---------- 공용 미니 UI 조각 ---------- */

function GradientButton({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`absolute flex h-[49px] items-center justify-center gap-2 rounded-lg bg-[linear-gradient(108deg,#00c800_3.5%,#0669f7_82%)] px-4 shadow-[15px_20px_20px_0_rgba(0,0,0,0.2)] ${className}`}
    >
      {children}
    </div>
  );
}

function MiniTag({ children }: { children: ReactNode }) {
  return (
    <span className="whitespace-nowrap rounded-[2.5px] border-[0.6px] border-[#c4c4c4] bg-white p-[5px] text-[8px] leading-none text-[#595959]">
      {children}
    </span>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="relative flex items-start gap-[18px] text-[12px] leading-[15px]">
      <span className="w-[59px] shrink-0 font-medium text-[#7a7b7a]">{label}</span>
      <span className="flex-1 text-[#25282a]">{value}</span>
    </div>
  );
}

/* ---------- 카드별 목업 비주얼 ---------- */

function SiteManageVisual() {
  return (
    <>
      {/* 현장 기본 정보 패널 */}
      <div className="absolute left-[50px] top-[188px] w-[258px] overflow-hidden rounded-[10px] border-[0.6px] border-[#cecece] opacity-70">
        <div className="flex h-[45px] items-center justify-between border-2 border-[#82b4fb] bg-[#d6dce5] px-[15px]">
          <p className="text-[14px] font-medium text-[#25282a]">기본 정보</p>
          <img src="/assets/cards-arrow-chevron.svg" alt="" className="size-[14px] rotate-90" />
        </div>
        <div className="relative bg-gradient-to-b from-white to-[#f9fbfd]">
          <div className="absolute inset-y-0 left-0 w-[80px] bg-[#f2f2f2]" />
          <div className="relative flex flex-col gap-3 px-[15px] py-3">
            <InfoRow label="현장명" value="서울 영등포구 여의도동 가다 서울사무소 보수공사" />
            <InfoRow label="지역" value="서울" />
            <InfoRow label="계약업체" value="가다개발 주식회사" />
            <InfoRow label="용도" value="조경/레저/관광" />
            <div className="flex items-center gap-[18px] text-[12px]">
              <span className="w-[59px] shrink-0 font-medium text-[#7a7b7a]">공종</span>
              <span className="flex items-center">
                <MiniTag>건축</MiniTag>
                <img src="/assets/cards-arrow-tag-1.svg" alt="" className="size-[12px]" />
                <MiniTag>지반조성, 포장공사</MiniTag>
                <img src="/assets/cards-arrow-tag-2.svg" alt="" className="size-[12px]" />
                <MiniTag>토공사</MiniTag>
              </span>
            </div>
            <InfoRow label="시공 기간" value="2026-04-11 ~ 2026-11-12" />
          </div>
        </div>
      </div>
      {/* 신규 현장 등록 버튼 */}
      <GradientButton className="left-[148px] top-[170px]">
        <img src="/assets/cards-icon-plus.svg" alt="" className="size-[17px] rotate-45" />
        <p className="whitespace-nowrap text-[19px] font-medium text-white">신규 현장 등록</p>
      </GradientButton>
    </>
  );
}

function WorkerHistoryVisual() {
  return (
    <>
      <img
        src="/assets/cards-attendance-calendar.png"
        alt=""
        className="absolute left-1/2 top-[186px] h-[266px] w-[288px] max-w-none -translate-x-1/2 rounded-[10px] border border-[#cfcfcf] object-cover opacity-60"
      />
      {/* 출역 상세 카드 */}
      <div className="absolute left-[198px] top-[151px] h-[176px] w-[103px] rounded-[10px] border-2 border-[#00c800] bg-white px-[11px] py-[12px]">
        <div className="flex items-start justify-between">
          <p className="text-[11px] font-medium leading-[14px] text-[#25282a]">10</p>
          <MiniTag>완료</MiniTag>
        </div>
        <div className="mt-[6px] text-[11px] font-bold leading-[16px] tracking-[-0.7px] text-[#424242]">
          <p>서울 은평구</p>
          <p>힐스테이트 아파트</p>
          <p>(OO건설)</p>
        </div>
        <div className="mt-[7px] text-[10px] leading-[15px] text-[#424242]">
          <p>보통인부</p>
          <p>단가 : 160,000원</p>
        </div>
        <div className="mt-[16px] text-[10px] leading-[15px] text-[#424242]">
          <p>공수 : 1.0</p>
          <p>지급 : 142,710원</p>
        </div>
      </div>
    </>
  );
}

function GadaWorkerVisual() {
  return (
    <>
      {/* 근로자 이력서 카드 */}
      <div className="absolute left-1/2 top-[191px] w-[231px] -translate-x-1/2 rounded-[11px] border-[0.7px] border-[#cecece] bg-white p-[19px] opacity-70 drop-shadow-[17px_22px_11px_rgba(0,0,0,0.1)]">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-[10px] font-bold leading-[13px] text-[#25282a]">김가다</p>
              <p className="text-[7px] leading-[10px] text-[#7a7b7a]">남, 1981 (만 44세)</p>
            </div>
            <div className="flex flex-col gap-[2px] text-[7px] leading-[10px]">
              <p className="flex gap-1">
                <span className="w-[31px] text-[#7a7b7a]">전화번호</span>
                <span className="text-[#25282a]">010-1234-5678</span>
              </p>
              <p className="flex gap-1">
                <span className="w-[31px] text-[#7a7b7a]">국적(비자)</span>
                <span className="text-[#25282a]">대한민국</span>
              </p>
            </div>
          </div>
          <span className="block size-[47px] shrink-0 overflow-hidden rounded-full bg-[#e8eef7]">
            <img src="/assets/cards-worker-photo.png" alt="" className="size-full object-cover" />
          </span>
        </div>
        <div className="mt-3 flex items-stretch gap-2">
          <div className="w-[70px] shrink-0 rounded-[2px] border-[0.5px] border-[#ddd] bg-white px-2 py-[6px]">
            <p className="flex items-center gap-[2px] text-[7px] font-bold text-[#25282a]">
              <img src="/assets/cards-icon-suitcase.svg" alt="" className="size-[8px]" />
              경력
            </p>
            <div className="mt-[6px] flex flex-col gap-[2px] text-[7px] leading-[9px]">
              <p className="flex justify-between">
                <span className="font-medium text-[#7a7b7a]">연차</span>
                <span className="text-[#353535]">10년</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium text-[#7a7b7a]">숙련도</span>
                <span className="text-[#353535]">기공</span>
              </p>
            </div>
          </div>
          <div className="flex-1 rounded-[2px] border-[0.5px] border-[#ddd] bg-white px-2 py-[6px]">
            <p className="flex items-center gap-[2px] text-[7px] font-bold text-[#25282a]">
              <img src="/assets/cards-icon-hardhat.svg" alt="" className="size-[8px]" />
              대표 경험
            </p>
            <div className="mt-1 flex flex-wrap gap-[2px]">
              {["조공/잡부", "청소", "곰방/양중", "형틀목공", "금속"].map((tag) => (
                <span
                  key={tag}
                  className="whitespace-nowrap rounded-[4px] bg-[#dee3ec] px-1 py-[3px] text-[6px] leading-none font-medium text-[#233040]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-[#25282a] pt-2">
          <p className="text-[8px] font-bold leading-[10px] text-[#25282a]">경험 상세</p>
          <div className="mt-3 flex flex-col gap-[7px]">
            {[
              { year: "2025", period: "1년 2개월", role: "보통인부·반장", company: "가다건설", detail: "50명 이상 근로자 업무지시, 현장 업무를 총괄" },
              { year: "", period: "2개월", role: "보통인부", company: "웍스건설", detail: "30명 이상 근로자 업무지시, 현장 업무를 총괄" },
            ].map((exp) => (
              <div key={exp.company} className="flex gap-3 text-[7px] leading-[9px]">
                <span className="flex w-[54px] shrink-0 justify-between">
                  <span className="font-bold text-[#595959]">{exp.year}</span>
                  <span className="font-medium text-[#7a7b7a]">{exp.period}</span>
                </span>
                <span className="flex-1">
                  <span className="flex gap-1 whitespace-nowrap">
                    <span className="text-[8px] font-medium text-[#353535]">{exp.role}</span>
                    <span className="text-[#7a7b7a]">{exp.company}</span>
                  </span>
                  <span className="mt-[3px] block text-[#353535]">{exp.detail}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 border-t border-[#25282a] pt-2">
          <p className="text-[8px] font-bold leading-[10px] text-[#25282a]">문서</p>
          <div className="mt-3 flex flex-col gap-2">
            {[
              { date: "2024.06.28", name: "기능등급증명서", detail: "형틀목공 고급" },
              { date: "2024.06.28", name: "배치전 건강진단개인표", detail: "소음, 광물성 분진, 진동, 자외선" },
            ].map((doc) => (
              <div key={doc.name} className="flex gap-3 text-[7px] leading-[9px]">
                <span className="w-[54px] shrink-0 font-medium text-[#7a7b7a]">{doc.date}</span>
                <span className="flex-1">
                  <span className="block text-[8px] font-medium text-[#353535]">{doc.name}</span>
                  <span className="mt-[2px] block text-[#7a7b7a]">{doc.detail}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 근로자 프로필 사진 */}
      <div className="absolute left-[225px] top-[177px] size-[95px] drop-shadow-[15px_20px_10px_rgba(0,0,0,0.2)]">
        <span className="block size-full overflow-hidden rounded-full bg-[#e8eef7]">
          <img src="/assets/cards-worker-photo.png" alt="" className="size-full object-cover" />
        </span>
        <img src="/assets/cards-photo-ring.svg" alt="" className="absolute inset-0 size-full" />
      </div>
      {/* 이력서 조회 버튼 */}
      <GradientButton className="left-[52px] top-[255px] w-[135px]">
        <p className="whitespace-nowrap text-[20px] font-medium text-white">이력서 조회</p>
      </GradientButton>
    </>
  );
}

function WorkManageVisual() {
  return (
    <>
      <div className="absolute left-[149px] top-[157px] h-[157px] w-[274px] overflow-hidden rounded-[10px] border-[0.7px] border-[#cecece] opacity-60 shadow-[15px_20px_20px_0_rgba(0,0,0,0.1)]">
        <img
          src="/assets/cards-work-screenshot.png"
          alt=""
          className="absolute left-[-61.12%] top-[-4.6%] h-[112.64%] w-[222.25%] max-w-none"
        />
      </div>
      <div className="absolute left-[45px] top-[187px] h-[157px] w-[148px] overflow-hidden rounded-[10px] border-2 border-[#00c800] shadow-[15px_20px_20px_0_rgba(0,0,0,0.1)]">
        <img
          src="/assets/cards-work-screenshot.png"
          alt=""
          className="absolute left-[-2.4%] top-[-6.15%] h-[113.08%] w-[411.6%] max-w-none"
        />
      </div>
    </>
  );
}

function LaborDocsVisual() {
  return (
    <>
      {/* 임금명세서 (뒤) */}
      <div className="absolute left-[171px] top-[173px] h-[177px] w-[140px] rounded-[10px] border border-[#e3e3e3] bg-white">
        <p className="mt-[20px] text-center text-[11.5px] font-bold leading-[16px] text-[#737373]">
          임 금 명 세 서
        </p>
        <div className="mx-auto mt-[9px] flex w-[109px] border-[0.96px] border-[#adbac8] text-[9px] font-medium leading-[16px] text-[#7e8a99]">
          <div className="w-1/2 bg-[#eef1f6] py-1 text-center">
            <p>지급총액</p>
            <p>공제총액</p>
            <p>근로일수</p>
            <p>실지급액</p>
          </div>
          <div className="w-1/2 border-l-[0.96px] border-[#adbac8] py-1 pl-[8px]">
            <p>135,000</p>
            <p>1,210</p>
            <p>1일(1.0)</p>
            <p>133,790</p>
          </div>
        </div>
        <div className="mx-auto mt-[11px] flex w-[110px] flex-col gap-[8px]">
          <div className="flex justify-between">
            <span className="h-[5px] w-[52px] rounded-full bg-[#ddd]" />
            <span className="h-[5px] w-[52px] rounded-full bg-[#ddd]" />
          </div>
          <span className="h-[5px] w-full rounded-full bg-[#ddd]" />
          <span className="h-[5px] w-full rounded-full bg-[#ddd]" />
        </div>
      </div>
      {/* 근로계약서 (앞) */}
      <div className="absolute left-[67px] top-[161px] h-[163px] w-[134px] rounded-[10px] border-2 border-[#00c800] bg-white">
        <p className="mt-[19px] text-center text-[15px] font-bold leading-[15px] text-[#00b800]">
          근 로 계 약 서
        </p>
        <div className="mx-auto mt-[19px] flex w-[110px] flex-col gap-[8px]">
          <div className="flex justify-between">
            <span className="h-[5px] w-[52px] rounded-full bg-[#ddd]" />
            <span className="h-[5px] w-[52px] rounded-full bg-[#ddd]" />
          </div>
          <div className="flex justify-between">
            <span className="h-[5px] w-[52px] rounded-full bg-[#ddd]" />
            <span className="h-[5px] w-[52px] rounded-full bg-[#ddd]" />
          </div>
          <span className="h-[5px] w-full rounded-full bg-[#ddd]" />
          <span className="h-[5px] w-full rounded-full bg-[#ddd]" />
        </div>
        <div className="mx-auto mt-[13px] w-[105px] text-[9px] font-medium leading-[13px] text-[#444f5d]">
          <p className="flex items-baseline justify-between">
            <span>
              <span className="text-[#7e8a99]">사용자</span> 박준혁
            </span>
            <span className="text-[7px] text-[#a0a0a0]">(인)</span>
          </p>
          <p className="mt-[6px] flex items-baseline justify-between">
            <span>
              <span className="text-[#7e8a99]">근로자</span> 김대현
            </span>
            <span className="text-[7px] text-[#a0a0a0]">(인)</span>
          </p>
        </div>
      </div>
      {/* 엑셀 / PDF 아이콘 */}
      <img
        src="/assets/cards-excel-icon.png"
        alt=""
        className="absolute left-[32px] top-[198px] size-[66px] -rotate-[9.59deg] rounded-[14px] object-cover"
      />
      <img
        src="/assets/cards-pdf-icon.png"
        alt=""
        className="absolute left-[258px] top-[260px] size-[72px] rotate-[9.82deg] rounded-[14px] object-cover"
      />
    </>
  );
}

function SettlementVisual() {
  return (
    <>
      <div className="absolute left-[-155px] top-[169px] h-[361px] w-[461px] overflow-hidden rounded-[10px] border border-[#cecece] opacity-70 shadow-[25px_33px_33px_0_rgba(0,0,0,0.1)]">
        <img
          src="/assets/cards-settlement-screenshot.png"
          alt=""
          className="absolute left-0 top-[-2.36%] h-[119.54%] w-full max-w-none"
        />
      </div>
      <GradientButton className="left-[151px] top-[270px]">
        <span className="relative block size-[29px]">
          <img
            src="/assets/cards-icon-download-arrow.svg"
            alt=""
            className="absolute left-[26.5%] top-[10%] h-[52%] w-[47%]"
          />
          <img
            src="/assets/cards-icon-download-base.svg"
            alt=""
            className="absolute bottom-[16.7%] left-[20%] h-[15%] w-[60%]"
          />
        </span>
        <p className="whitespace-nowrap text-[19px] font-medium text-white">기록 다운로드</p>
      </GradientButton>
    </>
  );
}

/* ---------- 카드 데이터 ---------- */

const CARDS: FeatureCard[] = [
  {
    title: "우리 현장 관리",
    description: "운영 중인 현장의 출역을 관리하여 문제 현장을 즉시 파악하고 대응할 수 있습니다.",
    icon: (
      <span className="flex size-7 shrink-0 items-center justify-center">
        <img src="/assets/cards-icon-tool.svg" alt="" className="size-[21px]" />
      </span>
    ),
    visual: <SiteManageVisual />,
  },
  {
    title: "기존 근로자 관리",
    description: "우리 사무소 근로자의 출역 이력을 한곳에서 관리하고 확인할 수 있습니다.",
    icon: (
      <span className="flex size-7 shrink-0 items-center justify-center">
        <img src="/assets/cards-icon-calendar.svg" alt="" className="h-[19px] w-[23px]" />
      </span>
    ),
    visual: <WorkerHistoryVisual />,
  },
  {
    title: "가다 인력 full 지원",
    description: "인력이 부족할 땐 가다가 보유한 근로자 풀로 현장의 공백을 메웁니다.",
    badge: "New",
    icon: (
      <span className="relative block size-7 shrink-0">
        <span className="absolute left-[9px] top-[3px] size-[10px] rounded-full border-[1.7px] border-black" />
        <span className="absolute left-[4.5px] top-[14px] h-[10.5px] w-[19px] rounded-b-[2px] rounded-t-[17px] border-[1.7px] border-black" />
      </span>
    ),
    visual: <GadaWorkerVisual />,
  },
  {
    title: "작업 관리",
    description: "현장에 필요한 작업을 등록·조회하고 출역 현황·마감까지 관리합니다.",
    icon: (
      <span className="flex size-7 shrink-0 items-center justify-center">
        <img src="/assets/cards-icon-clipboard.svg" alt="" className="size-[21px]" />
      </span>
    ),
    visual: <WorkManageVisual />,
  },
  {
    title: "9종 노무 문서 제공",
    description: "노무 문서 업무를 디지털화해 현장 관리자의 문서 관리 부담을 최소화합니다.",
    icon: (
      <span className="flex size-7 shrink-0 items-center justify-center">
        <img src="/assets/cards-icon-folder.svg" alt="" className="h-[16px] w-[18px]" />
      </span>
    ),
    visual: <LaborDocsVisual />,
  },
  {
    title: "정산 관리",
    description: "선지급부터 기성 청구, 미수금까지 하나의 플랫폼에서 관리합니다.",
    icon: (
      <span className="relative block size-7 shrink-0">
        <span className="absolute left-[3.5px] top-[3.5px] size-[21px] rounded-full border-[1.7px] border-black" />
        <img
          src="/assets/cards-icon-won.svg"
          alt=""
          className="absolute left-[8px] top-[10.5px] h-[8px] w-[11.5px]"
        />
      </span>
    ),
    visual: <SettlementVisual />,
  },
];

/* ---------- 섹션 ---------- */

export default function FeatureCards() {
  return (
    <section id="features" className="bg-white px-6 py-20 md:px-10 md:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-14 md:gap-20">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-bold leading-[18px] text-primary">주요 기능</p>
          <h2 className="text-[28px] font-bold leading-[1.3] text-black md:text-[40px] md:leading-[52px]">
            인력사무소가 매일 쓰는 업무를 하나로
          </h2>
          <p className="text-[17px] leading-[1.7] text-[#6b7280]">
            내 인력은 디지털로 관리하고, 모자랄 땐 가다 인력으로 채웁니다.
          </p>
        </Reveal>
        <ul className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, index) => (
            <li key={card.title}>
              <Reveal delay={(index % 3) * 120} className="h-full">
                <article className="relative h-[384px] overflow-hidden rounded-2xl bg-[#f6f6f6] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(31,42,68,0.18)]">
                  <div className={`flex flex-col gap-3 px-8 pb-8 ${card.badge ? "pt-6" : "pt-8"}`}>
                    {card.badge && (
                      <span className="w-fit rounded-full bg-[#ee3b4f] px-[17px] py-2 text-sm font-medium leading-[14px] text-white drop-shadow-[0_2px_5px_rgba(6,105,247,0.08)]">
                        {card.badge}
                      </span>
                    )}
                    <div className="flex items-center gap-2">
                      {card.icon}
                      <h3 className="text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-black">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-lg leading-[1.45] tracking-[-0.005em] text-black/55">
                      {card.description}
                    </p>
                  </div>
                  {/* 목업 비주얼 — 378px 기준 프레임을 카드 중앙에 고정 */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-0 h-full w-[378px] -translate-x-1/2"
                  >
                    {card.visual}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
