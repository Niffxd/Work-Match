import { useSelector } from "react-redux";
import style from "./jobOfferCard.module.css";
import { useHistory } from "react-router-dom";

export default function JobOfferCard({
  id,
  category,
  description,
  image,
  budget,
  state,
}) {
  const history = useHistory();
  const stateState = useSelector((state) => state.address);
  const { states } = stateState;
  const jobState = states.find((element) => element.id === parseInt(state));
  const detailHandler = (event) => {
    event.preventDefault();
    history.push(`/job-offer/${id}`);
  };
  return (
    <article className={`${style["container-grid"]}`} onClick={detailHandler}>
      {/* Image */}
      <img
        className={`${style["image"]}`}
        src={image}
        alt='imagen de trabajo'
      />
      {/* Category */}
      <h4 className={`${style["category"]}`}>{category}</h4>
      {/* State */}
      {jobState && <p className={`${style["address"]}`}>{jobState.name}</p>}
      {/* Budget */}
      <div className={`${style["budget"]}`}>
        {budget && (
          <>
            <img
              className='icon-dark'
              src='https://cdn-icons-png.flaticon.com/512/9420/9420018.png'
              alt='budget'
            />
            <p>{budget} ARS</p>
          </>
        )}
      </div>
      {/* Description */}
      <p className={`${style["description"]}`}>{description}</p>
    </article>
  );
}
