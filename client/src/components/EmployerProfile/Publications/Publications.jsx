import { useSelector } from "react-redux";
import JobOfferCard from "../../Cards/JobOfferCard/JobOfferCard";
import NotFound from "../../NotFound/NotFound";

export default function EmployerPublications() {
  const userState = useSelector((state) => state.user);
  const { user } = userState;
  const userApplications = user.Projects.filter(
    (project) => project.Bid.status === "Owner"
  );
  return (
    <>
      {userApplications.length === 0 ? (
        <NotFound message='Aún no tienes publicaciones.' />
      ) : (
        userApplications.map((publication) => (
          <JobOfferCard
            key={`publication-${publication.id}`}
            id={publication.id}
            category={publication.Category.name}
            description={publication.description}
            image={publication.Category.image}
            budget={publication.budget}
            state={publication.state}
            deleted={publication.deleted}
            status={publication.status}
          />
        ))
      )}
    </>
  );
}
