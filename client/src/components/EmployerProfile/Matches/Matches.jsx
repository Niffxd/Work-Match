import { useSelector } from "react-redux";
import MatchCard from "../../Cards/MatchCard/MatchCard";

export default function EmployerMatches() {
  const userState = useSelector((state) => state.user);
  const { user } = userState;
  const userApplications = user.Projects.filter(
    (project) => project.Bid.owner === user.id
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
        <h1>Aun no haz hecho match.</h1>
      ) : (
        userMatches.map((match) => (
          <MatchCard
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
