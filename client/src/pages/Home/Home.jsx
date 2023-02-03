import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobOfferCard from "../../components/Cards/JobOfferCard/JobOfferCard";
import Pagination from "../../components/Pagination/Pagination";
import { getAddress, getState } from "../../redux/actions/addressActions";
import { getCategories } from "../../redux/actions/categoriesActions";
import { getProjects, itemsPerPage } from "../../redux/actions/projectActions";
import { getAllUsers, getUserId } from "../../redux/actions/userActions";
import style from "./home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const projectState = useSelector((state) => state.project);
  const { allProjects, projectsPerPage, currentPage } = projectState;
  const numberPerPage = 6,
    variable = numberPerPage * (currentPage - 1),
    initialIndex = 0 + variable,
    finalIndex = numberPerPage + variable;

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAddress());
    dispatch(getState());
    dispatch(getCategories());
    dispatch(getProjects());
    dispatch(getUserId(2));
  }, [dispatch]);

  useEffect(() => {
    dispatch(itemsPerPage(initialIndex, finalIndex));
  }, [currentPage, allProjects]);

  return (
    <main className={`${style["container"]}`}>
      <section className={`container ${style["jobs-container"]}`}>
        {/* <Filter onSortChange={handleSort} /> */}
        {allProjects.length === 0 ? (
          <h1>No hay trabajos disponibles en este momento</h1>
        ) : (
          <div className={`${style["all-jobs"]}`}>
            {projectsPerPage.map((jobOffer) => (
              <JobOfferCard
                key={`job-offer-${jobOffer.id}`}
                id={jobOffer.id}
                category={jobOffer.Category.name}
                image={jobOffer.Category.image}
                description={jobOffer.description}
                budget={jobOffer.budget}
                estimated={jobOffer.estimated}
                state={jobOffer.state}
                deleted={jobOffer.deleted}
                status={jobOffer.status}
              />
            ))}
          </div>
        )}
        {allProjects.length > numberPerPage && (
          <Pagination
            currentPage={currentPage}
            numberOfItems={allProjects.length}
            numberPerPage={numberPerPage}
          />
        )}
      </section>
    </main>
  );
}
