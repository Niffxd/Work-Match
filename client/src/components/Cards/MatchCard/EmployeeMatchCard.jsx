import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newMessage } from "../../../redux/actions/alertMessageActions";
import { confirmationOpen } from "../../../redux/actions/confirmationMessageActions";
import {
  getUserId,
  putRateUser,
  saveIdBid,
  updateApplicationStatus,
} from "../../../redux/actions/userActions";
import ConfirmationMessage from "../../ConfirmationMessage/ConfirmationMessage";
import style from "./matchCard.module.css";

export default function EmployeeMatchCard({ bid, category, owner, status }) {
  //variables
  const dispatch = useDispatch();
  const regexNumber = /^[0-5]+$/;
  //states
  const [rate, setRate] = useState("");
  const [errors, setErrors] = useState("");
  const [visible, setVisible] = useState("visible");
  const userState = useSelector((state) => state.user);
  const { user, idBid } = userState;

  // input change handler
  const changeHandler = (event) => {
    const { value } = event.target;
    setRate(value);
    if (
      !regexNumber.test(value) ||
      parseInt(value) < 0 ||
      parseInt(value) > 5
    ) {
      setErrors("La puntuación debe ser un número entero entre 0 y 5");
    } else {
      setErrors("");
    }
  };

  //change the status from accepted to completed
  const finalizedHandler = () => {
    try {
      dispatch(updateApplicationStatus({ id: idBid, status: "Puntuar" }));
      // setVisible("invisible");
      dispatch(getUserId(user.id));
    } catch (error) {
      console.log(error);
      dispatch(newMessage(error.message, "error"));
    }
  };

  //Open confirmation message
  const confirmationHandler = async (event) => {
    event.preventDefault();
    dispatch(saveIdBid(bid));
    dispatch(confirmationOpen());
  };

  //submit score and change the status from completed to closed
  const scoreHandler = (event, rate, id) => {
    event.preventDefault();
    if (
      !rate ||
      !regexNumber.test(rate) ||
      parseInt(rate) < 0 ||
      parseInt(rate) > 5
    ) {
      setErrors("La puntuación debe ser un número entero entre 0 y 5");
    } else {
      try {
        dispatch(putRateUser({ rate, id }));
        status === "Puntuar" &&
          dispatch(
            updateApplicationStatus({
              id: bid,
              status: "Puntuar al postulado",
            })
          );
        status === "Puntuar al empleador" &&
          dispatch(updateApplicationStatus({ id: bid, status: "Finalizado" }));
        dispatch(getUserId(user.id));
        setVisible("invisible");
        setRate("");
      } catch (error) {
        console.log(error);
        dispatch(newMessage(error.message, "error"));
      }
    }
  };

  return (
    <>
      <ConfirmationMessage
        message='¿Aceptas y confirmas que el trabajo ya fue finalizado en su totalidad?'
        handler={finalizedHandler}
      />
      <article className={`${style["card-container"]}`}>
        <div className={`${style["photo-container"]}`}>
          <img
            className={`${style["photo-profile"]}`}
            src={owner.image}
            alt='profile'
          />
        </div>
        <div className={`${style["category-name"]}`}>
          <p className={`${style["category"]}`}>{category}</p>
          <p className={`${style["name"]}`}>{owner.name}</p>
        </div>
        {status === "Match" && (
          <button
            className={`button-green ${visible} ${style["button"]}`}
            onClick={confirmationHandler}
          >
            Finalizar trabajo
          </button>
        )}
        {(status === "Puntuar" || status === "Puntuar al empleador") && (
          <>
            <form className={`${visible} ${style["form"]}`}>
              <input
                className={`${style["input"]}`}
                type='number'
                name='rate'
                placeholder='Del 0 al 5'
                min='0'
                max='5'
                value={rate}
                onChange={changeHandler}
                onBlur={changeHandler}
                autoComplete='off'
              />
              {errors && errors.length > 0 && (
                <p className={`error ${style["error"]}`}>{errors}</p>
              )}
              <button
                className={`button-green ${style["button"]}`}
                onClick={(event) => scoreHandler(event, rate, owner.id)}
              >
                Enviar puntuación
              </button>
            </form>
            <div
              className={`${visible === "visible" && style["invisible"]} ${
                style["button"]
              } ${style["finalized"]}`}
            >
              <img
                className={`icon-green ${style["check-icon"]}`}
                src='https://cdn-icons-png.flaticon.com/512/87/87932.png'
                alt='Check'
              />
              <p className={`${style["finalized-text"]}`}>Finalizado</p>
            </div>
          </>
        )}

        {(status === "Finalizado" || status === "Puntuar al postulado") && (
          <div className={`${style["button"]} ${style["finalized"]}`}>
            <img
              className={`icon-green ${style["check-icon"]}`}
              src='https://cdn-icons-png.flaticon.com/512/87/87932.png'
              alt='Check'
            />
            <p className={`${style["finalized-text"]}`}>Finalizado</p>
          </div>
        )}
      </article>
    </>
  );
}
