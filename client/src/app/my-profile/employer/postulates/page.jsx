import PostulateCard from '@/components/PostulateCard/PostulateCard';
import style from './page.module.css';

//TO DO 1/1: Traer postulados de las publicaciones del usuario (falta la ruta)
const employerPostulates = [
  {
    id: 1,
    image: 'https://cdn-icons-png.flaticon.com/512/1785/1785888.png',
    name: 'Juan Perez',
    category: 'Limpieza',
    status: 'Aceptado',
    biography:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    image: 'https://cdn-icons-png.flaticon.com/512/4852/4852499.png',
    name: 'Maria Gomez',
    category: 'Limpieza',
    status: 'Pendiente',
    biography:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    image: 'https://cdn-icons-png.flaticon.com/512/863/863782.png',
    name: 'Miguel Reyes',
    category: 'Carpinteria',
    status: 'Cerrado',
    biography:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 4,
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png',
    name: 'Teresa Tovar',
    category: 'Pintura',
    status: 'Finalizado',
    biography:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 5,
    image: 'https://cdn-icons-png.flaticon.com/512/1785/1785888.png',
    name: 'Juan Perez',
    category: 'Limpieza',
    status: 'Pendiente',
    biography:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 6,
    image: 'https://cdn-icons-png.flaticon.com/512/4852/4852499.png',
    name: 'Maria Luz',
    category: 'Limpieza',
    status: 'Pendiente',
    biography:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 7,
    image: 'https://cdn-icons-png.flaticon.com/512/863/863782.png',
    name: 'Miguel Reyes',
    category: 'Carpinteria',
    status: 'Finalizado',
    biography:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 8,
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png',
    name: 'Luis Useche',
    category: 'Pintura',
    status: 'Rechazado',
    biography:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export default function EmployerPostulates() {
  const filteredPostulates = employerPostulates.filter((postulate) => {
    return postulate.status === 'Pendiente';
  });
  return (
    <section className={`container ${style['container']}`}>
      {Array.isArray(filteredPostulates) && filteredPostulates.length > 0 ? (
        filteredPostulates.map((match) => (
          <PostulateCard
            key={`match-${match.id}`}
            id={match.id}
            image={match.image}
            name={match.name}
            category={match.category}
            biography={match.biography}
          />
        ))
      ) : (
        <h1>Aun no tienes postulados.</h1>
      )}
    </section>
  );
}
