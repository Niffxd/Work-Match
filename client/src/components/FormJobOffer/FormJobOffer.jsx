import React, { useState } from "react";
import style from "./formJobOffer.module.css";
import categories from "./helpers/categories";
import validationsCreateJobOffer from "./helpers/validationsCreateJobOffer";
import useForm from "./customHooks/useForm";

const FormJobOffer = ({ initialForm, submitHandler, closeHandler }) => {
  //Variables
  const [visible, setVisible] = useState("invisible");
  const {
    form,
    errors,
    setErrors,
    setForm,
    resetHandler,
    changeHandler,
    checkedHandler,
  } = useForm(initialForm, validationsCreateJobOffer);

  const categoryMenuHandler = (event) => {
    event.preventDefault();
    if (visible === "invisible") {
      setVisible("visible");
    } else {
      setVisible("invisible");
    }
  };

  const categorySelectionHandler = (event, category) => {
    event.preventDefault();
    event.stopPropagation();
    setForm({ ...form, category: category });
    setVisible("invisible");
  };

  return (
    <form className={style.form}>
      <label htmlFor="category">Categoría:</label>
      <div>
        <div
          className={`${style["select-button"]}`}
          onClick={categoryMenuHandler}
        >
          <span className={`${style["select-button-text"]}`}>
            {form.category}
          </span>
          <img
            className={`${style["down-arrow"]}`}
            src={"https://cdn-icons-png.flaticon.com/512/656/656979.png"}
            alt="Down arrow."
          />
        </div>
        <ul className={`${visible} ${style["categories-container"]}`}>
          {categories.map((category, index) => {
            return (
              <li
                key={`category-${index}`}
                className={`${style["category-container"]}`}
                onClick={(event) => {
                  categorySelectionHandler(event, category.id);
                }}
              >
                <img
                  className={`icon-black-and-white ${style["category-image"]}`}
                  src={category.image}
                  alt={category.name}
                  onClick={(event) => {
                    categorySelectionHandler(event, category.category);
                  }}
                />
                <h4
                  className={`${style["category-name"]}`}
                  onClick={(event) => {
                    categorySelectionHandler(event, category.category);
                  }}
                >
                  {category.category}
                </h4>
                <p
                  className={`${style["sategory-description"]}`}
                  onClick={(event) => {
                    categorySelectionHandler(event, category.category);
                  }}
                >
                  {category.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      {errors && Object.keys(errors).length > 0 && errors.category && (
        <p className="error">{errors.category}</p>
      )}

      <label htmlFor="description">Descripción:</label>
      <textarea
        name="description"
        id="description"
        placeholder="Ej: Nos encontramos en búsqueda de un jardinero para casa ubicada en el barrio Palmares Valley, con disponibilidad para el sábado. El jardín cuenta con 80 m². Se busca personal que sea responsable, puntual y cumplidor."
        value={form.description}
        onChange={changeHandler}
        onBlur={changeHandler}
        autoComplete="off"
      ></textarea>
      {errors && Object.keys(errors).length > 0 && errors.description && (
        <p className="error">{errors.description}</p>
      )}
      <label htmlFor="budget">Remuneración:</label>
      <div className={`${style["budget-container"]}`}>
        <input
          id="budget"
          name="budget"
          className={`${style["input-budget"]}`}
          value={form.budget}
          onChange={changeHandler}
          onBlur={changeHandler}
          autoComplete="off"
          type="number"
        />
        <div className={`${style["agreement-container"]}`}>
          <label className={`${style["label-agreement"]}`} htmlFor="agreement">
            ¿Es negociable?
          </label>
          <input
            id="agreement"
            className={`${style["input-agreement"]}`}
            type="checkbox"
            name="agreement"
            value={form.agreement}
            onChange={checkedHandler}
          />
        </div>
      </div>
      {errors && Object.keys(errors).length > 0 && errors.budget && (
        <p className="error">{errors.budget}</p>
      )}
      {/* address */}
      <label htmlFor="address">Ubicación</label>
      <input
        id="address"
        type="text"
        placeholder="Ej: Buenos Aires, Argentina"
        name="address"
        value={form.address}
        onChange={changeHandler}
        onBlur={changeHandler}
        autoComplete="off"
      />
      {errors && Object.keys(errors).length > 0 && errors.address && (
        <p className="error">{errors.address}</p>
      )}
      {errors && Object.keys(errors).length > 0 && errors.form && (
        <p className="error">{errors.form}</p>
      )}
      <div className="buttons-container">
        <button
          className="button-purple"
          onClick={
            closeHandler
              ? (event) => {
                  resetHandler(event);
                  closeHandler(event);
                }
              : resetHandler
          }
        >
          Limpiar
        </button>
        <button
          className="button-green"
          onClick={(event) => submitHandler(event, form, errors, setErrors)}
        >
          Publicar
        </button>
      </div>
    </form>
  );
};

export default FormJobOffer;
