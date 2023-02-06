import { useSelector } from "react-redux";
import EmployerMatchCard from "../../Cards/MatchCard/EmployerMatchCard";
import NotFound from "../../NotFound/NotFound";
//status:
//1 Abierto -> No hay match === 'Pendiente'
//2.1 Match -> Hubo Match
//2.2 Rechazado -> No hubo match
//3.1 Puntuar -> Faltan ambos por puntuar
//3.2 Puntuar al postulado -> falta el empleador por puntuar
//3.3 Puntuar al empleador -> falta el postulado por puntuar
//4 Finalizado -> Ambos puntuaron
export default function EmployerMatches() {
  const userState = useSelector((state) => state.user);
  const { user } = userState;
  //User's publications
  const userProjects = user.Projects.filter(
    (project) => project.Bid.status === "Owner"
  );
  //User matches
  const userMatches = [];

  //Filter close applications
  userProjects.forEach((project) => {
    for (let postulate of project.Users) {
      if (postulate.Bid.status === "Match") {
        userMatches.push({ ...postulate, category: project.Category.name });
      }
    }
  });

  console.log(userMatches);
  return (
    <>
      <p>Falta la funcionalidad.</p>
      {userMatches.length === 0 ? (
        <NotFound message='Aún no haz hecho match.' />
      ) : (
        userMatches.map((match, index) => (
          <EmployerMatchCard
            id={match.id}
            key={`match-${index}`}
            bid={match.Bid.id}
            category={match.category}
            image={match.image}
            status={match.Bid.status}
            phone={match.phone}
            name={match.name}
          />
        ))
      )}
    </>
  );
}
