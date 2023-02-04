import { useSelector } from "react-redux";
import PublicationCard from "../../Cards/PublicationCard/PublicationCard";
import NotFound from "../../NotFound/NotFound";

export default function EmployerPublications() {
  const userState = useSelector((state) => state.user);
  const { user } = userState;
  const userApplications = user.Projects.filter(
    (project) => project.Bid.user === project.Bid.owner
  );
  return (
    <>
      {userApplications.length === 0 ? (
        <NotFound message='Aún no tienes publicaciones.' />
      ) : (
        userApplications.map((publication) => (
          <PublicationCard
            key={`publication-${publication.id}`}
            category={publication.Category.name}
            image={publication.Category.image}
            description={publication.description}
          />
        ))
      )}
    </>
  );
}
