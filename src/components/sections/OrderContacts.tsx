'use client';

import { contacts, contactsString } from '@/config/contacts';
import { trackEvent, EVENTS } from '@/config/analytics';
import { showToast } from '@/components/Toast';

async function copyContacts() {
  trackEvent(EVENTS.CONTACTS_COPY_CLICK, { section: 'cta' });
  try {
    await navigator.clipboard.writeText(contactsString);
    showToast('Контакты скопированы');
  } catch {
    showToast('Не удалось скопировать. Скопируйте контакты вручную.');
  }
}

export default function OrderContacts() {
  return (
    <section id="cta">
      <div className="wrap">
        <div className="cta-block">
          <div>
            <h2>Напишите или&nbsp;позвоните, чтобы&nbsp;обсудить заказ</h2>
            <p className="lede">Быстро сориентируем по&nbsp;цене, срокам и&nbsp;подготовке макета.</p>
            <div className="cta-actions">
              <a
                className="btn btn-primary"
                href={contacts.phoneHref}
                onClick={() => trackEvent(EVENTS.PHONE_CLICK, { section: 'cta', contact_type: 'phone' })}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                Позвонить
              </a>
              <a
                className="btn btn-ghost"
                href={contacts.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent(EVENTS.TELEGRAM_CLICK, { section: 'cta', contact_type: 'telegram' })}
              >
                Написать в&nbsp;Telegram
              </a>
              <a
                className="btn btn-ghost"
                href={contacts.emailHref}
                onClick={() => trackEvent(EVENTS.EMAIL_CLICK, { section: 'cta', contact_type: 'email' })}
              >
                Написать на&nbsp;email
              </a>
              <button className="btn btn-ghost" onClick={copyContacts} aria-label="Скопировать контакты">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Скопировать контакты
              </button>
            </div>
          </div>
          <div className="cta-list">
            <a
              href={contacts.phoneHref}
              onClick={() => trackEvent(EVENTS.PHONE_CLICK, { section: 'cta', contact_type: 'phone' })}
            >
              <span className="cta-list-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              <div className="cta-list-stack">
                <span className="cta-list-label">Телефон</span>
                <span className="cta-list-value">{contacts.phoneDisplay}</span>
              </div>
              <span className="cta-list-arrow">→</span>
            </a>
            <a href={contacts.secondaryPhoneHref}>
              <span className="cta-list-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 5a2 2 0 0 1 2-2h2.5l2 5-2.5 1.5a11 11 0 0 0 5.5 5.5L14 12.5l5 2V17a2 2 0 0 1-2 2A14 14 0 0 1 3 5Z" />
                </svg>
              </span>
              <div className="cta-list-stack">
                <span className="cta-list-label">Городской</span>
                <span className="cta-list-value">{contacts.secondaryPhoneDisplay}</span>
              </div>
              <span className="cta-list-arrow">→</span>
            </a>
            <a
              href={contacts.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent(EVENTS.TELEGRAM_CLICK, { section: 'cta', contact_type: 'telegram' })}
            >
              <span className="cta-list-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.94 4.34 18.7 19.6c-.24 1.07-.88 1.34-1.78.83l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.09-.55-.61-.2L6.27 13.21l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55L20.6 2.96c.88-.32 1.65.2 1.34 1.38Z" />
                </svg>
              </span>
              <div className="cta-list-stack">
                <span className="cta-list-label">Telegram</span>
                <span className="cta-list-value">{contacts.telegramHandle}</span>
              </div>
              <span className="cta-list-arrow">→</span>
            </a>
            <a
              href={contacts.emailHref}
              onClick={() => trackEvent(EVENTS.EMAIL_CLICK, { section: 'cta', contact_type: 'email' })}
            >
              <span className="cta-list-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <div className="cta-list-stack">
                <span className="cta-list-label">Email</span>
                <span className="cta-list-value">{contacts.email}</span>
              </div>
              <span className="cta-list-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
