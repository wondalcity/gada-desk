import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '가다 데스크 — 인력사무소를 위한 SaaS',
  description:
    '당일 인력 배치, 출역 관리, 현장 마감, 일당 직접지급까지. 인력사무소의 반복 업무를 줄이는 가다 데스크.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
