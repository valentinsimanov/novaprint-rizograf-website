import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import HomeHero from '@/components/sections/HomeHero';
import ServicePicker from '@/components/sections/ServicePicker';
import Contacts from '@/components/sections/Contacts';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import Toast from '@/components/Toast';
import { rootSeo } from '@/config/seo';

export const metadata: Metadata = {
  title: rootSeo.title,
  description: rootSeo.description,
  keywords: rootSeo.keywords,
  alternates: { canonical: rootSeo.canonicalUrl },
  openGraph: {
    title: rootSeo.openGraphTitle,
    description: rootSeo.openGraphDescription,
    url: rootSeo.canonicalUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: rootSeo.openGraphTitle,
    description: rootSeo.openGraphDescription,
  },
};

export default function HomePage() {
  return (
    <>
      <Nav links={[]} ctaHref="#contacts" ctaLabel="Связаться" />
      <main id="top">
        <HomeHero />
        <ServicePicker />
        <Contacts />
        <Footer tagline="Полиграфия в Пензе · от 100 экземпляров" />
      </main>
      <MobileCTA />
      <Toast />
    </>
  );
}
