import { contacts } from '@/config/contacts';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-tagrow">
          <span className="tag">тираж от 100 экз.</span>
          <span className="tag">большие тиражи</span>
          <span className="tag">срочно от 1 часа</span>
          <span className="tag">самовывоз и доставка</span>
        </div>
        <h1>
          Быстрая и&nbsp;недорогая печать на&nbsp;<span className="accent">ризографе</span> в&nbsp;Пензе
        </h1>
        <p className="hero-sub">
          Печатаем инструкции, схемы сборки, вкладыши, бланки, документы, объявления, листовки, брошюры и&nbsp;другую простую полиграфию тиражом от&nbsp;100 экземпляров.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#cta">
            Заказать
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a className="btn btn-ghost" href="#prices">Посмотреть цены</a>
        </div>
        <div className="hero-quick">
          <a href={contacts.phoneHref} aria-label="Позвонить">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            {contacts.phoneDisplay}
          </a>
          <a href={contacts.telegramUrl} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.94 4.34 18.7 19.6c-.24 1.07-.88 1.34-1.78.83l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.09-.55-.61-.2L6.27 13.21l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55L20.6 2.96c.88-.32 1.65.2 1.34 1.38Z" />
            </svg>
            {contacts.telegramHandle}
          </a>
          <a href={contacts.emailHref}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            {contacts.email}
          </a>
        </div>
      </div>
    </section>
  );
}
