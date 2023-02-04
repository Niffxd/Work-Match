import { useSelector } from "react-redux";
import PostulateCard from "../../Cards/PostulateCard/PostulateCard";
//status:
//1 Abierto -> No hay match === 'Pendiente'
//2.1 Match -> Hubo Match
//2.2 Rechazado -> No hubo match
//3.1 Puntuar -> Faltan ambos por puntuar
//3.2 Puntuar al Postulado -> falta el empleador por puntuar
//3.3 Puntuar al empleador -> falta el postulado por puntuar
//4 Finalizado -> Ambos puntuaron
export default function EmployerPostulates() {
  const userState = useSelector((state) => state.user);
  const { user } = userState;
  const userApplications = user.Projects.filter(
    (project) => project.Bid.user !== user.id
  );
  const userMatches = userApplications.filter((application) => {
    return application.Bid.status === "Abierto";
  });
  return (
    <>
      <PostulateCard />
      {/* {Array.isArray(filteredPostulates) && filteredPostulates.length > 0 ? (
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
        )} */}
    </>
  );
}
