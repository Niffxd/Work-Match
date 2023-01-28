'use client';

import { useState } from 'react';
import style from './matchCard.module.css';

export default function MatchCard({ id, image, name, category, status }) {
  const [rate, setRate] = useState('');
  const [errors, setErrors] = useState('');
  const regexNumber = /^[0-9]+$/;

  // input change handler
  const changeHandler = (event) => {
    const { value } = event.target;
    setRate(value);
    if (
      !regexNumber.test(value) ||
      parseInt(value) < 0 ||
      parseInt(value) > 5
    ) {
      console.log(value);
      setErrors('La puntuación debe ser un número entero entre 0 y 5');
    } else {
      setErrors('');
    }
  };

  //change the status from accepted to completed
  const acceptedHandler = () => {
    //TO DO 1/2: Cambiar el estado de aceptado a finalizado
    alert('El trabajo fue finalizado');
  };

  //submit score and change the status from completed to closed
  const finalizedHandler = (event, name) => {
    event.preventDefault();
    //TO DO 2/2: Enviar puntuación
    alert(`Deja una puntuación a ${name}`);
  };
  return (
    <article className={`${style['card-container']}`}>
      <div className={`${style['photo-container']}`}>
        <img
          className={`${style['photo-profile']}`}
          src={image}
          alt="Photo profile"
        />
      </div>
      <div className={`${style['category-name']}`}>
        <p className={`${style['category']}`}>{category}</p>
        <p className={`${style['name']}`}>{name}</p>
      </div>
      {status === 'Aceptado' && (
        <button
          className={`button-green ${style['button']}`}
          onClick={acceptedHandler}
        >
          Finalizar trabajo
        </button>
      )}
      {status === 'Finalizado' && (
        <form className={`${style['form']}`}>
          <input
            type="number"
            name="rate"
            placeholder="Del 0 al 5"
            min="0"
            max="5"
            value={rate}
            onChange={changeHandler}
            onBlur={changeHandler}
            autoComplete="off"
          />
          {errors && errors.length > 0 && <p className="error">{errors}</p>}
          <button
            className={`button-green ${style['button']}`}
            onClick={(event) => finalizedHandler(event, name)}
          >
            Enviar puntuación
          </button>
        </form>
      )}
      {status === 'Cerrado' && (
        <div className={`${style['button']} ${style['finalized']}`}>
          <img
            className={`icon-green ${style['check-icon']}`}
            src="https://cdn-icons-png.flaticon.com/512/87/87932.png"
            alt="Check"
          />
          <p className={`${style['finalized-text']}`}>Finalizado</p>
        </div>
      )}
    </article>
  );
}
