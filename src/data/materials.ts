export interface Material {
  title: string;
  density: string;
  availability: string;
  note: string;
  inStock: boolean;
}

export const materials: Material[] = [
  {
    title: 'Офсетная белая',
    density: 'от 65 до 120 г/м²',
    availability: 'Есть в наличии',
    note: 'Универсальная бумага под большинство задач — инструкции, бланки, вкладыши.',
    inStock: true,
  },
  {
    title: 'Офсетная цветная',
    density: 'от 80 до 160 г/м²',
    availability: 'По предварительному заказу',
    note: 'Тонированная бумага для объявлений, листовок и карточек, которые нужно выделить.',
    inStock: false,
  },
  {
    title: 'Мелованная и картон',
    density: 'от 80 до 300 г/м²',
    availability: 'По предварительному заказу',
    note: 'Плотные материалы для обложек, карточек и продукции, которая идёт «в руки».',
    inStock: false,
  },
  {
    title: 'Материал заказчика',
    density: 'любая плотность',
    availability: 'Согласуем перед запуском',
    note: 'Можем напечатать на вашей бумаге. Возможность согласуем перед запуском.',
    inStock: false,
  },
];
