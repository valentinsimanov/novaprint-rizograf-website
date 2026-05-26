import type { Metadata, Viewport } from 'next';
import { Onest, JetBrains_Mono } from 'next/font/google';
import { company } from '@/config/seo';
import { contacts } from '@/config/contacts';
import { YandexMetrika } from '@/components/YandexMetrika';
import './globals.css';

const onest = Onest({
  subsets: ['latin', 'cyrillic'],
  variable: '--f-sans-var',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--f-mono-var',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  openGraph: {
    siteName: company.name,
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: company.yandexVerification
    ? { yandex: company.yandexVerification }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: '#F6F1E8',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${company.siteUrl}/#business`,
  name: company.name,
  legalName: company.legalName,
  url: company.siteUrl,
  logo: `${company.siteUrl}/assets/logo-novaprint.png`,
  image: `${company.siteUrl}/assets/logo-novaprint.png`,
  telephone: [contacts.phoneDisplay, '+7 8412 39 52 11'],
  email: contacts.email,
  priceRange: company.priceRange,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.streetAddress,
    addressLocality: company.address.addressLocality,
    addressRegion: company.address.addressRegion,
    addressCountry: company.address.addressCountry,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: company.latitude,
    longitude: company.longitude,
  },
  hasMap: contacts.mapUrl,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Пенза' },
    { '@type': 'AdministrativeArea', name: 'Пензенская область' },
  ],
  sameAs: [contacts.telegramUrl],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${onest.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>
        <YandexMetrika />
        {children}
      </body>
    </html>
  );
}
