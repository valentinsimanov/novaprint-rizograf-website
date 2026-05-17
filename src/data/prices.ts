export interface PriceByQuantity {
  quantity: number;
  price: string;
}

export interface PriceItem {
  productName: string;
  format: string;
  printType: string;
  pricesByQuantity: PriceByQuantity[];
  note?: string;
}

export const prices: PriceItem[] = [
  {
    productName: 'Листовка А4',
    format: 'А4',
    printType: '1+0',
    pricesByQuantity: [
      { quantity: 100, price: '2 ₽' },
      { quantity: 300, price: '1,9 ₽' },
      { quantity: 1000, price: '1,6 ₽' },
      { quantity: 5000, price: '1,1 ₽' },
    ],
  },
  {
    productName: 'Листовка А4',
    format: 'А4',
    printType: '1+1',
    pricesByQuantity: [
      { quantity: 100, price: '3 ₽' },
      { quantity: 300, price: '2,8 ₽' },
      { quantity: 1000, price: '2,2 ₽' },
      { quantity: 5000, price: '1,9 ₽' },
    ],
  },
  {
    productName: 'Брошюра А5, 8 страниц',
    format: 'А5',
    printType: '1+1',
    pricesByQuantity: [
      { quantity: 100, price: '6 ₽' },
      { quantity: 300, price: '5 ₽' },
      { quantity: 1000, price: '4,5 ₽' },
      { quantity: 5000, price: '3,9 ₽' },
    ],
  },
  {
    productName: 'Брошюра А5, 12 страниц',
    format: 'А5',
    printType: '1+1',
    pricesByQuantity: [
      { quantity: 100, price: '9 ₽' },
      { quantity: 300, price: '8,2 ₽' },
      { quantity: 1000, price: '7,6 ₽' },
      { quantity: 5000, price: '7 ₽' },
    ],
  },
];

export const quantities = [100, 300, 1000, 5000] as const;
