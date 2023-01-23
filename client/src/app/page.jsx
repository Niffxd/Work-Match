// 'use client';
import Filter from '@/components/Filter/Filter';
import { postProject, getProject } from '@/utils/api/project';
// import { useState } from 'react';
import styles from '../app/page.module.css';
import Cardjob from '../components/Cardjob';
// import prueba from '../components/contenido';
// import BasicPagination from '../components/Paginate/Pagination';

// const fetcher = (...args) => fetch(...args).then(res => res.json())

export default async function Home() {
  // const [paginate, setPaginate] = useState(await getProject()); 
  let paginate; 
  const projectSeed = {
    // id: 1,
    title: 'limpiar1',
    description: 'Lorem Ipsum es simplemente el texto de relleno de las impr,Lorem Ipsum es simplemente el texto de relleno de las impr,Lorem Ipsum es simplemente el texto de relleno de las imprLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
    address: 'lejos 123',
    budget: 100,
    agreement: true,
  };
//ESTO CREA PUBLICACIONES DE PRUEBA DESACTIVAR LUEGO  
await postProject(projectSeed)

  const setPaginate = async (arg) => paginate = await getProject(arg);  
  await setPaginate();

  return (
    <main className={`container`}>
      <section className={`${styles['container_grid']}`}>
        {paginate.map(e => ( 
          <Cardjob
            key={e.id}
            project={e}            
          />
        ))        
      }
      </section>
      {/* <BasicPagination prueba={prueba} setPaginate={setPaginate} /> */}
      <Filter />
    </main>
  );
}
