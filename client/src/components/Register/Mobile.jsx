import { Link } from "react-router-dom";
import { useState } from "react";
import NextButton from "./NextButton.jsx";
import AddButton from "./AddButton.jsx";
import user from "../../assets/images/user.png";
import style from "./register.module.css";

export default function Mobile() {
  const [validateEmail, setValidateEmail] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);
  const [validate, setValidate] = useState(false);

  const [preForm, setPreform] = useState({
    email: "",
    password: "",
  });

  const handleNameChange = (event) => {
    setPreform({ ...preForm, email: event.target.value });
    if (event.target.value.length > 0) setValidateEmail(true);
    else setValidateEmail(false);

    if (validateEmail && validatePassword) setValidate(true);
    else setValidate(false);
  };

  const handleLastnameChange = (event) => {
    setPreform({ ...preForm, password: event.target.value });
    if (event.target.value.length > 0) setValidatePassword(true);
    else setValidatePassword(false);

    if (validateEmail && validatePassword) setValidate(true);
    else setValidate(false);
  };

  return (
    <div className={`${style["mobile"]}`}>
      <div className={`${style["add-photo-container"]}`}>
        <div className={`${style["photo-container"]}`}>
          <img
            className={`${style["photo-profile"]}`}
            src={user}
            width={100}
            height={100}
            alt="profile"
          />
        </div>
        <AddButton />
      </div>
      <div className={`${style["info"]}`}>
        <label htmlFor="email">Email:</label>
        <input name="email" type="email" onChange={handleNameChange} />
        <label htmlFor="password">Contraseña:</label>
        <input
          name="password"
          type="password"
          onChange={handleLastnameChange}
        />
        <NextButton validate={validate} preForm={preForm} />
        <div className={`${style["login"]}`}>
          <p>¿Ya tienes cuenta?</p>
          <Link to="/login">Inicia sesión</Link>
        </div>
      </div>
    </div>
  );
}
