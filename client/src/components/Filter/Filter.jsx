import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  currentPg,
  filteredProjects,
  filters,
} from "../../redux/actions/projectActions";
import useForm from "../../utils/customHooks/useForm";
import style from "./filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState("invisible");
  const categoriesState = useSelector((state) => state.categories);
  const { categories } = categoriesState;
  const stateState = useSelector((state) => state.address);
  const { states } = stateState;
  const projectState = useSelector((state) => state.project);
  const { activeFilters } = projectState;
  const { form, setForm, changeHandler } = useForm(activeFilters, () => {});

  const menuHandler = (event) => {
    event.preventDefault();
    if (menu === "invisible") {
      setMenu("visible");
    } else {
      setMenu("invisible");
    }
  };

  const filterHandler = async (event) => {
    event.preventDefault();
    await dispatch(filters(form));
    dispatch(filteredProjects());
    dispatch(currentPg(1));
    setMenu("invisible");
  };

  const clearHandler = async (event) => {
    event.preventDefault();
    setForm({
      address: false,
      availability: "available",
      budget: 0,
      category: false,
      order: "newest",
      search: "",
    });
    await dispatch(
      filters({
        address: false,
        availability: "available",
        budget: 0,
        category: false,
        order: "newest",
        search: "",
      })
    );
    dispatch(filteredProjects());
    setMenu("invisible");
  };

  return (
    <form>
      {/* Filter Navigation */}
      <nav className={`${style["filter-navigation"]}`}>
        {/* Seacrh Input */}
        <div className={`${style["search-container"]}`}>
          <input
            className={`${style["search-input"]}`}
            type='text'
            placeholder='buscar...'
            name='search'
            value={form.search}
            onChange={changeHandler}
            onBlur={changeHandler}
          />
          <img
            className={`icon-dark ${style["search-icon"]}`}
            src='https://cdn-icons-png.flaticon.com/512/2618/2618254.png'
            alt='search'
            onClick={filterHandler}
          />
          {(form.availability !== "available" ||
            form.budget !== 0 ||
            form.category !== false ||
            form.order !== "newest" ||
            form.search !== "" ||
            form.address !== false) && (
            <img
              className={`icon-dark ${style["clear-icon"]}`}
              src='https://cdn-icons-png.flaticon.com/512/3580/3580291.png'
              alt='clear'
              onClick={clearHandler}
            />
          )}
        </div>
        {/* Others filters icon */}
        <div className={`${style["icon-container"]}`}>
          <img
            className={`icon-dark ${style["filter-icon"]}`}
            src='https://cdn-icons-png.flaticon.com/512/4502/4502383.png'
            alt='filter'
            onClick={menuHandler}
          />
        </div>
      </nav>
      {/* Others filters container */}
      <div className={`${menu} ${style["filter-container"]}`}>
        {/* Order */}
        <details className={`${style["details"]}`}>
          <summary className={`${style["summary"]}`}>Orden</summary>
          <div className={`${style["filter-item"]}`}>
            {/* A-Z */}
            <div className={`${style["options-radio"]}`}>
              <input
                className={`${style["input-radio"]}`}
                type='radio'
                id='a-z'
                name='order'
                value='a-z'
                checked={form.order === "a-z" ? true : false}
                onChange={changeHandler}
              />
              <label className={`${style["label-radio"]}`} htmlFor='a-z'>
                A - Z
              </label>
            </div>
            {/* Z-A */}
            <div className={`${style["options-radio"]}`}>
              <input
                className={`${style["input-radio"]}`}
                type='radio'
                id='z-a'
                name='order'
                value='z-a'
                checked={form.order === "z-a" ? true : false}
                onChange={changeHandler}
              />
              <label className={`${style["label-radio"]}`} htmlFor='z-a'>
                Z - A
              </label>
            </div>
            {/* Newest */}
            <div className={`${style["options-radio"]}`}>
              <input
                className={`${style["input-radio"]}`}
                type='radio'
                id='newest'
                name='order'
                value='newest'
                checked={form.order === "newest" ? true : false}
                onChange={changeHandler}
              />
              <label className={`${style["label-radio"]}`} htmlFor='newest'>
                Más recientes
              </label>
            </div>
            {/* Oldest */}
            <div className={`${style["options-radio"]}`}>
              <input
                className={`${style["input-radio"]}`}
                type='radio'
                id='oldest'
                name='order'
                value='oldest'
                checked={form.order === "oldest" ? true : false}
                onChange={changeHandler}
              />
              <label className={`${style["label-radio"]}`} htmlFor='oldest'>
                Más antiguos
              </label>
            </div>
          </div>
        </details>
        {/* Availability */}
        <details className={`${style["details"]}`}>
          <summary className={`${style["summary"]}`}>Disponibilidad</summary>
          <div className={`${style["filter-item"]}`}>
            {/* Available */}
            <div className={`${style["options-radio"]}`}>
              <input
                className={`${style["input-radio"]}`}
                type='radio'
                id='available'
                name='availability'
                value='available'
                checked={form.availability === "available" ? true : false}
                onChange={changeHandler}
              />
              <label className={`${style["label-radio"]}`} htmlFor='available'>
                Ofertas disponibles
              </label>
            </div>
            {/* Not available*/}
            <div className={`${style["options-radio"]}`}>
              <input
                className={`${style["input-radio"]}`}
                type='radio'
                id='not-available'
                name='availability'
                value='not-available'
                checked={form.availability === "not-available" ? true : false}
                onChange={changeHandler}
              />
              <label
                className={`${style["label-radio"]}`}
                htmlFor='not-available'
              >
                Ofertas no disponibles
              </label>
            </div>
          </div>
        </details>
        {/* Category */}
        <details className={`${style["details"]}`}>
          <summary className={`${style["summary"]}`}>Categorias</summary>
          <div className={`${style["filter-item"]}`}>
            {categories.map((category) => (
              <div
                key={`category-${category.id}`}
                className={`${style["options-radio"]}`}
              >
                <input
                  className={`${style["input-radio"]}`}
                  type='radio'
                  id={category.name}
                  name='category'
                  value={category.id}
                  onChange={changeHandler}
                />
                <label
                  className={`${style["label-radio"]}`}
                  htmlFor={category.name}
                >
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        </details>
        {/* Address */}
        <details className={`${style["details"]}`}>
          <summary className={`${style["summary"]}`}>Ubicación</summary>
          <div className={`${style["filter-item"]}`}>
            {states.map((state) => (
              <div
                key={`address-${state.id}`}
                className={`${style["options-radio"]}`}
              >
                <input
                  className={`${style["input-radio"]}`}
                  type='radio'
                  id={state.name}
                  name='address'
                  value={state.id}
                  onChange={changeHandler}
                />
                <label
                  className={`${style["label-radio"]}`}
                  htmlFor={state.name}
                >
                  {state.name}
                </label>
              </div>
            ))}
          </div>
        </details>
        {/* Budget */}
        <details className={`${style["details"]}`}>
          <summary className={`${style["summary"]}`}>
            Remuneración mínima
          </summary>
          <div className={`${style["filter-item"]}`}>
            <div className={`${style["options"]}`}>
              <input
                className={`${style["input-number"]}`}
                type='number'
                id='budget'
                name='budget'
                value={form.budget}
                placeholder='Ej: 5.000'
                onChange={changeHandler}
                onBlur={changeHandler}
              />
            </div>
          </div>
        </details>
        {/* Button */}
        <button onClick={filterHandler} className='button-green'>
          Aplicar filtros
        </button>
      </div>
    </form>
  );
}
