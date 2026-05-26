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
import Contacts from '@/components/sections/Contacts';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import Toast from '@/components/Toast';

export default function Home() {
  return (
    <>
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
        <Contacts />
        <Footer />
      </main>
      <MobileCTA />
      <Toast />
    </>
  );
}
