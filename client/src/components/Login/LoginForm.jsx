/** @format */

import styles from "./login.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { regex } from "../../utils/helpers/validationLogin";
import carrusel1 from "../../assets/images/imagecarousel1.png";
import carrusel2 from "../../assets/images/imagecarousel2.png";
import carrusel3 from "../../assets/images/imagecarrousel3.png";
import carrusel4 from "../../assets/images/imagecarousel4.png";
import logo from '../../assets/images/small_logo.png';
import { getUsername } from "../../redux/actions/userActions";

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [ actualUser, setActualUser ] = useState({
    username: '',
    password: ''
  });

  //CONTROL DEL FORMULARIO//
  const {
    register,
    formState: { errors },
  } = useForm();

  const handleUsername = (event) => {
    setActualUser({
      ...actualUser,
      username: event.target.value
    })
  }

  const handlePass = (event) => {
    setActualUser({
      ...actualUser,
      password: event.target.value
    })
  }

  const handleCheckUser = (event) => {
    event.preventDefault()
    if (actualUser.username === '' || actualUser.password === '') {
      alert('Ingrese todos los campos');
    } else {
      try {
        dispatch(getUsername(actualUser.username))
        history.push('/')
      }
      catch(err) {
        alert(err)
      }
    }
  }

  return (
    //INTENTANDO UN CARRUSEL
    <div className={styles[`container_padre`]}>
      <div className={styles.div_carrusel}>
        <ul>
          <li>
            <img
              src={carrusel1}
              alt="carrusel1"
              className={styles[`imagen_carrusel`]}
            />
            <h4>
              Haz match con el candidato ideal <br />
              para el trabajo que necesitas
            </h4>
          </li>
          <li>
            <img
              src={carrusel2}
              alt="carrusel2"
              className={styles[`imagen_carrusel`]}
            />
            <h4>
              Haz match con el candidato ideal <br />
              para el trabajo que necesitas
            </h4>
          </li>
          <li>
            <img
              src={carrusel3}
              alt="carrusel3"
              className={styles[`imagen_carrusel`]}
            />
            <h4>
              Haz match con el candidato ideal <br />
              para el trabajo que necesitas
            </h4>
          </li>
          <li>
            <img
              src={carrusel4}
              alt="carrusel4"
              className={styles[`imagen_carrusel`]}
            />
            <h4>
              Haz match con el candidato ideal <br />
              para el trabajo que necesitas
            </h4>
          </li>
        </ul>
      </div>
      {/* //FORMULARIO */}
      <form className={styles['form-login']} noValidate>
        <div className={styles[`div_login`]}>
          <div className={styles[`div_logo`]}>
            <img src={logo} width='200' alt="" />
          </div>

          <label>Usuario</label>
          <input
            type="email"
            placeholder="correo@gmail.com"
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
          {errors.email && (
            <small className="error">{errors.email.message}</small>
          )}

          <label>Contraseña</label>
          <input
            type="password"
            placeholder="contraseña"
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
            <small className="error">{errors.password.message}</small>
          )}
          <button onClick={handleCheckUser}>Ingresa</button>
          <h5>¿No tienes cuenta?</h5>
          <Link to='/register' className={styles['btn-register']}>
            <button>Registrate</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
