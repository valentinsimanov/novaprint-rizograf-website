import type { Metadata, Viewport } from 'next';
import { Onest, JetBrains_Mono } from 'next/font/google';
import { seo } from '@/config/seo';
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
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  openGraph: {
    title: seo.openGraphTitle,
    description: seo.openGraphDescription,
    locale: 'ru_RU',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#F6F1E8',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: seo.localBusinessName,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'улица Каракозова, 44',
    addressLocality: 'Пенза',
    addressCountry: 'RU',
  },
  telephone: contacts.phoneDisplay,
  email: contacts.email,
  url: seo.canonicalUrl,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${onest.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <YandexMetrika />
        {children}
      </body>
    </html>
  );
}
