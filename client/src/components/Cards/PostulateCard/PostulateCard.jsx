// import { useState } from "react";
// import style from "./postulateCard.module.css";

export default function PostulateCard({ name, image, category, biography }) {
  //   const [moreInformation, setMoreInformation] = useState('none');

  //   //show full biography
  //   const moreInformationHandler = (event) => {
  //     event.preventDefault();
  //     event.stopPropagation();
  //     if (moreInformation === 'none') {
  //       setMoreInformation('more-information');
  //     } else {
  //       setMoreInformation('none');
  //     }
  //   };

  //   //change status to rejected
  //   const rejectedHandler = (event) => {
  //     event.preventDefault();
  //     event.stopPropagation();
  //     // TO DO 1/2: Cambiar el estado a rechazado
  //     alert('se descarta el candidato');
  //   };

  //   //change status to accepted
  //   const matchHandler = (event) => {
  //     event.preventDefault();
  //     event.stopPropagation();
  //     // TO DO 2/2: Cambiar el estado a aceptado
  //     alert('se acepta el candidato');
  //   };
  return (
    <div>
      <h1>Tarjeta postulantes</h1>
    </div>
    // <article
    //   className={`${style['card-container']}`}
    //   onClick={moreInformationHandler}
    // >
    //   <div className={`${style['photo-container']}`}>
    //     <img
    //       className={`${style['photo-profile']}`}
    //       src={image}
    //       alt="Photo profile"
    //     />
    //   </div>
    //   <h4 className={`${style['category']}`}>{category}</h4>
    //   <h4 className={`${style['name']}`}>{name}</h4>
    //   <p className={`${style['biography']} ${style[moreInformation]}`}>
    //     {biography}
    //   </p>
    //   <div className={`buttons-container ${style['actions']}`}>
    //     <button className="button-red" onClick={rejectedHandler}>
    //       Descartar
    //     </button>
    //     <button className="button-green" onClick={matchHandler}>
    //       Match!
    //     </button>
    //   </div>
    // </article>
  );
}
