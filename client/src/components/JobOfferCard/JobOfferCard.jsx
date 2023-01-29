import categories from '@/utils/helpers/categories';
import React from 'react';

import styles from './jobOfferCard.module.css';

export default function JobOfferCard({ title, address, description }) {
  const image = categories.find((category) => category.category === title);
  return (
    <>
      <div className={`${styles['container-grid']}`}>
        <div className={`${styles['imagen']}`}>
          <img
            className={`${styles['image-svg']}`}
            src={image.image}
            alt="imagen de trabajo"
          />
        </div>
        <div className={`${styles['info']}`}>
          <h4>{title}</h4>
          <h4 className={`${styles['address']}`}>{address}</h4>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
