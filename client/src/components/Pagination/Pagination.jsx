'use client';

import { useRef, useState } from 'react';
import style from './pagination.module.css';

export default function Pagination({ currentPage, setCurrentPage }) {
  const [inputValue, setInputValue] = useState(currentPage);
  const inputName = useRef(null);

  const nextHandler = () => {
    setCurrentPage(parseInt(currentPage) + 1);
    setInputValue(parseInt(inputValue) + 1);
  };
  const enterHandler = (event) => {
    if (event.key === 'Enter') {
      setCurrentPage(parseInt(inputValue));
      inputName.current.blur();
    }
  };
  const changeHandler = (event) => {
    setInputValue(parseInt(event.target.value));
  };
  const prevHandler = () => {
    setCurrentPage(parseInt(currentPage) - 1);
    setInputValue(parseInt(inputValue) - 1);
  };

  return (
    <div className={`${style['pagination']}`}>
      {currentPage > 1 && (
        <button
          className={`${style['button-pagination']}`}
          onClick={prevHandler}
        >
          {'<'}
        </button>
      )}
      <input
        className={`${style['input-pagination']}`}
        type="number"
        value={inputValue}
        onChange={changeHandler}
        onKeyDown={enterHandler}
        ref={inputName}
      />
      <button className={`${style['button-pagination']}`} onClick={nextHandler}>
        {'>'}
      </button>
    </div>
  );
}
