import { useSelector } from "react-redux";
import style from "./jobOfferCard.module.css";
import { useHistory } from "react-router-dom";

export default function JobOfferCard({ id, category, owner, description }) {
  const history = useHistory();
  const categoriesState = useSelector((state) => state.categories);
  const { categories } = categoriesState;
  const jobCategory = categories.find((categ) => categ.id === category);
  const detailHandler = (event) => {
    event.preventDefault();
    history.push(`/job-offer/${id}`);
  };
  return (
    <>
      <div className={`${style["container-grid"]}`} onClick={detailHandler}>
        <div className={`${style["imagen"]}`}>
          <img
            className={`${style["image-svg"]}`}
            src={jobCategory.image}
            alt='imagen de trabajo'
          />
        </div>
        <div className={`${style["information"]}`}>
          <h4>{jobCategory.name}</h4>
          <h4 className={`${style["address"]}`}>{}</h4>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
