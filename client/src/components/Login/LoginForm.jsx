/** @format */

import style from "./login.module.css";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { regex } from "../../utils/helpers/validationLogin";
import carrusel1 from "../../assets/images/image-carousel-1.png";
import carrusel2 from "../../assets/images/image-carousel-2.png";
import carrusel3 from "../../assets/images/image-carousel-3.png";
import carrusel4 from "../../assets/images/image-carousel-4.png";
import logo from "../../assets/images/small_logo.png";
import { getAllUsers, getUserId } from "../../redux/actions/userActions";
import { newMessage } from "../../redux/actions/alertMessageActions";

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []); //eslint-disable-line

  const [actualUser, setActualUser] = useState({
    username: "",
    password: "",
  });

  // console.log(allUsers)

  //CONTROL DEL FORMULARIO//
  const {
    register,
    formState: { errors },
  } = useForm();

  const handleUsername = (event) => {
    setActualUser({
      ...actualUser,
      username: event.target.value,
    });
  };

  const handlePass = (event) => {
    setActualUser({
      ...actualUser,
      password: event.target.value,
    });
  };

  const handleCheckUser = async (event) => {
    event.preventDefault();
    if (actualUser.username === "" || actualUser.password === "") {
      dispatch(newMessage("Ingrese todos los campos.", "error"));
    } else {
      try {
        const tryUser = allUsers.filter(
          (user) => user.username === actualUser.username
        )[0];
        if (tryUser.password === actualUser.password) {
          dispatch(newMessage("Usuario logueado con éxito!", "success"));
          setTimeout(() => {
            dispatch(getUserId(tryUser.id));
            history.push("/");
          }, 2000);
        } else {
          dispatch(newMessage("Usuario o contraseña incorrectos.", "error"));
        }
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    //INTENTANDO UN CARRUSEL
    <div className={style[`container`]}>
      <section className={style["grid-cell"]}>
        <div className={style["carousel"]}>
          <article className={`${style["item-carousel"]}`}>
            <div className={style["image-carousel"]}>
              <img src={carrusel1} alt='Work Match' />
            </div>
            <h4 className={style["text-carousel"]}>
              Busca, encuentra y haz match con tu trabajo ideal.
            </h4>
          </article>
          <article className={`${style["item-carousel"]}`}>
            <div className={style["image-carousel"]}>
              <img src={carrusel2} alt='Work Match' />
            </div>
            <h4 className={style["text-carousel"]}>
              Gana dinero rápido con trabajos simples.
            </h4>
          </article>
          <article
            className={`${style["blurred-style"]} ${style["item-carousel"]}`}
          >
            <div className={style["image-carousel"]}>
              <img src={carrusel3} alt='Work Match' />
            </div>
            <h4 className={style["text-carousel"]}>
              Publica tus propias ofertas de trabajo.
            </h4>
          </article>
          <article
            className={`${style["blurred-style"]} ${style["item-carousel"]}`}
          >
            <div className={style["image-carousel"]}>
              <img src={carrusel4} alt='Work Match' />
            </div>
            <h4 className={style["text-carousel"]}>
              Elige a los mejores candidatos para realizar ese trabajo.
            </h4>
          </article>
        </div>
      </section>
      {/* //FORMULARIO */}
      <form className={style["login-form"]} noValidate>
        <img className={style["logo"]} src={logo} alt='Logo' />
        <div className={style["form-container"]}>
          <label>Usuario</label>
          <input
            type='email'
            placeholder='Usuario'
            {...register("email", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              minLength: { value: 2, message: "Minimo 2 caracteres" },
              pattern: {
                value: regex,
                message: "El formato no es correcto",
              },
            })}
            onChange={handleUsername}
          />
          {errors.email && <p className='error'>{errors.email.message}</p>}

          <label>Contraseña</label>
          <input
            type='password'
            placeholder='Contraseña'
            {...register("password", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              minLength: { value: 8, message: "Minimo 8 caracteres" },
            })}
            onChange={handlePass}
          />
          {errors.password && (
            <p className='error'>{errors.password.message}</p>
          )}
          <button className='button-green' onClick={handleCheckUser}>
            Ingresar
          </button>
        </div>
        <h5 className={style["options-container"]}>
          ¿No tienes cuenta? <Link to='/register'>Registrate</Link>
          <br />Ó ingresa como <Link to='/'>invitado</Link>
        </h5>
      </form>
    </div>
  );
}
