import Image from 'next/image';
import { products } from '@/data/products';

export default function Products() {
  return (
    <section id="products">
      <div className="wrap">
        <div className="section-head row">
          <h2 className="eyebrow eyebrow-title">Что печатаем на ризографе</h2>
          <p className="lede">
            Типовые материалы для бизнеса, производства, офиса и&nbsp;локальной рекламы. Если нужного формата нет в&nbsp;списке&nbsp;— напишите, подскажем, можно&nbsp;ли сделать заказ на&nbsp;ризографе.
          </p>
        </div>
        <div className="cards-grid">
          {products.map((product) => (
            <article className="prod-card" key={product.tag}>
              <div className="prod-card-img">
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={320}
                  height={240}
                  style={{ objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <div className="prod-card-body">
                <span className="prod-card-tag">{product.tag}</span>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
