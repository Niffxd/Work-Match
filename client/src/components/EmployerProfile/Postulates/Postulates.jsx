import { useSelector } from "react-redux";
import PostulateCard from "../../Cards/PostulateCard/PostulateCard";
import NotFound from "../../NotFound/NotFound";
//status:
//0 Owner -> Creador/Propietario
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
  const usersProjects = user.Projects.filter(
    (project) => project.Users.length > 1
    // project.Bid.owner === user.id && project.Bid.owner !== project.Bid.user
  );
  const userPostulates = [];
  for (let project of usersProjects) {
    project.Users.forEach((user) => {
      if (user.Bid.user !== user.Bid.owner) {
        userPostulates.push({ ...user, project: project.Category.name });
      }
    });
  }
  const postulatesOpen = userPostulates.filter((application) => {
    return application.Bid.status === "Abierto";
  });
  return (
    <>
      {postulatesOpen.length === 0 ? (
        <NotFound message='Aún no tienes postulados.' />
      ) : (
        postulatesOpen.map((user, index) => (
          <PostulateCard
            key={`postulate-${index}`}
            id={user.id}
            image={user.image}
            name={user.name}
            category={user.category}
            biography={user.biography}
          />
        ))
      )}
    </>
  );
}
