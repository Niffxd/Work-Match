import { useSelector } from "react-redux";
import PostulateCard from "../../Cards/PostulateCard/PostulateCard";
import NotFound from "../../NotFound/NotFound";

export default function EmployerPostulates() {
  //State
  const userState = useSelector((state) => state.user);
  const { user } = userState;
  //User's publications
  const userProjects = user.Projects.filter(
    (project) => project.Bid.status === "Owner"
  );
  //User postulates
  const userPostulates = [];

  //Filter open applications
  userProjects.forEach((project) => {
    for (let postulate of project.Users) {
      if (postulate.Bid.status === "Abierto") {
        userPostulates.push({ ...postulate, category: project.Category.name });
      }
    }
  });
  return (
    <>
      {userPostulates.length === 0 ? (
        <NotFound message='No tienes postulaciones pendientes.' />
      ) : (
        userPostulates.map((postulate, index) => (
          <PostulateCard
            key={`postulate-${index}`}
            project={postulate.Bid.project}
            bid={postulate.Bid.id}
            image={postulate.image}
            name={postulate.name}
            category={postulate.category}
            biography={postulate.biography}
          />
        ))
      )}
    </>
  );
}
