export interface Product {
  title: string;
  description: string;
  image: string;
  alt: string;
  tag: string;
}

export const products: Product[] = [
  {
    title: 'Инструкции и схемы сборки',
    description: 'Чёрно-белая печать большим тиражом для мебели, техники и упаковки.',
    image: '/rizograf/assets/instructions.svg',
    alt: 'Инструкции и схемы сборки',
    tag: '01 · Инструкции',
  },
  {
    title: 'Вкладыши для товаров',
    description: 'Памятки, гарантийные листы и другие материалы, которые идут вместе с товаром.',
    image: '/rizograf/assets/inserts.svg',
    alt: 'Вкладыши для товаров',
    tag: '02 · Вкладыши',
  },
  {
    title: 'Бланки и рабочие материалы',
    description: 'Формы, анкеты, ведомости и журналы для офиса, магазина или производства.',
    image: '/rizograf/assets/blanks.svg',
    alt: 'Бланки и рабочие материалы',
    tag: '03 · Бланки',
  },
  {
    title: 'Документы и формы',
    description: 'Договоры, внутренние документы и учётные формы понятным тиражом.',
    image: '/rizograf/assets/documents.svg',
    alt: 'Документы и формы',
    tag: '04 · Документы',
  },
  {
    title: 'Бланки и медицинские карты',
    description: 'Карты, учётные формы и специализированные бланки для клиник и организаций.',
    image: '/rizograf/assets/medical-charts.svg',
    alt: 'Медицинские карты и бланки',
    tag: '05 · Медицинские бланки',
  },
  {
    title: 'И многое другое',
    description: 'Подскажем оптимальный формат, бумагу, тираж и срок.',
    image: '/rizograf/assets/other-products.svg',
    alt: 'Другие виды печати',
    tag: '06 · По запросу',
  },
];
