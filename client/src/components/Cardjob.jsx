import categories from '@/utils/helpers/categories';
import React from 'react';

import styles from '../app/page.module.css';

export default function Cardjob({ title, address, description, budget }) {
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
          <h3>{title}</h3>
          <h3>{address}</h3>
          <p>{description}</p>
          {/* <div className={`${styles['precio_hora']}`}>
        <span>
        <Image
        className={`|${styles["imagen_time"]}`}
        src={time}
        alt="time"
        />{" "} 
        {hora}
      </span> */}
          {/* <span>
          <Image
              className={`${styles["imagen_money"]}`}
              src={money}
              alt="dinero"
              />{" "}
              {budget}
            </span> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
