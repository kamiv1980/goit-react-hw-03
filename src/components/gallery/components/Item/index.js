/** @format */

import React from 'react';
import styles from './styles.module.css';

export const GalleryItem = ({ id, src, alt, dataSource, handle }) => {
  return (
    <li onClick={() => handle(dataSource)} className={styles.ImageGalleryItem}>
      <img src={src} alt={alt} data-source={dataSource} className={styles.image} />
    </li>
  );
};
