const modes = [
  {
    id: 'standard',
    title: 'Обычный заказ',
    tag: 'Базовый режим',
    urgent: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
    rows: [
      { label: 'Цена', value: 'обычная' },
      { label: 'Срок', value: 'от 1 до 3 дней' },
      { label: 'Условия', value: 'без специальных требований' },
    ],
  },
  {
    id: 'urgent',
    title: 'Срочный заказ',
    tag: 'Сегодня',
    urgent: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
      </svg>
    ),
    rows: [
      { label: 'Цена', value: '+20% к стоимости печати' },
      { label: 'Срок', value: 'от 1 часа' },
      { label: 'Условия', value: 'нужен готовый макет' },
    ],
  },
  {
    id: 'repeat',
    title: 'Повторный заказ',
    tag: 'Уже печатали',
    urgent: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-3-6.7L21 8" /><path d="M21 3v5h-5" />
      </svg>
    ),
    rows: [
      { label: 'Цена', value: 'обычная' },
      { label: 'Срок', value: 'от 1 часа' },
      { label: 'Условия', value: 'макет уже печатали ранее' },
    ],
  },
];

export default function Timelines() {
  return (
    <section id="timing">
      <div className="wrap">
        <div className="section-head row">
          <span className="eyebrow eyebrow-title">Сроки</span>
          <p className="lede">Подберём режим под&nbsp;вашу задачу&nbsp;— от&nbsp;стандартного тиража за&nbsp;пару дней до&nbsp;срочной печати в&nbsp;течение часа.</p>
        </div>
        <div className="modes">
          {modes.map((mode) => (
            <div key={mode.id} className={`mode${mode.urgent ? ' is-urgent' : ''}`}>
              <div className="mode-head">
                <div className="mode-icon">{mode.icon}</div>
                <h3>{mode.title}</h3>
              </div>
              <span className="mode-tag">{mode.tag}</span>
              <dl className="mode-rows">
                {mode.rows.map((row) => (
                  <div className="mode-row" key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
