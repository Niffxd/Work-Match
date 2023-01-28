import MatchCard from '@/components/MatchCard/MatchCard';
import style from './page.module.css';

//TO DO 1/1: Traer postulados de las publicaciones del usuario (falta la ruta)
const employeeApplications = [
  {
    id: 1,
    image: 'https://cdn-icons-png.flaticon.com/512/1785/1785888.png',
    name: 'Juan Perez',
    category: 'Limpieza',
    status: 'Aceptado',
  },
  {
    id: 2,
    image: 'https://cdn-icons-png.flaticon.com/512/4852/4852499.png',
    name: 'Maria Gomez',
    category: 'Limpieza',
    status: 'Pendiente',
  },
  {
    id: 3,
    image: 'https://cdn-icons-png.flaticon.com/512/863/863782.png',
    name: 'Miguel Reyes',
    category: 'Carpinteria',
    status: 'Cerrado',
  },
  {
    id: 4,
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png',
    name: 'Teresa Tovar',
    category: 'Pintura',
    status: 'Finalizado',
  },
  {
    id: 5,
    image: 'https://cdn-icons-png.flaticon.com/512/1785/1785888.png',
    name: 'Juan Perez',
    category: 'Limpieza',
    status: 'Cerrado',
  },
  {
    id: 6,
    image: 'https://cdn-icons-png.flaticon.com/512/4852/4852499.png',
    name: 'Maria Luz',
    category: 'Limpieza',
    status: 'Aceptado',
  },
  {
    id: 7,
    image: 'https://cdn-icons-png.flaticon.com/512/863/863782.png',
    name: 'Miguel Reyes',
    category: 'Carpinteria',
    status: 'Finalizado',
  },
  {
    id: 8,
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png',
    name: 'Luis Useche',
    category: 'Pintura',
    status: 'Rechazado',
  },
];

export default function EmployerMatches() {
  const employeeMatches = employeeApplications.filter((application) => {
    return (
      application.status === 'Aceptado' ||
      application.status === 'Finalizado' ||
      application.status === 'Cerrado'
    );
  });
  return (
    <section className={`container ${style['container']}`}>
      {Array.isArray(employeeMatches) && employeeMatches.length > 0 ? (
        employeeMatches.map((match) => (
          <MatchCard
            key={`match-${match.id}`}
            id={match.id}
            image={match.image}
            name={match.name}
            category={match.category}
            status={match.status}
          />
        ))
      ) : (
        <h1>Aun no tienen matches.</h1>
      )}
    </section>
  );
}
