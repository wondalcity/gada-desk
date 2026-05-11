export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-10">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex items-center gap-2">
          <span className="text-base font-bold tracking-tight text-slate-900">가다 데스크</span>
          <span className="text-[11px] font-medium text-slate-400">
            GADA Desk for Manpower Offices
          </span>
        </div>

        <dl className="mt-5 grid gap-x-8 gap-y-2 text-xs leading-relaxed text-slate-500 sm:grid-cols-[auto_1fr]">
          <dt className="font-semibold text-slate-600">사업자</dt>
          <dd>
            (주)웍스메이트 <Sep /> 대표 김세원 <Sep /> 서울특별시 서초구 방배천로2길 27, 5층
          </dd>

          <dt className="font-semibold text-slate-600">등록번호</dt>
          <dd>
            사업자등록번호 627-81-01536 <Sep /> 직업소개사업신고번호 2023-3210195-15-5-00030
          </dd>

          <dt className="font-semibold text-slate-600">문의</dt>
          <dd>
            마케팅·제휴{' '}
            <a
              href="mailto:marketing@worksmate.co.kr"
              className="font-medium text-slate-700 hover:text-[#0669F7]"
            >
              marketing@worksmate.co.kr
            </a>{' '}
            <Sep /> 대표번호{' '}
            <a href="tel:1661-0109" className="font-medium text-slate-700 hover:text-[#0669F7]">
              1661-0109
            </a>{' '}
            <span className="text-slate-400">(평일 오전 10시 ~ 오후 6시)</span>
          </dd>

          <dt className="font-semibold text-slate-600">개인정보</dt>
          <dd>개인정보관리책임자 김세원</dd>
        </dl>

        <div className="mt-6 border-t border-slate-100 pt-5 text-xs text-slate-500">
          <p>© 2026 WORKSMATE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function Sep() {
  return <span className="mx-1.5 text-slate-300">|</span>;
}
