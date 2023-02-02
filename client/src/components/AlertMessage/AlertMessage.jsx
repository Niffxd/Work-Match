import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hiddenMessage } from "../../redux/actions/alertMessageActions";

import style from "./alertMessage.module.css";

const AlertMessage = () => {
  const dispatch = useDispatch(),
    alertState = useSelector((state) => state.alert),
    { success, error, className } = alertState;

  useEffect(() => {
    setTimeout(function () {
      dispatch(hiddenMessage());
    }, 5000);
  }, [className]);

  return (
    <div className={`${style["container"]} ${style[className]}`}>
      {success && (
        <p className={style["success"]}>
          <span className={style["success-icon"]}>✓</span> {success}
        </p>
      )}
      {error && (
        <p className={style["error"]}>
          <span className={style["error-icon"]}>⨯</span> {error}
        </p>
      )}
    </div>
  );
};
export default AlertMessage;
