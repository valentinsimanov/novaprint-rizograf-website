'use client';

import { useEffect, useRef, useState } from 'react';
import { prices, quantities } from '@/data/prices';
import { trackEvent, EVENTS } from '@/config/analytics';

export default function Prices() {
  const [activeQty, setActiveQty] = useState<number>(300);
  const sectionRef = useRef<HTMLElement>(null);
  const tracked = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true;
          trackEvent(EVENTS.PRICE_SECTION_VIEW, { section: 'prices' });
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="prices" ref={sectionRef} style={{ background: 'var(--bg-soft)' }}>
      <div className="wrap">
        <div className="section-head row">
          <h2 className="eyebrow eyebrow-title">Цены на печать</h2>
          <p className="lede">Цена зависит от&nbsp;формата, тиража, типа бумаги, срочности и&nbsp;подготовки макета. Ниже&nbsp;— ориентиры за&nbsp;один экземпляр.</p>
        </div>
        <div className="prices-wrap">
          {/* Desktop table */}
          <div className="prices-scroll">
            <table className="prices-table">
              <thead>
                <tr>
                  <th>Изделие</th>
                  {quantities.map((q) => (
                    <th key={q} style={{ textAlign: 'right' }}>{q.toLocaleString('ru')} экз.</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {prices.map((item) => (
                  <tr key={`${item.productName}-${item.printType}`}>
                    <td className="item">
                      {item.productName} <small>печать {item.printType}</small>
                    </td>
                    {item.pricesByQuantity.map((p, i) => (
                      <td key={p.quantity} className="num" style={{ textAlign: 'right' }}>
                        <strong>{p.price}</strong>
                        {i === 0 && <small>за экз.</small>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile tabs */}
          <div className="prices-mobile">
            <div className="qty-tabs" role="tablist" aria-label="Выбрать тираж">
              {quantities.map((q) => (
                <button
                  key={q}
                  className={`qty-tab${activeQty === q ? ' is-active' : ''}`}
                  role="tab"
                  aria-selected={activeQty === q}
                  onClick={() => setActiveQty(q)}
                >
                  {q.toLocaleString('ru')} экз.
                </button>
              ))}
            </div>
            <div className="qty-list">
              {prices.map((item) => {
                const priceEntry = item.pricesByQuantity.find((p) => p.quantity === activeQty);
                return (
                  <div className="qty-row" key={`${item.productName}-${item.printType}`}>
                    <div className="qty-row-name">
                      {item.productName} <small>печать {item.printType}</small>
                    </div>
                    <div className="qty-row-price">{priceEntry?.price}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="legend">
            <span className="legend-item"><span className="code">1+0</span> печать с&nbsp;одной стороны листа</span>
            <span className="legend-item"><span className="code">1+1</span> печать с&nbsp;двух сторон листа</span>
            <span className="legend-item">финальную стоимость уточняем после проверки макета</span>
          </div>
        </div>
      </div>
    </section>
  );
}
