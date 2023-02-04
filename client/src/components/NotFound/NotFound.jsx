import style from "./notFound.module.css";
export default function NotFound({ message }) {
  return (
    <div className={`${style["not-found-container"]}`}>
      <img
        className={`${style["not-found-image"]}`}
        src='https://cdn-icons-png.flaticon.com/512/6195/6195678.png'
        alt='Not found'
      />
      <h1 className={`${style["not-found-message"]}`}>{message}</h1>
    </div>
  );
}
