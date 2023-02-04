import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobOfferCard from "../../components/Cards/JobOfferCard/JobOfferCard";
import Pagination from "../../components/Pagination/Pagination";
import { getAddress, getState } from "../../redux/actions/addressActions";
import { getCategories } from "../../redux/actions/categoriesActions";
import { getProjects, itemsPerPage } from "../../redux/actions/projectActions";
import { getAllUsers, getUserId } from "../../redux/actions/userActions";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const projectState = useSelector((state) => state.project);
  const actualUser = useSelector((state) => state.user);
  const { allProjects, projectsPerPage, currentPage } = projectState;
  const numberPerPage = 6,
    variable = numberPerPage * (currentPage - 1),
    initialIndex = 0 + variable,
    finalIndex = numberPerPage + variable;
  const { user } = useAuth0();

  useEffect(() => {
    dispatch(getAllUsers())
      .then(() => dispatch(getState()))
      .then(() => dispatch(getAddress()))
      .then(() => dispatch(getCategories()))
      .then(() => dispatch(getProjects()))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    dispatch(itemsPerPage(initialIndex, finalIndex));
  }, [currentPage, allProjects]);

  useEffect(() => {
    Object.keys(actualUser.user).length !== 0 &&
      dispatch(getUserId(actualUser.user.id));
  }, [actualUser.user.id]);

  return (
    <main className={`${style["container"]}`}>
      <section className={`container ${style["jobs-container"]}`}>
        {/* <Filter onSortChange={handleSort} /> */}
        <Link to='/my-profile'>My profile</Link>
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
