import PublicationCard from "../../Cards/PublicationCard/PublicationCard";

export default function EmployerPublications() {
  return (
    <>
      <PublicationCard />
      {/* {Array.isArray(employerPublications) &&
        employerPublications.length > 0 ? (
          employerPublications.map((publication) => (
            <PublicationCard
              key={`publication-${publication.id}`}
              category={publication.category}
              description={publication.description}
              status={publication.status}
            />
          ))
        ) : (
          <h1>Aun no tiene publicaciones</h1>
        )} */}
    </>
  );
}
