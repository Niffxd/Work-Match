import { useSelector } from "react-redux";
import MatchCard from "../../Cards/MatchCard/MatchCard";
//status:
//1 Abierto -> No hay match === 'Pendiente'
//2.1 Match -> Hubo Match
//2.2 Rechazado -> No hubo match
//3.1 Puntuar -> Faltan ambos por puntuar
//3.2 Puntuar al Postulado -> falta el empleador por puntuar
//3.3 Puntuar al empleador -> falta el postulado por puntuar
//4 Finalizado -> Ambos puntuaron
export default function EmployeeMatches() {
  const userState = useSelector((state) => state.user);
  const { user } = userState;
  const userApplications = user.Projects.filter(
    (project) => project.Bid.owner !== user.id
  );
  const userMatches = userApplications.filter((application) => {
    return (
      application.Bid.status === "Match" ||
      application.Bid.status === "Puntuar" ||
      application.Bid.status === "Puntuar al postulado" ||
      application.Bid.status === "Puntuar al empleador" ||
      application.Bid.status === "Finalizado"
    );
  });
  return (
    <section className={``}>
      {userMatches.length === 0 ? (
        <h1>Aun no tienen matches. ¡Sigue intentando!</h1>
      ) : (
        userMatches.map((match) => (
          <MatchCard
            key={`match-${match.id}`}
            category={match.Category.name}
            user={match.Bid.owner}
            status={match.Bid.status}
          />
        ))
      )}
    </section>
  );
}
