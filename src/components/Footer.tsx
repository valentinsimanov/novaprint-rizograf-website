interface FooterProps {
  tagline?: string;
}

export default function Footer({ tagline = 'Печать на ризографе · от 100 экземпляров' }: FooterProps = {}) {
  return (
    <footer className="foot">
      <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', width: '100%' }}>
        <span>© Новапринт · Пенза · 2025</span>
        <span>{tagline}</span>
      </div>
    </footer>
  );
}
