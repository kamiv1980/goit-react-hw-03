/** @format */

import React from 'react';
import { GalleryItem } from './components/galleryItem';
import styles from './styles.module.css';

export const Gallery = ({ list, handle }) => {
  return (
    <ul className={styles.ImageGallery}>
      {list.map((item) => (
        <GalleryItem
          key={item.id}
          id={item.id}
          src={item.webformatURL}
          dataSource={item.largeImageURL}
          alt={item.tags}
          handle={handle}
        />
      ))}
    </ul>
  );
};
