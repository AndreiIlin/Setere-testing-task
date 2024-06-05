import CartIcon from '@/assets/cart-icon.svg?react';
import { Wrapper } from '@/components/wrapper';
import type { FC } from 'react';


import styles from './styles.module.scss';

export const Header: FC = () => {

  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.container}>
          <a href="#" className={styles.logo}>ЛОГО</a>
          <div className={styles.addition}>
            <a className={styles.link} href="tel:+7 (812) 944-4490"> +7 (812) <span
              className={styles['link-rest']}
            >944-4490</span></a>
            <div className={styles['icon-wrapper']}>
              <CartIcon className={styles.icon} />
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
