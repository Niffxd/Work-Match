import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddress, getState } from "../../redux/actions/addressActions";
import { getCategories } from "../../redux/actions/categoriesActions";
import {
  filteredProjects,
  getOriginalProjects,
  itemsPerPage,
} from "../../redux/actions/projectActions";
import { getAllUsers, getUserId } from "../../redux/actions/userActions";
import JobOfferCard from "../../components/Cards/JobOfferCard/JobOfferCard";
import Pagination from "../../components/Pagination/Pagination";
import NotFound from "../../components/NotFound/NotFound";
import Filter from "../../components/Filter/Filter";
import style from "./home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const projectState = useSelector((state) => state.project);
  const actualUser = useSelector((state) => state.user);
  const { allProjects, projectsPerPage, currentPage } = projectState;
  const numberPerPage = 6,
    variable = numberPerPage * (currentPage - 1),
    initialIndex = 0 + variable,
    finalIndex = numberPerPage + variable;
  useEffect(() => {
    dispatch(getAllUsers())
      .then(() => dispatch(getState()))
      .then(() => dispatch(getAddress()))
      .then(() => dispatch(getCategories()))
      .then(() => dispatch(getOriginalProjects()))
      .then(() => dispatch(filteredProjects()))
      .catch((error) => console.log(error));
  }, []); //eslint-disable-line

  useEffect(() => {
    dispatch(itemsPerPage(initialIndex, finalIndex));
  }, [currentPage, allProjects]); //eslint-disable-line

  useEffect(() => {
    Object.keys(actualUser.user).length !== 0 &&
      dispatch(getUserId(actualUser.user.id));
  }, [actualUser.user.id]); //eslint-disable-line

  return (
    <main className={`${style["container"]}`}>
      <section className={`container ${style["jobs-container"]}`}>
        <Filter />
        {allProjects.length === 0 ? (
          <NotFound message='No hay trabajos disponibles en este momento.' />
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
