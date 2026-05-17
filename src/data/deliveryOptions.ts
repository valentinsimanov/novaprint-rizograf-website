export interface DeliveryOption {
  title: string;
  description: string;
  condition?: string;
  meta: string;
}

export const deliveryOptions: DeliveryOption[] = [
  {
    title: 'Самовывоз',
    description: 'Пенза, улица Каракозова, 44. Согласуем удобное время.',
    meta: 'Бесплатно',
  },
  {
    title: 'Бесплатная доставка по Пензе',
    description: 'Доступна при заказе от 10 000 ₽. Привезём в удобное вам время.',
    condition: 'от 10 000 ₽',
    meta: 'от 10 000 ₽',
  },
  {
    title: 'Яндекс Доставка',
    description: 'Отправим заказ по вашему адресу в Пензе или области.',
    meta: 'по тарифу Яндекса',
  },
  {
    title: 'Транспортная или курьерская служба',
    description: 'Бесплатно довезём до выбранной службы. Дальше — по её тарифам.',
    meta: 'в любой регион',
  },
];
