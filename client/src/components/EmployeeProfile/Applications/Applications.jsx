import { useSelector } from "react-redux";
import ApplicationCard from "../../Cards/ApplicationCard/Applications";
import NotFound from "../../NotFound/NotFound";

export default function EmployeeApplications() {
  const userState = useSelector((state) => state.user);
  const { user } = userState;
  const userApplications = user.Projects.filter(
    (project) => project.Bid.owner !== user.id
  );
  return (
    <>
      {userApplications.length === 0 ? (
        <NotFound message='No tienes ninguna postulación.' />
      ) : (
        <>
          {userApplications.map((project) => (
            <ApplicationCard
              key={`user-application-${project.id}`}
              category={project.Category.name}
              image={project.Category.image}
              description={project.description}
              status={project.Bid.status}
            />
          ))}
        </>
      )}
    </>
  );
}
