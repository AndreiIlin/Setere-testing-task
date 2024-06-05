interface CardVariant {
  title: string;
  value: string;
  default: boolean;
}

export interface Card {
  id: number;
  title: string;
  description: string;
  variants: CardVariant[];
  price: number;
  hasNoGluten: boolean;
  imageLink: string;
}

export const cards: Card[] = [
  {
    id: 1,
    title: 'Товар 1',
    description: 'Здесь будет описание товара. У некоторых товаров описание может быть коротким, а у некоторых - длинным.',
    variants: [
      {
        title: 'Стандарт',
        value: 'standard1',
        default: false,
      },
      {
        title: 'Двойной',
        value: 'double1',
        default: true,
      },
    ],
    hasNoGluten: false,
    price: 190,
    imageLink: 'src/assets/product.jpg',
  },
  {
    id: 2,
    title: 'Товар 2',
    description: 'Здесь будет описание товара. У некоторых товаров описание может быть коротким, а у некоторых - длинным.',
    variants: [
      {
        title: 'Стандарт',
        value: 'standard2',
        default: false,
      },
      {
        title: 'Двойной',
        value: 'double2',
        default: true,
      },
    ],
    hasNoGluten: true,
    price: 190,
    imageLink: 'src/assets/product.jpg',
  },
  {
    id: 3,
    title: 'Товар 3',
    description: 'Здесь будет описание товара. У некоторых товаров описание может быть коротким, а у некоторых - длинным.',
    variants: [
      {
        title: 'Стандарт',
        value: 'standard3',
        default: false,
      },
      {
        title: 'Двойной',
        value: 'double3',
        default: true,
      },
    ],
    hasNoGluten: true,
    price: 190,
    imageLink: 'src/assets/product.jpg',
  },
  {
    id: 4,
    title: 'Товар 4',
    description: 'Здесь будет описание товара. У некоторых товаров описание может быть коротким, а у некоторых - длинным.',
    variants: [
      {
        title: 'Стандарт',
        value: 'standard4',
        default: false,
      },
      {
        title: 'Двойной',
        value: 'double4',
        default: true,
      },
    ],
    hasNoGluten: true,
    price: 190,
    imageLink: 'src/assets/product.jpg',
  },
];
