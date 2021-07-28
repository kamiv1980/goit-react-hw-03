/** @format */

import React, { useEffect } from 'react';
import styles from './styles.module.css';

export const Modal = ({ handleClose = () => null, dataSrc = '' }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleClose);
  }, []);
  return (
    <div onClick={handleClose} className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src={dataSrc} alt="Error" />
      </div>
    </div>
  );
};
