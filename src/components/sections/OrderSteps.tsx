const steps = [
  { num: 'шаг 01', title: 'Свяжитесь с нами', desc: 'Позвоните или напишите и опишите задачу.' },
  { num: 'шаг 02', title: 'Уточняем детали', desc: 'Тираж, формат, бумага, сроки и требования к макету.' },
  { num: 'шаг 03', title: 'Готовим макет', desc: 'Поможем подготовить или адаптировать файл к печати.' },
  { num: 'шаг 04', title: 'Печатаем тираж', desc: 'Запускаем заказ на ризографе.' },
  { num: 'шаг 05', title: 'Передаём заказ', desc: 'Самовывоз или доставка курьером, Яндексом или ТК.' },
];

export default function OrderSteps() {
  return (
    <section id="order" style={{ background: 'var(--bg-soft)', paddingTop: 'clamp(28px, 3.5vw, 56px)', paddingBottom: 'clamp(28px, 3.5vw, 56px)' }}>
      <div className="wrap">
        <div className="section-head row">
          <div>
            <h2 className="eyebrow eyebrow-title">Как сделать заказ</h2>
            <p className="section-subhead">Пять шагов от звонка до готового тиража</p>
          </div>
          <p className="lede">
            Не нужно заполнять формы. Достаточно позвонить или написать&nbsp;— остальное согласуем по&nbsp;ходу.
          </p>
        </div>
        <div className="steps">
          {steps.map((step) => (
            <div className="step" key={step.num}>
              <div className="step-num">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="steps-hint">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          <div>
            <strong>Чтобы быстрее рассчитать заказ</strong>&nbsp;— укажите тираж, формат, желаемый срок и&nbsp;приложите макет, если он уже готов.
          </div>
        </div>
      </div>
    </section>
  );
}
