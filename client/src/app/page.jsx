'use client';
import { useState } from 'react';
import styles from '../app/page.module.css';
import Cardjob from '../components/Cardjob';
import prueba from '../components/contenido';
import BasicPagination from '../components/Paginate/Pagination';

export default function Home() {
  const [paginate, setPaginate] = useState(prueba.slice(0, 5));  
  return (
    <main className={`container`}>
      <section className={`${styles['container_grid']}`}>
        {paginate.map((x) => (
          <Cardjob
            key={x.id.toString()}
            nombre={x.nombre}
            imagen={x.imagen}
            texto={x.texto}
            precio={x.dinero}
            hora={x.hora}
          />
        ))}
      </section>
      <BasicPagination prueba={prueba} setPaginate={setPaginate} />
    </main>
  );
}
