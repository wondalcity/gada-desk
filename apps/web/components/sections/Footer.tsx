const LINK_COLUMNS = [
  {
    title: "홈페이지",
    links: [
      { label: "홈", href: "https://www.worksmate.co.kr" },
      { label: "회사소개", href: "https://www.worksmate.co.kr" },
      { label: "건설사앱", href: "https://www.worksmate.co.kr" },
      { label: "근로자앱", href: "https://www.worksmate.co.kr" },
      { label: "가다오피스", href: "https://www.worksmate.co.kr" },
    ],
  },
  {
    title: "블로그",
    links: [
      { label: "홈", href: "https://blog.1gada.com" },
      { label: "인사이트", href: "https://blog.1gada.com" },
      { label: "고객 사례", href: "https://blog.1gada.com" },
      { label: "가다 소식", href: "https://blog.1gada.com" },
      { label: "보도자료", href: "https://blog.1gada.com" },
      { label: "실무 가이드", href: "https://blog.1gada.com" },
    ],
  },
  {
    title: "채널",
    links: [
      { label: "유튜브", href: "https://www.youtube.com" },
      { label: "링크드인", href: "https://www.linkedin.com" },
      { label: "페이스북", href: "https://www.facebook.com" },
      { label: "인스타그램", href: "https://www.instagram.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white px-5 py-14 lg:px-10 lg:py-[70px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14 lg:gap-[70px]">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-start">
          <div className="flex items-center gap-2">
            <img src="/assets/footer-logo-icon.svg" alt="가다" className="h-[41px] w-[87px]" />
            <img src="/assets/footer-logo-text.svg" alt="데스크" className="h-[24px] w-[51px]" />
          </div>
          <div className="flex flex-wrap gap-12 text-[#7a7b7a] lg:gap-[60px]">
            {LINK_COLUMNS.map((col) => (
              <div key={col.title} className="flex min-w-[78px] flex-col gap-6">
                <p className="text-[18px] font-bold leading-[26px] lg:text-[20px]">{col.title}</p>
                <div className="flex flex-col gap-3.5 text-[15px] font-medium leading-5 lg:text-[16px]">
                  {col.links.map((link) => (
                    <a key={link.label} href={link.href} className="transition-colors hover:text-primary">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10 border-t border-[#c4c4c4] pt-10">
          <div className="text-[13px] leading-5 text-[#7a7b7a] lg:text-[14px]">
            <p>(주)웍스메이트 | 대표 김세원 | 서울특별시 서초구 방배천로2길 27, 5층</p>
            <p>사업자등록번호 627-81-01536 | 직업소개사업신고번호 2023-3210195-15-5-00030</p>
            <p>마케팅·제휴 문의 marketing@worksmate.co.kr | 대표번호 1661-0109 (평일 오전 10시 ~ 오후 6시)</p>
            <p>개인정보관리책임자 김세원 | © 2020 WORKSMATE. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
