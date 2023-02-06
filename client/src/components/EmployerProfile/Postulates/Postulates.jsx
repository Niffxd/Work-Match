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
      <p>Falta la funcionalidad de match.</p>
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
