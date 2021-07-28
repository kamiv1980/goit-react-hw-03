/** @format */

import React from 'react';
import styles from './styles.module.css';

export const Button = ({ addItems }) => {
  return (
    <div className={styles.wrapper}>
      <button type="submit" onClick={addItems} className={styles.btn}>
        Load more
      </button>
    </div>
  );
};
