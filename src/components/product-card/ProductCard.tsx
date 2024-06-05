import NoGlutenIcon from '@/assets/no-gluten.svg?react';
import type { Card } from '@/model/cards';
import type { FC } from 'react';
import React, { useState } from 'react';

import styles from './styles.module.scss';

interface ProductCardProps {
  card: Card;
}

export const ProductCard: FC<ProductCardProps> = ({ card }) => {
  const [selected, setSelected] = useState(card.variants.find(v => v.default)?.value);

  return (
    <div className={styles.card}>
      <div className={styles['image-layout']}>
        <img className={styles.image} src={card.imageLink} alt={card.title} />
        {card.hasNoGluten && (
          <NoGlutenIcon className={styles['image-additional']} />
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{card.title}</h3>
        <p className={styles.description}>{card.description}</p>

        <div className={styles.toggle}>
          {card.variants.map(variant => {
            return (
              <React.Fragment key={variant.value}>
                <input
                  className={styles['toggle-input']}
                  type="radio"
                  id={variant.value}
                  checked={variant.value === selected}
                  onChange={() => setSelected(variant.value)}
                />
                <label className={styles['toggle-label']} htmlFor={variant.value}>{variant.title}</label>
              </React.Fragment>
            );
          })}
          <div
            className={styles.slider} style={{ left: `${card.variants.findIndex(v => v.value === selected) * 45}%` }}
          ></div>
        </div>
        <div className={styles.footer}>
          <p className={styles.price}>{card.price} ₽</p>
          <button className={styles.button}>Заказать</button>
        </div>
      </div>
    </div>
  );
};
