import "./index.module.css";

import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <span className={"star-rating"}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span className={"star-rating button"}>
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "star-rating-on" : "star-rating-off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
          </span>
        );
      })}
    </span>
  );
};

export default StarRating;