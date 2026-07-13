import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Script from 'next/script';

const GA_ID = 'G-HBKFWZPB9D';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://desk.1gada.com';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '가다 데스크 | 인력사무소 출역·인력 관리 프로그램',
    template: '%s | 가다 데스크',
  },
  description: '출역·마감·정산은 디지털로, 부족한 인력은 가다로. 베타 기간 전 기능 무료.',
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
    title: '가다 데스크 | 인력사무소 출역·인력 관리 프로그램',
    description: '출역·마감·정산은 디지털로, 부족한 인력은 가다로. 베타 기간 전 기능 무료.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: '인력 관리부터 충원까지 가다 데스크 하나로',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '가다 데스크 | 인력사무소 출역·인력 관리 프로그램',
    description: '출역·마감·정산은 디지털로, 부족한 인력은 가다로. 베타 기간 전 기능 무료.',
    images: ['/opengraph-image.png'],
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
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png' },
    ],
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
    google: 'ukgbUQpihKc6_hX3XxQPJTp1tKgNqfjF91obtHV53DU',
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
    '인력사무소의 근로자 관리·인력 배치, 현장 대응·출역 관리, 작업 등록·공고 매칭, 지급 관리까지 한 화면에서 관리하는 B2B SaaS. 부족한 인력은 가다 근로자 풀로 채우고, 노무 문서 9종을 무료로 디지털화합니다.',
  offers: [
    {
      '@type': 'Offer',
      name: '베타 무료',
      description: '베타 기간 동안 등급 구분 없이 전 기능을 무료로 제공',
      price: '0',
      priceCurrency: 'KRW',
      availability: 'https://schema.org/InStock',
    },
  ],
  publisher: { '@type': 'Organization', name: '(주)웍스메이트' },
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth">
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
      <body className={`${notoSansKr.variable} font-sans bg-white antialiased`}>
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
