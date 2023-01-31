/** @format */

"use client";
import styles from "./login.module.css";
import { useForm } from "react-hook-form";
import { regex } from "../../utils/helpers/validationLogin";
import { SignInButton } from "./SignInbutton";
import carrusel1 from "../../assets/images/imagecarousel1.png";
import carrusel2 from "../../assets/images/imagecarousel2.png";
import carrusel3 from "../../assets/images/imagecarrousel3.png";
import carrusel4 from "../../assets/images/imagecarousel4.png";

export default function Login() {
  //CONTROL DEL FORMULARIO//
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLoginUser = async (data, e) => {
    console.log(data);
    e.target.reset();
  };
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
      <form onSubmit={handleSubmit(onLoginUser)} noValidate>
        <div className={styles[`div_login`]}>
          <div className={styles[`div_logo`]}>
            <h2>LOGO</h2>
          </div>

          <label>Correo</label>
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
          />
          {errors.password && (
            <small className="error">{errors.password.message}</small>
          )}

          <button type="submit">Iniciar sesion</button>
          <h5>¿No tienes cuenta?</h5>

          <SignInButton />
        </div>
      </form>
    </div>
  );
}
