import style from "./applications.module.css";

export default function ApplicationCard({
  category,
  image,
  description,
  status,
}) {
  //   const categoryFound = categories.find((title) => title.category === category);
  return (
    <div>
      <h1>Tarjeta de postulación</h1>
    </div>
    // <article className={`${style['card-container']}`}>
    //   <img
    //     className={`${style['icon-category']}`}
    //     src={categoryFound.image}
    //     alt="Icon category"
    //   />
    //   <h4 className={`${style['category']}`}>{category}</h4>
    //   <p className={`${style['description']}`}>{description}</p>
    //   <p
    //     className={`${style['status']} ${
    //       status === 'Pendiente' && style['yellow-text']
    //     } ${
    //       (status === 'Finalizado' || status === 'Cerrado') &&
    //       style['green-text']
    //     } ${status === 'Aceptado' && style['blue-text']} ${
    //       status === 'Rechazado' && style['red-text']
    //     }`}
    //   >
    //     {status === 'Finalizado' || status === 'Cerrado'
    //       ? 'Finalizado'
    //       : status}
    //   </p>
    // </article>
  );
}
