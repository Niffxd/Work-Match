import style from "./applications.module.css";

export default function ApplicationCard({
  category,
  image,
  description,
  status,
}) {
  return (
    <article className={`${style["card-container"]}`}>
      <img
        className={`${style["icon-category"]}`}
        src={image}
        alt='Icon category'
      />
      <h4 className={`${style["category"]}`}>{category}</h4>
      <p className={`${style["description"]}`}>{description}</p>
      <p
        className={`${style["status"]} ${
          status === "Abierto" && style["yellow-text"]
        } ${
          (status === "Finalizado" ||
            status === "Puntuar al empleador" ||
            status === "Puntuar al postulado" ||
            status === "Puntuar") &&
          style["green-text"]
        } ${status === "Match" && style["blue-text"]} ${
          status === "Rechazado" && style["red-text"]
        }`}
      >
        {status === "Abierto" && "Pendiente"}
        {status === "Match" && "Match!"}
        {status === "Rechazado" && "Rechazado"}
        {(status === "Finalizado" ||
          status === "Puntuar al empleador" ||
          status === "Puntuar al postulado" ||
          status === "Puntuar") &&
          "Finalizado"}
      </p>
    </article>
  );
}
