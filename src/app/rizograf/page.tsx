import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Hero from '@/components/sections/Hero';
import Products from '@/components/sections/Products';
import OrderSteps from '@/components/sections/OrderSteps';
import OrderContacts from '@/components/sections/OrderContacts';
import Materials from '@/components/sections/Materials';
import Prices from '@/components/sections/Prices';
import Timelines from '@/components/sections/Timelines';
import UrgentOrder from '@/components/sections/UrgentOrder';
import Delivery from '@/components/sections/Delivery';
import FAQ from '@/components/sections/FAQ';
import Contacts from '@/components/sections/Contacts';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import Toast from '@/components/Toast';
import { rizografSeo, company } from '@/config/seo';

export const metadata: Metadata = {
  title: rizografSeo.title,
  description: rizografSeo.description,
  keywords: rizografSeo.keywords,
  alternates: { canonical: rizografSeo.canonicalUrl },
  openGraph: {
    title: rizografSeo.openGraphTitle,
    description: rizografSeo.openGraphDescription,
    url: rizografSeo.canonicalUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: rizografSeo.openGraphTitle,
    description: rizografSeo.openGraphDescription,
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${rizografSeo.canonicalUrl}#service-rizograph`,
  serviceType: 'Печать на ризографе',
  name: 'Печать на ризографе в Пензе',
  description:
    'Чёрно-белая печать инструкций, схем сборки, вкладышей, бланков, листовок и брошюр на ризографе. Тиражи от 100 экземпляров. Срочный заказ, доставка по Пензе.',
  provider: { '@id': `${company.siteUrl}/#business` },
  areaServed: { '@type': 'City', name: 'Пенза' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'RUB',
    lowPrice: '1.1',
    highPrice: '9',
    offerCount: 4,
    availability: 'https://schema.org/InStock',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Виды печати на ризографе',
    itemListElement: [
      { '@type': 'OfferCatalog', name: 'Инструкции и схемы сборки' },
      { '@type': 'OfferCatalog', name: 'Вкладыши и памятки для товаров' },
      { '@type': 'OfferCatalog', name: 'Бланки, формы и журналы учёта' },
      { '@type': 'OfferCatalog', name: 'Документы и договоры тиражом' },
      { '@type': 'OfferCatalog', name: 'Медицинские карты и бланки' },
      { '@type': 'OfferCatalog', name: 'Листовки и брошюры' },
    ],
  },
};

export default function RizografPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Nav />
      <main id="top">
        <Hero />
        <Products />
        <OrderSteps />
        <OrderContacts />
        <Materials />
        <Prices />
        <Timelines />
        <UrgentOrder />
        <Delivery />
        <FAQ />
        <Contacts />
        <Footer />
      </main>
      <MobileCTA />
      <Toast />
    </>
  );
}
