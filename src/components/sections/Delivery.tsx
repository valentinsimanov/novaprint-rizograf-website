import { deliveryOptions } from '@/data/deliveryOptions';

const icons = [
  // Самовывоз
  <svg key="pickup" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10v10a1 1 0 0 0 1 1h5v-6h6v6h5a1 1 0 0 0 1-1V10" />
    <path d="m1 10 11-8 11 8" />
  </svg>,
  // Доставка по Пензе
  <svg key="city" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="15" height="13" rx="1" />
    <path d="M16 10h4l3 4v5h-7" />
    <circle cx="6" cy="19" r="2" />
    <circle cx="18" cy="19" r="2" />
  </svg>,
  // Яндекс Доставка
  <svg key="yandex" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>,
  // ТК
  <svg key="transport" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7h13l5 5v5h-3" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
    <path d="M3 7v10h2" />
  </svg>,
];

export default function Delivery() {
  return (
    <section id="receive">
      <div className="wrap">
        <div className="section-head row">
          <h2 className="eyebrow eyebrow-title">Как получить заказ</h2>
          <p className="lede">Можно забрать заказ самостоятельно или&nbsp;оформить доставку. Поможем выбрать удобный вариант.</p>
        </div>
        <div className="receive">
          {deliveryOptions.map((option, i) => (
            <article className="receive-card" key={option.title}>
              <div className="receive-head">
                <div className="receive-icon" aria-hidden="true">{icons[i]}</div>
                <h4>{option.title}</h4>
              </div>
              <p>{option.description}</p>
              <span className="meta">{option.meta}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
