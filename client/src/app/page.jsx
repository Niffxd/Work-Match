'use client';
import Filter from '@/components/Filter/Filter';
import { useState, useEffect  } from 'react';
import styles from '../app/page.module.css';
import Cardjob from '../components/Cardjob';
// import prueba from '../components/contenido';
// import BasicPagination from '../components/Paginate/Pagination';

export const get = async (arg) => {
  const URL = 'http://localhost:3001/project';
  const query = (typeof arg === "number") ? '/' + arg
    : (typeof arg === "object") ? '?' + new URLSearchParams(arg) 
    : '';
  const uri = URL + query;
  console.log(uri)
  const res = await fetch(uri);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const { data } = await res.json();
  return data;
};

export default function Home() {
  const [paginate, setPaginate] = useState();
  const [order, setOrder] = useState('ASC');
  
  useEffect(() => {
    get({column:'title', direction:order}).then(data => setPaginate(data));
  }, [paginate, order]);
  

  // const projectSeed = {
  //   // id: 1,
  //   title: 'limpiar1',
  //   description: 'Lorem Ipsum es simplemente el texto de relleno de las impr,Lorem Ipsum es simplemente el texto de relleno de las impr,Lorem Ipsum es simplemente el texto de relleno de las imprLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
  //   address: 'lejos 123',
  //   budget: 100,
  //   agreement: true,
  // };
  //ESTO CREA PUBLICACIONES DE PRUEBA DESACTIVAR LUEGO  
  // await postProject(projectSeed)

    const handleSort = (e) => {
      setOrder(e);
    }

  return (<>
    <Filter onSortChange={handleSort} />
    <main className={`container`}>
      <section className={`${styles['container_grid']}`}>
        {paginate && paginate.map(e => (
          <Cardjob
            key={e.id}
            project={e}
          />
        ))
        }
      </section>
      {/* <BasicPagination prueba={prueba} setPaginate={setPaginate} /> */}
    </main>
  </>);
}
