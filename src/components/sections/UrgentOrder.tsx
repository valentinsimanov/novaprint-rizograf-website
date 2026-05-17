import { contacts } from '@/config/contacts';

export default function UrgentOrder() {
  return (
    <section id="urgent" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="urgent-eyebrow">
          <span className="eyebrow eyebrow-title">Срочный заказ</span>
        </div>
        <div className="urgent-grid">
          <div className="urgent-lead">
            <div>
              <h2 style={{ fontSize: 'clamp(26px, 2.4vw, 34px)' }}>Как работает срочный заказ</h2>
              <p className="lede" style={{ marginTop: '14px' }}>
                Запускаем печать сразу, если макет уже готов или&nbsp;вы можете быстро привезти оригинал.
              </p>
            </div>
            <a className="btn btn-ink" href={contacts.phoneHref}>
              Связаться для срочного заказа
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <article className="scenario">
            <span className="scenario-num">сценарий 01</span>
            <h3>Отправляете готовый макет</h3>
            <p>Печатаем заказ, пока вы едете к&nbsp;нам по&nbsp;адресу: Пенза, улица Каракозова, 44.</p>
          </article>
          <article className="scenario">
            <span className="scenario-num">сценарий 02</span>
            <h3>Привозите макет или оригинал</h3>
            <p>Печатаем заказ при&nbsp;вас. Подходит, если макет на&nbsp;флешке или&nbsp;в&nbsp;распечатанном виде.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
