import { useEffect } from "react";
import { useDispatch } from "react-redux";
import JobOfferCard from "../../components/Cards/JobOfferCard/JobOfferCard";
import {
  getCity,
  getCountry,
  getState,
} from "../../redux/actions/addressActions";
import { getCategories } from "../../redux/actions/categoriesActions";
import { getJobState, getRole } from "../../redux/actions/userActions";
import style from "./home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const paginate = [];

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getRole());
    dispatch(getJobState());
    dispatch(getCountry());
    dispatch(getState());
    dispatch(getCity());
  }, []);

  return (
    <main className={`${style["container"]}`}>
      <section className={`container ${style["jobs-container"]}`}>
        {/* <Filter onSortChange={handleSort} /> */}
        {paginate && paginate.length > 0 ? (
          paginate.map((jobOffer) => (
            <JobOfferCard
              title={jobOffer.category}
              address={jobOffer.address}
              description={jobOffer.description}
            />
          ))
        ) : (
          <h1>No hay trabajos disponibles en este momento</h1>
        )}
      </section>
      {/* <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
    </main>
  );
}
