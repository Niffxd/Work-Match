import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobOfferCard from "../../components/Cards/JobOfferCard/JobOfferCard";
import {
  getCity,
  getCountry,
  getState,
} from "../../redux/actions/addressActions";
import { getCategories } from "../../redux/actions/categoriesActions";
import { getProjects } from "../../redux/actions/projectActions";
import {
  getAllUsers,
  getJobState,
  getRole,
} from "../../redux/actions/userActions";
import style from "./home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const projectState = useSelector((state) => state.project);
  const { allProjects } = projectState;
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getRole());
    dispatch(getJobState());
    dispatch(getAllUsers());
    dispatch(getCountry());
    dispatch(getState());
    dispatch(getCity());
    dispatch(getProjects());
  }, []);

  return (
    <main className={`${style["container"]}`}>
      <section className={`container ${style["jobs-container"]}`}>
        {/* <Filter onSortChange={handleSort} /> */}
        {allProjects && allProjects.length > 0 ? (
          <>
            {allProjects.map((jobOffer) => (
              <JobOfferCard
                key={`job-offer-${jobOffer.id}`}
                id={jobOffer.id}
                category={jobOffer.category}
                owner={jobOffer.owner}
                description={jobOffer.description}
              />
            ))}
          </>
        ) : (
          <h1>No hay trabajos disponibles en este momento</h1>
        )}
      </section>
      {/* <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
    </main>
  );
}
