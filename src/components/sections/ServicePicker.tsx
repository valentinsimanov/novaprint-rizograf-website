export default function ServicePicker() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head row">
          <h2 className="eyebrow eyebrow-title">Услуги типографии</h2>
          <p className="lede">
            Выберите подходящую печать&nbsp;— расскажем подробнее, рассчитаем стоимость и&nbsp;сроки под&nbsp;ваш тираж.
          </p>
        </div>
        <div className="svc-picker">
          <article className="svc-card">
            <div className="svc-card-head">
              <span className="svc-card-tag">01 · Тиражная печать</span>
              <h3>Печать на ризографе</h3>
            </div>
            <p>
              Чёрно-белая печать большим тиражом. Инструкции, схемы сборки, вкладыши, бланки, листовки и&nbsp;брошюры. Тиражи от&nbsp;100 экземпляров, срочный заказ.
            </p>
            <a className="btn btn-primary svc-card-cta" href="/rizograf">
              Узнать подробнее
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </article>
          <article className="svc-card">
            <div className="svc-card-head">
              <span className="svc-card-tag">02 · Полноцветная печать</span>
              <h3>Офсетная печать</h3>
            </div>
            <p>
              Полноцветная офсетная печать для&nbsp;презентационной продукции: брошюр с&nbsp;цветной обложкой, каталогов, плотных материалов до&nbsp;300&nbsp;г/м². Свяжитесь, чтобы&nbsp;обсудить заказ.
            </p>
            <a className="btn btn-ink svc-card-cta" href="#contacts">
              Связаться с нами
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
