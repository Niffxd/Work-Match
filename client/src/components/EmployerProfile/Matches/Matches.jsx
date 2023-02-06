import { useSelector } from "react-redux";
import EmployerMatchCard from "../../Cards/MatchCard/EmployerMatchCard";
import NotFound from "../../NotFound/NotFound";

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
      if (
        postulate.Bid.status === "Match" ||
        postulate.Bid.status === "Puntuar" ||
        postulate.Bid.status === "Puntuar al postulado" ||
        postulate.Bid.status === "Puntuar al empleador" ||
        postulate.Bid.status === "Finalizado"
      ) {
        userMatches.push({ ...postulate, category: project.Category.name });
      }
    }
  });

  console.log(userMatches);
  return (
    <>
      {userMatches.length === 0 ? (
        <NotFound message='Aún no haz hecho match.' />
      ) : (
        userMatches.map((match, index) => (
          <EmployerMatchCard
            key={`match-${index}`}
            id={match.id}
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
