import { useSelector } from "react-redux";
import EmployeeMatchCard from "../../Cards/MatchCard/EmployeeMatchCard";
import NotFound from "../../NotFound/NotFound";

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
        <NotFound message='Aun no tienen matches. ¡Sigue intentando!' />
      ) : (
        userMatches.map((match) => {
          const owner = match.Users.find((user) => user.Bid.status === "Owner");
          return (
            <EmployeeMatchCard
              key={`match-${match.id}`}
              category={match.Category.name}
              bid={match.Bid.id}
              owner={owner}
              status={match.Bid.status}
            />
          );
        })
      )}
    </section>
  );
}
