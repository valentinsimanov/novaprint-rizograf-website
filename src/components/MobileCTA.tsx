import { contacts } from '@/config/contacts';

export default function MobileCTA() {
  return (
    <div className="mob-cta" role="navigation" aria-label="Быстрый заказ">
      <span className="mob-cta-text">Готовы напечатать?</span>
      <a className="btn btn-primary" href={contacts.phoneHref}>Позвонить</a>
    </div>
  );
}
