'use client';

import useForm from '../../utils/customHooks/useForm';
import { useState } from 'react';
import style from './page.module.css';
import validationsCreateJobOffer from '@/utils/helpers/validationsCreateJobOffer';
import categories from '@/utils/helpers/categories';

const initialForm = {
  address: '',
  agreement: false,
  budget: 0,
  category: 'Selecciona una categoría',
  description: '',
  // estimated: 0,
  // tasks: [],
};

// let id = 0;

const post = async (data) => {
  const JSONdata = JSON.stringify(data);
  const endpoint = 'http://localhost:3001/project';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSONdata,
  };
  const response = await fetch(endpoint, options);
  return await response.json();
};

export default function CreateJobOffer() {
  const [visible, setVisible] = useState('invisible');
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
    if (visible === 'invisible') {
      setVisible('visible');
    } else {
      setVisible('invisible');
    }
  };

  const categorySelectionHandler = (event, category) => {
    event.preventDefault();
    event.stopPropagation();
    setForm({ ...form, category: category });
    setVisible('invisible');
  };
  /*
  // Task
  const addTaskHandler = (event) => {
    event.preventDefault();
    setErrors(validationsCreateJobOffer(form));
    if (!errors.task) {
      id++;
      setForm({
        ...form,
        [`task${id}`]: '',
        tasks: [...form.tasks, { id: id, description: '' }],
      });
    }
  };

  const deleteTaskHandler = (event, idTask) => {
    event.preventDefault();
    event.stopPropagation();
    delete form[`task${idTask}`];
    const taskDelete = form.tasks.filter((task) => task.id !== idTask);
    setForm({ ...form, tasks: [...taskDelete] });
  };

  const changeTaskHandler = (event, idTask) => {
    changeHandler(event);
    const taskUpdate = form.tasks.find((task) => task.id === idTask);
    taskUpdate.description = form[`task${idTask}`];
    setErrors(validationsCreateJobOffer(form));
  };
  */
  // Submit
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      setErrors(validationsCreateJobOffer(form));
      if (Object.keys(errors).length === 0) {
        await post({
          address: form.address,
          agreement: form.agreement,
          budget: parseInt(form.budget),
          title: form.category,
          description: form.description,
        });
        alert('Tu oferta fue publicada con éxito');
        router.back();
      }
    } catch (error) {
      setErrors({ ...errors, form: error.message });
    }
  };

  return (
    <form className={`container ${style['container']}`}>
      {/* Category */}
      <label htmlFor="category">Categoría:</label>
      <div className={`${style['select-menu']}`}>
        <div
          className={`${style['select-button']}`}
          onClick={categoryMenuHandler}
        >
          <span className={`${style['select-button-text']}`}>
            {form.category}
          </span>
          <img
            className={`${style['down-arrow']}`}
            src={'https://cdn-icons-png.flaticon.com/512/656/656979.png'}
            alt="Down arrow."
          />
        </div>
        <ul className={`${visible} ${style['categories-container']}`}>
          {categories.map((category, index) => {
            return (
              <li
                key={`category-${index}`}
                className={`${style['category-container']}`}
                onClick={(event) =>
                  categorySelectionHandler(event, category.category)
                }
              >
                <img
                  className={`icon-black-and-white ${style['category-image']}`}
                  src={category.image}
                  alt={category.name}
                  onClick={(event) =>
                    categorySelectionHandler(event, category.category)
                  }
                />
                <h4
                  className={`${style['category-name']}`}
                  onClick={(event) =>
                    categorySelectionHandler(event, category.category)
                  }
                >
                  {category.category}
                </h4>
                <p
                  className={`${style['category-description']}`}
                  onClick={(event) =>
                    categorySelectionHandler(event, category.category)
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
        <p className="error">{errors.category}</p>
      )}
      {/* Description */}
      <label htmlFor="description">Descripción:</label>
      <textarea
        id="description"
        name="description"
        placeholder={`Ej: Nos encontramos en búsqueda de un jardinero para casa ubicada en el barrio Palmares Valley, con disponibilidad para el sábado. El jardín cuenta con 80 m². Se busca personal que sea responsable, puntual y cumplidor.`}
        value={form.description}
        onChange={changeHandler}
        onBlur={changeHandler}
        autoComplete="off"
      />
      {errors && Object.keys(errors).length > 0 && errors.description && (
        <p className="error ">{errors.description}</p>
      )}

      {/* Task */}
      {/* {form.tasks.length > 0 && (
        <>
          {form.tasks.map((task, index) => {
            return (
              <div
                key={`task-${index}`}
                className={`${style['tasks-container']}`}
              >
                <div className={`${style['task-container']}`}>
                  <label className={`${style['task']}`} htmlFor="task">
                    Tarea
                  </label>
                  <button
                    className={`${style['button-circular']}`}
                    onClick={(event) => deleteTaskHandler(event, task.id)}
                  >
                    <span
                      className={`${style['button-delete']}`}
                      onClick={(event) => deleteTaskHandler(event, task.id)}
                    >
                      -
                    </span>
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Ej: Cortar el cesped"
                  name={`task${task.id}`}
                  value={form[`task${task.id}`]}
                  onChange={(event) => changeTaskHandler(event, task.id)}
                  onBlur={(event) => changeTaskHandler(event, task.id)}
                  autoComplete="off"
                />
              </div>
            );
          })}
        </>
      )}
      {errors && Object.keys(errors).length > 0 && errors.task && (
        <p className="error">{errors.task}</p>
      )}
      <div className={`${style['add-task-container']}`}>
        <button
          id="add-task"
          className={`${style['button-circular']}`}
          onClick={addTaskHandler}
        >
          <span className={`${style['button-add']}`}>+</span>
        </button>
        <label className={`${style['add-task']}`} htmlFor="add-task">
          Añadir tarea.
        </label>
      </div>
      {errors && Object.keys(errors).length > 0 && errors.tasks && (
        <p className="error">{errors.tasks}</p>
      )} */}

      {/* Estimated */}
      {/* <label htmlFor="estimate">Duración estimada:</label>
      <div className={`${style['estimate-container']}`}>
        <input
          id="estimate"
          className={`${style['input-estimate']} `}
          type="number"
          name="estimate"
          value={form.estimate}
          onChange={changeHandler}
          onBlur={changeHandler}
          autoComplete="off"
        />
        <p className={`${style['p-estimate']} `}>hs.</p>
      </div>
      {errors && Object.keys(errors).length > 0 && errors.estimate && (
        <p className="error">{errors.estimate}</p>
      )} */}

      {/* Budget */}
      <label htmlFor="budget">Remuneración:</label>
      <div className={`${style['budget-container']}`}>
        <input
          id="budget"
          className={`${style['input-budget']}`}
          type="number"
          name="budget"
          value={form.budget}
          onChange={changeHandler}
          onBlur={changeHandler}
          autoComplete="off"
        />

        {/* Agreement */}
        <div className={`${style['agreement-container']}`}>
          <label className={`${style['label-agreement']}`} htmlFor="agreement">
            ¿Es negociable?
          </label>
          <input
            id="agreement"
            className={`${style['input-agreement']}`}
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

      {/* Address */}
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
        <button className="button-purple" onClick={resetHandler}>
          Limpiar
        </button>
        <button className="button-green" onClick={submitHandler}>
          Publicar
        </button>
      </div>
    </form>
  );
}
