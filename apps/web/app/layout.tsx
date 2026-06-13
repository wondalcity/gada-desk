import './globals.css';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

const GA_ID = 'G-HBKFWZPB9D';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://desk.1gada.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '가다 데스크 — 인력사무소를 위한 SaaS',
    template: '%s | 가다 데스크',
  },
  description:
    '당일 인력 배치, 출역 관리, 현장 마감, 일당 직접지급까지. 인력사무소의 반복 업무를 줄이고 현장 운영 데이터를 한눈에 확인하는 B2B SaaS, 가다 데스크.',
  applicationName: '가다 데스크',
  generator: 'Next.js',
  keywords: [
    '가다 데스크',
    '가다desk',
    '인력사무소 SaaS',
    '인력사무소 프로그램',
    '인력사무소 관리',
    '건설 일용직 관리',
    '당일 인력 배치',
    '출역 관리',
    '현장 마감',
    '일당 지급',
    '직접지급시스템',
    '건설 인력 매칭',
    '웍스메이트',
    '가다',
  ],
  authors: [{ name: 'WORKSMATE', url: 'https://www.worksmate.co.kr' }],
  creator: 'WORKSMATE',
  publisher: 'WORKSMATE',
  category: 'business',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: '가다 데스크',
    title: '가다 데스크 — 인력사무소를 위한 SaaS',
    description:
      '당일 인력 배치, 출역 관리, 현장 마감, 일당 직접지급까지. 인력사무소의 반복 업무를 줄이는 가다 데스크.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: '가다 데스크 — 인력사무소 운영 SaaS',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '가다 데스크 — 인력사무소를 위한 SaaS',
    description:
      '당일 인력 배치, 출역 관리, 현장 마감, 일당 직접지급까지. 인력사무소의 반복 업무를 줄이는 가다 데스크.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png' }],
    shortcut: ['/icon.png'],
    apple: [{ url: '/icon.png' }],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  referrer: 'origin-when-cross-origin',
  verification: {
    other: {
      'naver-site-verification': 'c20948684b268d3c53118cb4813e0e2f5019cb04',
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0669F7',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '(주)웍스메이트',
  alternateName: ['WORKSMATE', '가다', '가다 데스크'],
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: 'marketing@worksmate.co.kr',
  telephone: '+82-1661-0109',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '방배천로2길 27, 5층',
    addressLocality: '서초구',
    addressRegion: '서울특별시',
    addressCountry: 'KR',
  },
  founder: { '@type': 'Person', name: '김세원' },
  sameAs: ['https://www.worksmate.co.kr'],
} as const;

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '가다 데스크',
  url: SITE_URL,
  inLanguage: 'ko-KR',
  publisher: { '@type': 'Organization', name: '(주)웍스메이트' },
} as const;

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '가다 데스크',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Construction Workforce Management',
  operatingSystem: 'Web',
  url: SITE_URL,
  inLanguage: 'ko-KR',
  description:
    '인력사무소의 현장 관리, 공고, 출역, 마감, 일당 지급까지 한 화면에서 관리하는 B2B SaaS. 가다 오피스 기능을 무료로 제공하고 가다 앱에 공고를 자동 등록합니다.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Basic',
      description: '현장·공고·출역·마감까지 인력사무소의 일상 운영을 통합 관리하는 요금제',
      price: '31900',
      priceCurrency: 'KRW',
      category: 'Subscription',
      eligibleDuration: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'Pro',
      description: '위험 현장·기능공 팀 정보와 월별·현장별 일당 지급 내역까지 관리하는 추천 요금제',
      price: '61900',
      priceCurrency: 'KRW',
      category: 'Subscription',
      eligibleDuration: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
      availability: 'https://schema.org/InStock',
    },
  ],
  publisher: { '@type': 'Organization', name: '(주)웍스메이트' },
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className="bg-white text-slate-900 antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
      </body>
    </html>
  );
}
