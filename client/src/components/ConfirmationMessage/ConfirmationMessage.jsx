import { useDispatch, useSelector } from "react-redux";
import { confirmationClose } from "../../redux/actions/confirmationMessageActions";

import style from "./confirmationMessage.module.css";

const ConfirmationMessage = ({ message, handler }) => {
  const dispatch = useDispatch(),
    confirmationState = useSelector((state) => state.confirmation),
    { confirmationMessage } = confirmationState;

  const cancelHandler = (event) => {
    event.preventDefault();
    dispatch(confirmationClose());
  };
  const acceptHandler = (event) => {
    event.preventDefault();
    handler();
    dispatch(confirmationClose());
  };
  return (
    <div className={`${style["container"]} ${style[confirmationMessage]}`}>
      <p className={`${style["message"]}`}>{message}</p>
      <div className='buttons-container'>
        <button className='button-red' onClick={cancelHandler}>
          Cancelar
        </button>
        <button className='button-green' onClick={acceptHandler}>
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default ConfirmationMessage;
