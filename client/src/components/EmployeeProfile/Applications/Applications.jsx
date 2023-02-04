import { useSelector } from "react-redux";
import ApplicationCard from "../../Cards/ApplicationCard/Applications";

export default function EmployeeApplications() {
  const userState = useSelector((state) => state.user);
  const { user } = userState;
  const userApplications = user.Projects.filter(
    (project) => project.Bid.owner !== user.id
  );
  return (
    <>
      {userApplications.length === 0 ? (
        <h1>No tienes ninguna postulación.</h1>
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
