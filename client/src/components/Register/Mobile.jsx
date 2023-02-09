import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SignInButton } from "../Login/SignInbutton.jsx";
import { useDispatch, useSelector } from "react-redux";
import AddPhoto from "../AddPhoto/AddPhoto.jsx";
import NextButton from "./NextButton.jsx";
import user from "../../assets/images/user.png";
import style from "./register.module.css";
import { getAllUsers } from "../../redux/actions/userActions.js";

export default function Mobile() {
  const dispatch = useDispatch()
  const [ image, setImage ] = useState(user)
  const [validateEmail, setValidateEmail] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);
  const [validate, setValidate] = useState(false);

  const { allUsers } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getAllUsers)
  }, [allUsers]) //eslint-disable-line

  const [preForm, setPreform] = useState({
    email: "",
    password: "",
    image: 'https://cdn-icons-png.flaticon.com/512/64/64572.png'
  });

  const handleNameChange = (event) => {
    const emailRegEx = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    setPreform({ ...preForm, email: event.target.value });
    if (event.target.value.length > 0
      && emailRegEx.test(event.target.value)) setValidateEmail(true);
    else setValidateEmail(false);

    if (validateEmail && validatePassword) setValidate(true);
    else setValidate(false);
  };

  const handleLastnameChange = (event) => {
    setPreform({ ...preForm, password: event.target.value });
    if (event.target.value.length >= 7) setValidatePassword(true);
    else setValidatePassword(false);

    if (validateEmail && validatePassword) setValidate(true);
    else setValidate(false);
  };

  const uploadPhoto = () => {
    setPreform({
      ...preForm,
      image
    })
    document.getElementById('modalProfile').close()
    document.getElementById('modalProfile').classList.remove('showModal')
  }

  return (
    <div className={`${style["mobile"]}`}>
      <div className={`${style["add-photo-container"]}`}>
        <div className={`${style["photo-container"]}`}>
          <img
            className={`${style["photo-profile"]}`}
            src={image}
            width={100}
            height={100}
            alt="profile"
          />
        </div>
        <AddPhoto uploadPhoto={uploadPhoto} image={image} setImage={setImage} defaultImage={user}/>
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
      <SignInButton/>
    </div>
  );
}
