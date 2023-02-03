import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobOfferCard from "../../components/Cards/JobOfferCard/JobOfferCard";
import { getAddress, getState } from "../../redux/actions/addressActions";
import { getCategories } from "../../redux/actions/categoriesActions";
import { getProjects } from "../../redux/actions/projectActions";
import { getAllUsers, getUserId } from "../../redux/actions/userActions";
import style from "./home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const projectState = useSelector((state) => state.project);
  const { allProjects } = projectState;

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAddress());
    dispatch(getState());
    dispatch(getCategories());
    dispatch(getProjects());
    dispatch(getUserId(2));
  }, [dispatch]);

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
                category={jobOffer.Category.name}
                image={jobOffer.Category.image}
                description={jobOffer.description}
                budget={jobOffer.budget}
                estimated={jobOffer.estimated}
                state={jobOffer.state}
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
