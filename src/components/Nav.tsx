'use client';

import { useEffect, useState } from 'react';
import { contacts } from '@/config/contacts';
import { trackEvent, EVENTS } from '@/config/analytics';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`} id="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand" aria-label="Новапринт">
          <span>
            <div className="brand-name">Новапринт</div>
            <div className="brand-sub">Типография · Пенза</div>
          </span>
        </a>
        <nav className="nav-links" aria-label="Навигация">
          <a className="nav-link" href="#products">Что печатаем</a>
          <a className="nav-link" href="#order">Как заказать</a>
          <a className="nav-link" href="#prices">Цены</a>
          <a className="nav-link" href="#contacts">Контакты</a>
        </nav>
        <div className="nav-cta">
          <a
            className="nav-tel"
            href={contacts.phoneHref}
            onClick={() => trackEvent(EVENTS.PHONE_CLICK, { section: 'nav', contact_type: 'phone' })}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            {contacts.phoneDisplay}
          </a>
          <a
            className="btn btn-primary btn-sm"
            href="#cta"
            onClick={() => trackEvent(EVENTS.CTA_ORDER_CLICK, { section: 'nav', cta_text: 'Заказать' })}
          >
            Заказать
          </a>
        </div>
      </div>
    </header>
  );
}
