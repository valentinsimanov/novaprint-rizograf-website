import { materials } from '@/data/materials';

export default function Materials() {
  return (
    <section id="materials">
      <div className="wrap">
        <div className="section-head row">
          <h2 className="eyebrow eyebrow-title">На чём печатаем</h2>
          <p className="lede">Самые ходовые варианты обычно есть в&nbsp;наличии. Нестандартные материалы согласуем заранее.</p>
        </div>
        <div className="materials">
          {materials.map((mat) => (
            <div className="material" key={mat.title}>
              <h4>{mat.title}</h4>
              <div className="material-density">{mat.density}</div>
              <p style={{ fontSize: '14px', color: 'var(--ink-2)' }}>{mat.note}</p>
              <div className={`material-status${mat.inStock ? ' ok' : ''}`}>
                <span className="dot" />
                {mat.availability}
              </div>
            </div>
          ))}
          <div className="materials-note">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <div>
              <strong>Цветные обложки.</strong> Обложки для брошюр и&nbsp;другие элементы, где нужна цветная печать, можем напечатать офсетным способом на&nbsp;материале плотностью до&nbsp;300 г/м².
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
