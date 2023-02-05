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
  const userApplications = user.Projects.filter(
    (project) =>
      project.Bid.owner === user.id && project.Bid.owner !== project.Bid.user
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
    <>
      {userMatches.length === 0 ? (
        <NotFound message='Aún no haz hecho match.' />
      ) : (
        userMatches.map((match) => (
          <EmployerMatchCard
            key={`match-${match.id}`}
            category={match.Category.name}
            user={match.Bid.bidder}
            status={match.Bid.status}
          />
        ))
      )}
    </>
  );
}
