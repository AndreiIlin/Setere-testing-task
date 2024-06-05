import { ProductCard } from '@/components/product-card';
import { Wrapper } from '@/components/wrapper';
import { cards } from '@/model/cards';
import type { FC } from 'react';

import styles from './styles.module.scss';

export const Main: FC = () => {

  return (
    <Wrapper>
      <main className={styles.main}>
        <div className={styles.crumbs}>
          <a className={styles.crumb} href="#">Главная</a>
          <a className={styles.crumb} href="#">Меню</a>
          <a className={styles.crumb} href="#">Категория товаров</a>
        </div>
        <h1 className={styles.title}>Название категории</h1>
        <div className={styles.cards}>
          {cards.map(card => <ProductCard card={card} key={card.id} />)}
        </div>
      </main>
    </Wrapper>
  );
};
