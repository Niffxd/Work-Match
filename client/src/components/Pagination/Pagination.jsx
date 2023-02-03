import { useDispatch } from "react-redux";

import { currentPg } from "../../redux/actions/projectActions";

import style from "./pagination.module.css";

export default function Pagination({
  numberOfItems,
  numberPerPage,
  currentPage,
}) {
  const dispatch = useDispatch(),
    prevPage = currentPage - 1,
    nextPage = currentPage + 1,
    firstPage = 1,
    lastPage = Math.ceil(numberOfItems / numberPerPage);

  const clickHandler = (event) => {
    event.preventDefault();
    dispatch(currentPg(parseInt(event.target.value)));
  };
  return (
    <div className={`${style["paged"]}`}>
      {currentPage !== firstPage && (
        <button
          className={style["button"]}
          onClick={clickHandler}
          value={prevPage}
        >
          {"<"}
        </button>
      )}
      {currentPage !== firstPage && (
        <button
          className={style["button"]}
          onClick={clickHandler}
          value={firstPage}
        >
          {firstPage}
        </button>
      )}

      {currentPage !== firstPage &&
        prevPage !== firstPage &&
        prevPage !== firstPage + 1 && (
          <button className={style["text"]}>...</button>
        )}

      {currentPage !== firstPage && prevPage !== firstPage && (
        <button
          className={style["button"]}
          onClick={clickHandler}
          value={prevPage}
        >
          {prevPage}
        </button>
      )}

      <button className={style["current-page"]}>{currentPage}</button>

      {!(nextPage >= lastPage) && (
        <button
          className={style["button"]}
          onClick={clickHandler}
          value={nextPage}
        >
          {nextPage}
        </button>
      )}

      {currentPage !== lastPage &&
        nextPage !== lastPage &&
        nextPage + 1 !== lastPage && (
          <button className={style["text"]}>...</button>
        )}

      {currentPage !== lastPage && (
        <button
          className={style["button"]}
          onClick={clickHandler}
          value={lastPage}
        >
          {lastPage}
        </button>
      )}
      {currentPage !== lastPage && (
        <button
          className={style["button"]}
          onClick={clickHandler}
          value={nextPage}
        >
          {">"}
        </button>
      )}
    </div>
  );
}
