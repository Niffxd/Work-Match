// 'use client';
import { postProject, getProject } from '@/utils/api/project';
// import { useState } from 'react';
import styles from '../app/page.module.css';
import Cardjob from '../components/Cardjob';
// import prueba from '../components/contenido';
// import BasicPagination from '../components/Paginate/Pagination';

// const fetcher = (...args) => fetch(...args).then(res => res.json())

export default async function Home() {
  // const { data, error } = useSWR('http://localhost:3001/projects', fetcher)
  
  // const [paginate, setPaginate] = useState(prueba.slice(0, 5));  
  const projectSeed = {
    // id: 1,
    title: 'limpiar1',
    description: 'Lorem Ipsum es simplemente el texto de relleno de las impr,Lorem Ipsum es simplemente el texto de relleno de las impr,Lorem Ipsum es simplemente el texto de relleno de las imprLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
    address: 'lejos 123',
    budget: 100,
    agreement: true,
  };
//ESTO CREA PUBLICACIONES DE PRUEBA DESACTIVAR LUEGO  
// await postProject(projectSeed)

  // const paginate = async () => await getProject();  
  const data = await getProject().then();
  
  return (
    <main className={`container`}>
      <section className={`${styles['container_grid']}`}>
        {data.map((x) => ( 
          <Cardjob
            key={x.id.toString()}
            title={x.title}
            address={x.address}
            // imagen={x.imagen}
            description={x.description}
            budget={x.budget}
            // hora={x.hora}
          />
        ))        
      }
      </section>
      {/* <BasicPagination prueba={prueba} setPaginate={setPaginate} /> */}
    </main>
  );
}
