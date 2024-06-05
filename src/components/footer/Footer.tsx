import type { FC } from 'react';

import styles from './styles.module.scss'

export const Footer: FC = () => {

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>ПОДВАЛ САЙТА</p>
    </footer>
  );
};
