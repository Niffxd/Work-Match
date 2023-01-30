import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../../redux/actions/addressActions";
import {
  deleteUser,
  getUserId,
  putUser,
} from "../../redux/actions/userActions";
import style from "./userProfile.module.css";
import useForm from "../../utils/customHooks/useForm";
import validationEditProfile from "../../utils/helpers/validationsEditProfile";

export default function DashboardUser() {
  //view links
  const dispatch = useDispatch();
  const history = useHistory();
  const [menu, setMenu] = useState("invisible");
  const userState = useSelector((state) => state.user);
  const { user } = userState;
  const addressState = useSelector((state) => state.address);
  const { userAddress, city, state, country } = addressState;

  //TO DO 1/1: Este use Effect se elimana y el usuario se
  // guarda al iniciar sesion.
  useEffect(() => {
    dispatch(getUserId("usuario1"));
    dispatch(getAddress("usuario1"));
  }, [user]);

  // initial state of form
  const initialForm = {
    id: user.id,
    name: user.name,
    age: user.age,
    mail: user.mail,
    password: "",
    phone: user.phone,
    biography: user.biography || "",
    repeatPassword: "",
  };
  // custom hook form
  const { form, errors, setErrors, resetHandler, changeHandler } = useForm(
    initialForm,
    validationEditProfile
  );

  //   //view links
  const menuHandler = (event) => {
    event.preventDefault();
    if (menu === "invisible") {
      setMenu("visible");
    } else {
      setMenu("invisible");
    }
  };

  //   //change photo profile
  //   const addImageHandler = (event) => {
  //     event.preventDefault();
  //     //TO DO 2/5: Agregar foto de perfil de los archivos del usuario.
  //     alert("agrega una foto de perfil");
  //   };

  const deleteHandler = async (event) => {
    event.preventDefault();
    try {
      dispatch(deleteUser(user.id));
      alert("cuenta eliminada");
      history.push(`/login`);
    } catch (error) {
      setErrors({ ...errors, form: error.message });
    }
  };

  const premiumHandler = async (event) => {
    event.preventDefault();
    try {
      if (user.premium) {
        dispatch(putUser({ id: user.id, premium: false }));
        dispatch(getUserId(user.id));
        alert("Puedes volver a activar el premium cuando desees.");
      } else {
        dispatch(putUser({ id: user.id, premium: true }));
        dispatch(getUserId(user.id));
        alert("Ahora tienes cuenta premium.");
      }
    } catch (error) {
      setErrors({ ...errors, form: error.message });
    }
  };
  //  update user data
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      setErrors(validationEditProfile(form));
      if (Object.keys(errors).length === 0) {
        dispatch(putUser(form));
        dispatch(getUserId(user.id));

        alert("datos actualizados");
      }
    } catch (error) {
      setErrors({ ...errors, form: error.message });
    }
  };

  return (
    <>
      {/* User's Navigation Bar */}
      <nav className={`${style["user-navigation"]}`}>
        <div className={`${style["icon-container"]}`}>
          <img
            className={`icon-dark ${style["menu-icon"]}`}
            src='https://cdn-icons-png.flaticon.com/512/56/56763.png'
            alt='menu'
            onClick={menuHandler}
          />
        </div>
      </nav>
      <section className={`container ${style["position-relative"]}`}>
        {/* Links */}
        <div className={`${menu} ${style["navigation-container"]}`}>
          {/* Links Employee */}
          <details className={`${style["details"]}`}>
            <summary className={`${style["summary"]}`}>
              Perfil de Empleado
            </summary>
            <div className={`${style["links-container"]}`}>
              <Link
                className={`${style["link"]}`}
                to='/my-profile/employee/applications'
              >
                Postulaciones
              </Link>
              <Link
                className={`${style["link"]}`}
                to='/my-profile/employee/matches'
              >
                Matches
              </Link>
            </div>
          </details>
          {/* Links employer */}
          <details className={`${style["details"]}`}>
            <summary className={`${style["summary"]}`}>
              Perfil de Empleador
            </summary>
            <div className={`${style["links-container"]}`}>
              <Link
                className={`${style["link"]}`}
                to='/my-profile/employer/publications'
              >
                Publicaciones
              </Link>
              <Link
                className={`${style["link"]}`}
                to='/my-profile/employer/postulates'
              >
                Postulados
              </Link>
              <Link
                className={`${style["link"]}`}
                to='/my-profile/employer/matches'
              >
                Matches
              </Link>
            </div>
          </details>
        </div>
        {/* Form to edit data */}
        <div className={`${style["user-data"]}`}>
          <div className={`${style["premium"]}`}>
            <h2 className={`${style["margin"]}`}>Hola, {user.name}</h2>
            {user.premium && (
              <img
                className={`${style["premium-icon"]}`}
                src='https://cdn-icons-png.flaticon.com/512/5253/5253963.png'
                alt='verificate'
              />
            )}
          </div>
          {user.rate && (
            <div className={`${style["score-container"]} ${style["margin"]}`}>
              <p className={`${style["text-score"]}`}>Puntuación:</p>
              <img
                className={`${style["star-icon"]}`}
                src='https://cdn-icons-png.flaticon.com/512/5583/5583265.png'
                alt='Star'
              />
              <p>{user.rate}</p>
            </div>
          )}
          {!user.premium && (
            <button className='button-green' onClick={premiumHandler}>
              Activar premium
            </button>
          )}
        </div>
        <></>
        <form>
          {/* Name */}
          <label htmlFor='name'>Nombre</label>
          <input
            id='name'
            type='text'
            name='name'
            placeholder='Ej: Juan Pérez'
            value={form.name}
            onChange={changeHandler}
            onBlur={changeHandler}
            autoComplete='off'
          />
          {errors.name && <p className='error'>{errors.name}</p>}
          {/* Age */}
          <label htmlFor='age'>Edad</label>
          <input
            id='age'
            type='number'
            name='age'
            placeholder='Ej: 25'
            value={form.age}
            onChange={changeHandler}
            onBlur={changeHandler}
            autoComplete='off'
          />
          {errors.age && <p className='error'>{errors.age}</p>}
          {/* Mail */}
          <label htmlFor='mail'>Correo electrónico</label>
          <input
            id='mail'
            type='text'
            name='mail'
            placeholder='Ej: ejemplo123@mail.com'
            value={form.mail}
            onChange={changeHandler}
            onBlur={changeHandler}
            autoComplete='off'
          />
          {errors.mail && <p className='error'>{errors.mail}</p>}
          {/* Phone */}
          <label htmlFor='phone'>Teléfono</label>
          <input
            id='phone'
            type='number'
            name='phone'
            placeholder='Ej: 0212 111 1111'
            value={form.phone}
            onChange={changeHandler}
            onBlur={changeHandler}
            autoComplete='off'
          />
          {errors.phone && <p className='error'>{errors.phone}</p>}
          {/* Address */}
          {/* <label htmlFor='address'>Dirección</label>
          <input
            id='address'
            type='text'
            name='address'
            placeholder='Ej: Mendoza, Argentina'
            value={form.address}
            onChange={changeHandler}
            onBlur={changeHandler}
            autoComplete='off'
          />
          {errors.address && <p className='error'>{errors.address}</p>} */}
          {/* Biography */}
          <label htmlFor='biography'>Sobre mi</label>
          <textarea
            name='biography'
            id='biography'
            placeholder='Ej: Soy una persona responsable, puntual y con experiencia en...'
            value={form.biography}
            onChange={changeHandler}
            onBlur={changeHandler}
            autoComplete='off'
          />
          {errors.biography && <p className='error'>{errors.biography}</p>}
          {/* Password */}
          <label htmlFor='password'>Nueva contraseña</label>
          <input
            id='pasword'
            type='password'
            name='password'
            placeholder='Ej: contraseña123'
            value={form.password}
            onChange={changeHandler}
            onBlur={changeHandler}
            autoComplete='off'
          />
          {errors.password && <p className='error'>{errors.password}</p>}
          {/* Repeat Password */}
          {form.password && (
            <>
              <label htmlFor='repeatPassword'>Repetir contraseña</label>
              <input
                id='repeatPassword'
                type='password'
                name='repeatPassword'
                value={form.repeatPassword}
                onChange={changeHandler}
                onBlur={changeHandler}
                autoComplete='off'
              />
              {errors &&
                Object.keys(errors).length > 0 &&
                errors.repeatPassword && (
                  <p className='error'>{errors.repeatPassword}</p>
                )}
            </>
          )}
          {errors.form && <p className='error'>{errors.form}</p>}
          <div className='buttons-container'>
            <button className='button-purple' onClick={resetHandler}>
              Limpiar
            </button>
            <button className='button-green' onClick={submitHandler}>
              Guardar cambios
            </button>
          </div>
          <details className={`${style["questions-container"]}`}>
            <summary className='semibold'>
              ¿Cuales son las ventajas de ser Premium?
            </summary>
            <ul className={`${style["unordered-list"]}`}>
              <li>
                Al publicar una nueva oferta de trabajo, esta se mostrará entre
                las primeras búsquedas.
              </li>
              <li>
                Al postularte en una oferta de trabajo, tu perfil se mostrará
                entre los primeros.
              </li>
              <li>
                Al tener una cuenta Premium verificada, tu perfil generará más
                confianza y más personas querrán trabajar contigo.
              </li>
            </ul>
            {user.premium ? (
              <button className='button-red' onClick={premiumHandler}>
                Desactivar Premium
              </button>
            ) : (
              <button className='button-green' onClick={premiumHandler}>
                Activar Premium
              </button>
            )}
          </details>

          <details className={`${style["questions-container"]}`}>
            <summary className='semibold'>
              ¿Deseas desactivar permanentemente tu cuenta?
            </summary>
            <p>
              Al desactivar tu cuenta nadie podrá acceder a tus publicaciones ni
              a tu perfil.
            </p>
            <button className='button-red' onClick={deleteHandler}>
              Eliminar cuenta
            </button>
          </details>
        </form>
      </section>
    </>
  );
}

//       {/* Image */}
//       <div className={`${style["user-banner"]}`}>
//         <div className={`${style["add-photo-container"]}`}>
//           <div className={`${style["photo-container"]}`}>
//             <Image
//               className={`${style["photo-profile"]}`}
//               src={image}
//               alt='Photo profile'
//             />
//           </div>
//           <button
//             className={`${style["add-photo"]}`}
//             onClick={addImageHandler}
//           >
//             +
//           </button>
//         </div>

//       </div>

//     </form>
// </>
