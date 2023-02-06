import { useHistory } from "react-router-dom";

import style from "./error404.module.css";

export default function Error404() {
  const history = useHistory();

  const homeHandler = (event) => {
    event.preventDefault();
    history.push(`/`);
  };
  return (
    <article className={`${style["container"]}`}>
      <img
        className={`${style["error-image"]}`}
        src='/small_logo.png'
        alt='logo-header'
      />
      <section className={`${style["error-container"]}`}>
        <h1 className={`${style["error-h1"]}`}>Error 404</h1>
        <h3 className={`${style["error-h3"]}`}>
          Vaya... ¡Página no encontrada!
        </h3>
        <p className={`${style["error-p"]}`}>La página que buscas no existe.</p>
        <button
          className={`button-green ${style["error-button"]}`}
          onClick={homeHandler}
        >
          HOME
        </button>
      </section>
    </article>
  );
}
