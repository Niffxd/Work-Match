// Hay 3 TO DO en las líneas: 8, 10 y 151
'use client';

import useForm from '../../utils/customHooks/useForm';
import { useState } from 'react';
import style from './page.module.css';
import validationsCreateJobOffer from '@/utils/helpers/validationsCreateJobOffer';
// TO DO 1/3: Importar el array 'categories' de /utils/helpers/...

// TO DO 2/3: Eliminar esta constante: categories.
const categories = [
  {
    category: 'Limpieza',
    image: 'https://cdn-icons-png.flaticon.com/512/995/995016.png',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  },
  {
    category: 'Plomería',
    image: 'https://cdn-icons-png.flaticon.com/512/4635/4635163.png',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  },
  {
    category: 'Pintura',
    image: 'https://cdn-icons-png.flaticon.com/512/3162/3162611.png',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  },
  {
    category: 'Carpintería',
    image: 'https://cdn-icons-png.flaticon.com/512/4854/4854871.png',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  },
  {
    category: 'Jardinería',
    image: 'https://cdn-icons-png.flaticon.com/512/1518/1518914.png',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  },
];

const initialForm = {
  category: 'Selecciona una categoría',
  description: '',
  tasks: [],
  time: 0,
  remuneration: 0,
  negotiable: false,
  location: '',
};

let id = 0;

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
  // Submit
  const submitHandler = async (event) => {
    event.preventDefault();
    if (form.category === 'Selecciona una categoría') {
      setErrors({ ...errors, category: 'Por favor ingrese una categoría' });
    } else if (!form.description) {
      setErrors({
        ...errors,
        description: 'Por favor, ingrese una descripción.',
      });
    } else if (form.tasks.length === 0) {
      setErrors({ ...errors, tasks: 'Por favor, agregue al menos una tarea.' });
    } else if (form.tasks.length > 0) {
      for (let task of form.tasks) {
        if (!task.description) {
          setErrors({
            ...errors,
            task: 'Por favor, no deje tareas sin información.',
          });
        }
      }
    }
    if (!form.time || parseInt(form.time) === 0) {
      setErrors({
        ...errors,
        time: 'Por favor, ingresa el duración estimada del trabajo.',
      });
    } else if (parseInt(form.time) < 0 || parseInt(form.time) >= 8) {
      setErrors({
        ...errors,
        time: 'El tiempo de trabajo debe durar entre una y ocho horas.',
      });
    } else if (!form.remuneration || parseInt(form.remuneration) === 0) {
      setErrors({
        ...errors,
        remuneration: 'Por favor, ingresa la remuneración pretendida.',
      });
    } else if (!form.location) {
      setErrors({ ...errors, location: 'Por favor, ingresa tu ubicación.' });
    } else if (Object.keys(errors).length === 0) {
      // TO DO 3/3: Cambiar el alert por un fetch post que envie los datos del form
      // y redirija a la pagina de detalle de esta nueva oferta, o en su defectto, al home.
      alert(
        'se envia el formulario y se redirige al detalle de la oferta recientemente creada.'
      );
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
                  alt={category.category}
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

      {form.tasks.length > 0 && (
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
      )}
      {/* Time */}
      <label htmlFor="time">Duración estimada:</label>
      <div className={`${style['time-container']}`}>
        <input
          id="time"
          className={`${style['input-time']} `}
          type="number"
          name="time"
          value={form.time}
          onChange={changeHandler}
          onBlur={changeHandler}
          autoComplete="off"
        />
        <p className={`${style['p-time']} `}>hs.</p>
      </div>
      {errors && Object.keys(errors).length > 0 && errors.time && (
        <p className="error">{errors.time}</p>
      )}
      {/* Remuneration */}
      <label htmlFor="remuneration">Remuneración:</label>
      <div className={`${style['remuneration-container']}`}>
        <input
          id="remuneration"
          className={`${style['input-remuneration']}`}
          type="number"
          name="remuneration"
          value={form.remuneration}
          onChange={changeHandler}
          onBlur={changeHandler}
          autoComplete="off"
        />

        {/* Negotiable */}
        <div className={`${style['negotiable-container']}`}>
          <label
            className={`${style['label-negotiable']}`}
            htmlFor="negotiable"
          >
            ¿Es negociable?
          </label>
          <input
            id="negotiable"
            className={`${style['input-negotiable']}`}
            type="checkbox"
            name="negotiable"
            value={form.negotiable}
            onChange={checkedHandler}
          />
        </div>
      </div>
      {errors && Object.keys(errors).length > 0 && errors.remuneration && (
        <p className="error">{errors.remuneration}</p>
      )}
      {/* Location */}
      <label htmlFor="location">Ubicación</label>
      <input
        id="location"
        type="text"
        placeholder="Ej: Buenos Aires, Argentina"
        name="location"
        value={form.location}
        onChange={changeHandler}
        onBlur={changeHandler}
        autoComplete="off"
      />
      {errors && Object.keys(errors).length > 0 && errors.location && (
        <p className="error">{errors.location}</p>
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
