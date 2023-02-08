import { useState } from "react";
import { useSelector } from "react-redux";
import useForm from "../../utils/customHooks/useForm";
import validationsCreateJobOffer from "../../utils/helpers/validationsCreateJobOffer";
import style from "./formJobOffer.module.css";

export default function FormJobOffer({
  initialForm,
  submitHandler,
  closeHandler,
}) {
  //Variables
  const [visibleCategory, setVisibleCategory] = useState("invisible");
  const [visibleAddress, setVisibleAddress] = useState("invisible");
  const categoryState = useSelector((state) => state.categories);
  const { categories } = categoryState;
  const stateState = useSelector((state) => state.address);
  const { states } = stateState;

  const {
    form,
    errors,
    setErrors,
    setForm,
    resetHandler,
    changeHandler,
    checkedHandler,
  } = useForm(initialForm, validationsCreateJobOffer);

  // Category
  const categoryMenuHandler = (event) => {
    event.preventDefault();
    if (visibleCategory === "invisible") {
      setVisibleCategory("visible");
    } else {
      setVisibleCategory("invisible");
    }
  };
  const categorySelectionHandler = (event, category, categoryId) => {
    event.preventDefault();
    event.stopPropagation();
    setForm({ ...form, category, categoryId });
    setVisibleCategory("invisible");
  };
  //Address

  const addressMenuHandler = (event) => {
    event.preventDefault();
    if (visibleAddress === "invisible") {
      setVisibleAddress("visible");
    } else {
      setVisibleAddress("invisible");
    }
  };
  const addressSelectionHandler = (event, address, addressId) => {
    event.preventDefault();
    event.stopPropagation();
    setForm({ ...form, address, addressId });
    setVisibleAddress("invisible");
  };

  return (
    <form className={`${style["form"]}`}>
      {/* Category */}
      <label htmlFor='category'>Categoría:</label>
      <div className={`${style["select-menu"]}`}>
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
            alt='Down arrow.'
          />
        </div>
        <ul className={`${visibleCategory} ${style["categories-container"]}`}>
          {categories.map((category, index) => {
            return (
              <li
                key={`category-${index}`}
                className={`${style["category-container"]}`}
                onClick={(event) =>
                  categorySelectionHandler(event, category.name, category.id)
                }
              >
                <img
                  className={`icon-black-and-white ${style["category-image"]}`}
                  src={category.image}
                  alt={category.name}
                  onClick={(event) =>
                    categorySelectionHandler(event, category.name, category.id)
                  }
                />
                <h4
                  className={`${style["category-name"]}`}
                  onClick={(event) =>
                    categorySelectionHandler(event, category.name, category.id)
                  }
                >
                  {category.name}
                </h4>
                <p
                  className={`${style["category-description"]}`}
                  onClick={(event) =>
                    categorySelectionHandler(event, category.name, category.id)
                  }
                >
                  {category.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      {errors && Object.keys(errors).length > 0 && errors.category && (
        <p className='error'>{errors.category}</p>
      )}

      {/* Description */}
      <label htmlFor='description'>Descripción:</label>
      <textarea
        id='description'
        name='description'
        placeholder={`Ej: Nos encontramos en búsqueda de un jardinero para casa ubicada en el barrio Palmares Valley, con disponibilidad para el sábado. El jardín cuenta con 80 m². Se busca personal que sea responsable, puntual y cumplidor.`}
        value={form.description}
        onChange={changeHandler}
        onBlur={changeHandler}
        autoComplete='off'
      />
      {errors && Object.keys(errors).length > 0 && errors.description && (
        <p className='error '>{errors.description}</p>
      )}

      {/* Extra information */}
      <label htmlFor='information'>{`Detalles (opcional):`}</label>
      <input
        id='information'
        type='text'
        name='information'
        placeholder='Sábado 22, 11:00hs. Calle 123, local B.'
        value={form.information}
        onChange={changeHandler}
        onBlur={changeHandler}
        autoComplete='off'
      />
      {errors && Object.keys(errors).length > 0 && errors.information && (
        <p className='error '>{errors.information}</p>
      )}

      {/* Estimated */}
      <label htmlFor='estimated'>{`Duración estimada (opcional):`}</label>
      <div className={`${style["estimated-container"]}`}>
        <input
          id='estimated'
          className={`${style["input-estimated"]} `}
          type='number'
          name='estimated'
          placeholder='horas'
          value={form.estimated}
          onChange={changeHandler}
          onBlur={changeHandler}
          min='0'
          autoComplete='off'
        />
        <p className={`${style["p-estimated"]} `}>hs.</p>
      </div>
      {errors && Object.keys(errors).length > 0 && errors.estimated && (
        <p className='error'>{errors.estimated}</p>
      )}

      {/* budget */}
      <label htmlFor='budget'>Remuneración:</label>
      <div className={`${style["budget-container"]}`}>
        <input
          id='budget'
          className={`${style["input-budget"]}`}
          type='number'
          name='budget'
          placeholder='ARS'
          min='0'
          value={form.budget}
          onChange={changeHandler}
          onBlur={changeHandler}
          autoComplete='off'
        />

        {/* agreement */}
        <div className={`${style["agreement-container"]}`}>
          <label className={`${style["label-agreement"]}`} htmlFor='agreement'>
            ¿Es negociable?
          </label>
          <input
            id='agreement'
            className={`${style["input-agreement"]}`}
            type='checkbox'
            name='agreement'
            value={form.agreement}
            onChange={checkedHandler}
          />
        </div>
      </div>
      {errors && Object.keys(errors).length > 0 && errors.budget && (
        <p className='error'>{errors.budget}</p>
      )}

      {/* address */}
      <label htmlFor='address'>Dirección:</label>
      <div className={`${style["select-menu"]}`}>
        <div
          className={`${style["select-button"]}`}
          onClick={addressMenuHandler}
        >
          <span className={`${style["select-button-text"]}`}>
            {form.address}
          </span>
          <img
            className={`${style["down-arrow"]}`}
            src={"https://cdn-icons-png.flaticon.com/512/656/656979.png"}
            alt='Down arrow.'
          />
        </div>
        <ul className={`${visibleAddress} ${style["address-container"]}`}>
          {states.map((address, index) => {
            return (
              <li
                key={`address-${index}`}
                className={`${style["address-name"]}`}
                onClick={(event) =>
                  addressSelectionHandler(event, address.name, address.id)
                }
              >
                {address.name}
              </li>
            );
          })}
        </ul>
      </div>
      {errors && Object.keys(errors).length > 0 && errors.address && (
        <p className='error'>{errors.address}</p>
      )}
      {errors && Object.keys(errors).length > 0 && errors.form && (
        <p className='error'>{errors.form}</p>
      )}
      <div className='buttons-container'>
        <button
          className='button-purple'
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
          className='button-green'
          onClick={(event) => {
            submitHandler(event, form, errors, setErrors);
            resetHandler(event);
          }}
        >
          Publicar
        </button>
      </div>
    </form>
  );
}
