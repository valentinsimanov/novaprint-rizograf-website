'use client';

import { useEffect, useRef } from 'react';
import { contacts, contactsString } from '@/config/contacts';
import { trackEvent, EVENTS } from '@/config/analytics';
import { showToast } from '@/components/Toast';

async function copyContacts() {
  trackEvent(EVENTS.CONTACTS_COPY_CLICK, { section: 'contacts' });
  try {
    await navigator.clipboard.writeText(contactsString);
    showToast('Контакты скопированы');
  } catch {
    showToast('Не удалось скопировать. Скопируйте контакты вручную.');
  }
}

export default function Contacts() {
  const sectionRef = useRef<HTMLElement>(null);
  const tracked = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true;
          trackEvent(EVENTS.CONTACTS_SECTION_VIEW, { section: 'contacts' });
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contacts" ref={sectionRef} style={{ background: 'var(--bg-soft)' }}>
      <div className="wrap">
        <div className="section-head row">
          <h2 className="eyebrow eyebrow-title">Контакты типографии в Пензе</h2>
          <p className="lede">Мы в&nbsp;Пензе на&nbsp;улице Каракозова, 44. Заказ можно забрать самостоятельно или заранее согласовать доставку.</p>
        </div>
        <div className="contacts-grid">
          <div className="contacts-card">
            <div className="contacts-list">
              <a
                href={contacts.phoneHref}
                onClick={() => trackEvent(EVENTS.PHONE_CLICK, { section: 'contacts', contact_type: 'phone' })}
              >
                <span className="contacts-list-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <div className="cta-list-stack">
                  <span className="contacts-list-label">Мобильный</span>
                  <span className="contacts-list-value">{contacts.phoneDisplay}</span>
                </div>
                <span style={{ color: 'var(--olive)' }}>→</span>
              </a>
              <a href={contacts.secondaryPhoneHref}>
                <span className="contacts-list-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M8 10h.01M12 10h.01M16 10h.01M8 14h8" />
                  </svg>
                </span>
                <div className="cta-list-stack">
                  <span className="contacts-list-label">Городской</span>
                  <span className="contacts-list-value">{contacts.secondaryPhoneDisplay}</span>
                </div>
                <span style={{ color: 'var(--olive)' }}>→</span>
              </a>
              <a
                href={contacts.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent(EVENTS.TELEGRAM_CLICK, { section: 'contacts', contact_type: 'telegram' })}
              >
                <span className="contacts-list-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.94 4.34 18.7 19.6c-.24 1.07-.88 1.34-1.78.83l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.09-.55-.61-.2L6.27 13.21l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55L20.6 2.96c.88-.32 1.65.2 1.34 1.38Z" />
                  </svg>
                </span>
                <div className="cta-list-stack">
                  <span className="contacts-list-label">Telegram</span>
                  <span className="contacts-list-value">{contacts.telegramHandle}</span>
                </div>
                <span style={{ color: 'var(--olive)' }}>→</span>
              </a>
              <a
                href={contacts.emailHref}
                onClick={() => trackEvent(EVENTS.EMAIL_CLICK, { section: 'contacts', contact_type: 'email' })}
              >
                <span className="contacts-list-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <div className="cta-list-stack">
                  <span className="contacts-list-label">Email</span>
                  <span className="contacts-list-value">{contacts.email}</span>
                </div>
                <span style={{ color: 'var(--olive)' }}>→</span>
              </a>
              <div className="contacts-list-item">
                <span className="contacts-list-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div className="cta-list-stack">
                  <span className="contacts-list-label">Адрес</span>
                  <span className="contacts-list-value">{contacts.addressText}</span>
                </div>
              </div>
            </div>
            <div className="contacts-actions">
              <a
                className="btn btn-primary btn-sm"
                href={contacts.phoneHref}
                onClick={() => trackEvent(EVENTS.PHONE_CLICK, { section: 'contacts', contact_type: 'phone' })}
              >
                Позвонить
              </a>
              <a
                className="btn btn-sand btn-sm"
                href={contacts.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent(EVENTS.TELEGRAM_CLICK, { section: 'contacts', contact_type: 'telegram' })}
              >
                Telegram
              </a>
              <a
                className="btn btn-sand btn-sm"
                href={contacts.emailHref}
                onClick={() => trackEvent(EVENTS.EMAIL_CLICK, { section: 'contacts', contact_type: 'email' })}
              >
                Email
              </a>
              <button className="btn btn-ghost btn-sm" onClick={copyContacts} aria-label="Скопировать контакты">
                Скопировать контакты
              </button>
              <a
                className="btn btn-ghost btn-sm"
                href={contacts.routeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent(EVENTS.ROUTE_CLICK, { section: 'contacts' })}
              >
                Построить маршрут
              </a>
            </div>
          </div>

          <div className="map-card" aria-label="Карта с расположением типографии">
            <div className="map-bg" aria-hidden="true" />
            <div className="map-roads" aria-hidden="true" />
            <div className="map-pin" aria-hidden="true">
              <span className="pin-dot" />
            </div>
            <div className="map-overlay">
              <div className="map-overlay-text">
                <strong>Новапринт</strong>
                <span>ул. Каракозова, 44 · Пенза</span>
              </div>
              <a
                className="btn btn-ink btn-sm"
                href={contacts.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent(EVENTS.ROUTE_CLICK, { section: 'contacts', cta_text: 'Открыть в Яндекс Картах' })}
              >
                Открыть в&nbsp;Яндекс Картах
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
