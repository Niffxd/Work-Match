import { useState } from "react";
// import FormJobOffer from '../FormJobOffer/FormJobOffer';
import style from "./publicationCard.module.css";

export default function PublicationCard({ category, description }) {
  //   const [visible, setVisible] = useState('card-visible');
  //   //category image
  //   const categoryFound = categories.find((title) => title.category === category);

  //   //initial form
  //   const initialForm = {
  //     agreement: false,
  //     budget: 0,
  //     category: category,
  //     description: description,
  //     // estimated: 0,
  //     // tasks: [],
  //   };

  //   //Edit handler
  //   const editHandler = (event) => {
  //     event.preventDefault();
  //     setVisible('form-visible');
  //   };

  //   //Delete handler
  //   const deleteHandler = (event) => {
  //     event.preventDefault();
  //     const confirmation = window.confirm(
  //       '¿Estás seguro de querer borrar esta publicación?'
  //     );
  //     if (confirmation) {
  //       //TO DO 1/2: Eliminar publicación. Falta la ruta
  //       alert('Se eliminó la publicación');
  //     }
  //   };

  //   // Close handler
  //   const closeHandler = (event) => {
  //     event.preventDefault();
  //     setVisible('card-visible');
  //   };
  //   // Submit handler
  //   const submitHandler = async (event, form, errors, setErrors) => {
  //     event.preventDefault();
  //     try {
  //       setErrors(validationsCreateJobOffer(form));
  //       if (Object.keys(errors).length === 0) {
  //         //TO DO 2/2: Actualizar publicación. Falta la ruta
  //         alert('Tu publicacion fue actualizada con éxito');
  //         setVisible('card-visible');
  //       }
  //     } catch (error) {
  //       setErrors({ ...errors, form: error.message });
  //     }
  //   };
  return (
    <>
      <div>
        <h1>tarjeta publicacion</h1>
      </div>
      {/* <div
        className={`${visible === 'card-visible' && 'invisible'} ${
          style['form-container']
        }`}
      >
        <FormJobOffer
          initialForm={initialForm}
          submitHandler={submitHandler}
          closeHandler={closeHandler}
        />
      </div>
      <article
        className={`${visible === 'form-visible' && style['invisible']} ${
          style['card-container']
        }`}
      >
        <Image
          className={`${style['icon-category']}`}
          src={categoryFound.image}
          alt="Icon category"
        />
        <h4 className={`${style['category']}`}>{category}</h4>
        <p className={`${style['description']}`}>{description}</p>
        <div className={`buttons-container ${style['actions']}`}>
          <button className="button-green" onClick={editHandler}>
            Editar
          </button>
          <button className="button-red" onClick={deleteHandler}>
            Eliminar
          </button>
        </div>
      </article> */}
    </>
  );
}
