import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUser,
  deleteUser,
  getUserId,
  putUser,
} from "../../redux/actions/userActions";
import style from "./userProfile.module.css";
import useForm from "../../utils/customHooks/useForm";
import validationEditProfile from "../../utils/helpers/validationsEditProfile";
import { confirmationOpen } from "../../redux/actions/confirmationMessageActions";
import { newMessage } from "../../redux/actions/alertMessageActions";
import ConfirmationMessage from "../../components/ConfirmationMessage/ConfirmationMessage";

export default function DashboardUser() {
  //variables
  const dispatch = useDispatch();
  const history = useHistory();
  const [menu, setMenu] = useState("invisible");
  const userState = useSelector((state) => state.user);
  const { user } = userState;
  const addressState = useSelector((state) => state.address);
  const { states } = addressState;
  const [premium, setPremium] = useState(null);
  const [visibleAddress, setVisibleAddress] = useState("invisible");
  const address = user.Address
    ? states.find((element) => element.id === user.Address.id)
    : null;
  // initial state of form
  const initialForm = {
    address: address ? address.name : "Selecciona una dirección",
    addressId: user.Address ? user.Address.id : 1,
    age: user.age || "",
    biography: user.biography || "",
    direction: user.Address ? user.Address.description : "",
    image: user.image || "",
    username: user.username || "",
    mail: user.mail || "",
    name: user.name || "",
    password: "",
    phone: user.phone || "",
    repeatPassword: "",
  };

  // custom hook form
  const { form, errors, setForm, setErrors, resetHandler, changeHandler } =
    useForm(initialForm, validationEditProfile);

  //Address
  const addressMenuHandler = (event) => {
    event.preventDefault();
    if (visibleAddress === "invisible") {
      setVisibleAddress("visible");
    } else {
      setVisibleAddress("invisible");
    }
  };
  const addressSelectionHandler = (event, address, addressId) => {
    event.preventDefault();
    event.stopPropagation();
    setForm({ ...form, address, addressId });
    setVisibleAddress("invisible");
  };

  // view links
  const menuHandler = (event) => {
    event.preventDefault();
    if (menu === "invisible") {
      setMenu("visible");
    } else {
      setMenu("invisible");
    }
  };

  // change photo profile
  const addImageHandler = (event) => {
    event.preventDefault();
    //TO DO 1/2: Agregar foto de perfil de los archivos del usuario.
    alert("agrega una foto de perfil");
  };

  //Open confirmation message
  const confirmationHandler = async (event) => {
    event.preventDefault();
    dispatch(confirmationOpen());
  };

  // delete account
  const deleteHandler = () => {
    try {
      dispatch(deleteUser(user.id));
      dispatch(clearUser());
      dispatch(newMessage("Tu cuenta fue eliminada con éxito", "success"));
      history.push(`/`);
    } catch (error) {
      console.log(error);
      dispatch(newMessage(error.message, "error"));
    }
  };

  // update user premium
  const premiumHandler = async (event) => {
    event.preventDefault();
    //TO DO 2/2: introducir pasarela de pagos
    try {
      if (user.premium) {
        dispatch(putUser({ id: user.id, premium: false }));
        dispatch(getUserId(user.id));
        setPremium("premium false");
        dispatch(
          newMessage(
            "Puedes volver a activar los beneficios premium cuando quieras.",
            "success"
          )
        );
      } else {
        dispatch(putUser({ id: user.id, premium: true }));
        dispatch(getUserId(user.id));
        setPremium("premium true");
        dispatch(
          newMessage("¡Felicidades! Ahora tienes cuenta premium.", "success")
        );
      }
    } catch (error) {
      console.log(error);
      dispatch(newMessage(error.message, "error"));
    }
  };

  //  update user data
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      setErrors(validationEditProfile(form));
      if (Object.keys(errors).length === 0) {
        dispatch(putUser({ id: user.id, ...form }));
        dispatch(getUserId(user.id));
        dispatch(newMessage("Tus datos se actualizaron con éxito.", "success"));
      }
    } catch (error) {
      console.log(error);
      dispatch(newMessage(error.message, "error"));
    }
  };
  return (
    <>
      <ConfirmationMessage
        message='¿Quieres eliminar esta cuenta?'
        handler={deleteHandler}
      />
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
        <form>
          {/* Image */}
          <div className={`${style["user-banner"]}`}>
            <div className={`${style["add-photo-container"]}`}>
              <div className={`${style["photo-container"]}`}>
                <img
                  className={`${style["photo-profile"]}`}
                  src='https://i.pinimg.com/736x/b5/49/41/b5494197b2d462c940f88988b203d290.jpg'
                  alt='Photo profile.'
                />
                {/* <img
                  className={`${style['photo-profile']}`}
                  src={user.image}
                  alt="Photo profile"
                /> */}
              </div>
              <button
                className={`${style["add-photo"]}`}
                onClick={addImageHandler}
              >
                +
              </button>
            </div>
            <div className={`${style["user-data"]}`}>
              <div className={`${style["premium"]}`}>
                <h2 className={`${style["margin"]}`}>{user.name}</h2>
                {(user.premium || premium === "premium true") && (
                  <img
                    className={`${style["premium-icon"]} ${
                      premium === "premium false" && "invisible"
                    }`}
                    src='https://cdn-icons-png.flaticon.com/512/5253/5253963.png'
                    alt='verificate'
                  />
                )}
              </div>
              <div className={`${style["score-container"]} ${style["margin"]}`}>
                {user.rate && (
                  <>
                    <p className={`${style["text-score"]}`}>Puntuación:</p>
                    <img
                      className={`${style["star-icon"]}`}
                      src='https://cdn-icons-png.flaticon.com/512/5583/5583265.png'
                      alt='Star'
                    />
                    <p>{user.rate}</p>
                  </>
                )}
              </div>
              {(!user.premium || premium === "premium false") && (
                <button
                  className={`button-green ${
                    premium === "premium true" && "invisible"
                  } ${style["premium-button"]}`}
                  onClick={premiumHandler}
                >
                  Activar Premium
                </button>
              )}
            </div>
          </div>

          {/* Username */}
          <label htmlFor='username'>Nombre de usuario</label>
          <input
            id='username'
            type='text'
            name='username'
            placeholder='Ej: juan.perez'
            value={form.username}
            onChange={changeHandler}
            onBlur={changeHandler}
            autoComplete='off'
          />
          {errors && Object.keys(errors).length > 0 && errors.username && (
            <p className='error'>{errors.username}</p>
          )}

          {/* Name */}
          <label htmlFor='name'>Nombre completo</label>
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
          {errors && Object.keys(errors).length > 0 && errors.name && (
            <p className='error'>{errors.name}</p>
          )}
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
          {errors && Object.keys(errors).length > 0 && errors.age && (
            <p className='error'>{errors.age}</p>
          )}
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
          {errors && Object.keys(errors).length > 0 && errors.mail && (
            <p className='error'>{errors.mail}</p>
          )}
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
          {errors && Object.keys(errors).length > 0 && errors.phone && (
            <p className='error'>{errors.phone}</p>
          )}
          {/* Address-state */}
          <label htmlFor='address'>Estado</label>
          <div className={`${style["select-menu"]}`}>
            <div
              className={`${style["select-button"]}`}
              onClick={addressMenuHandler}
            >
              <span className={`${style["select-button-text"]}`}>
                {form.address}
              </span>
              <img
                className={`${style["down-arrow"]}`}
                src={"https://cdn-icons-png.flaticon.com/512/656/656979.png"}
                alt='Down arrow.'
              />
            </div>
            <ul className={`${visibleAddress} ${style["address-container"]}`}>
              {states.map((address, index) => {
                return (
                  <li
                    key={`address-${index}`}
                    className={`${style["address-name"]}`}
                    onClick={(event) =>
                      addressSelectionHandler(event, address.name, address.id)
                    }
                  >
                    {address.name}
                  </li>
                );
              })}
            </ul>
          </div>
          {errors && Object.keys(errors).length > 0 && errors.address && (
            <p className='error'>{errors.address}</p>
          )}
          {/* Address-Direction */}
          <label htmlFor='direction'>Dirección</label>
          <input
            id='direction'
            type='text'
            name='direction'
            placeholder='Ej: Mendoza, Argentina'
            value={form.direction}
            onChange={changeHandler}
            onBlur={changeHandler}
            autoComplete='off'
          />
          {errors && Object.keys(errors).length > 0 && errors.direction && (
            <p className='error'>{errors.direction}</p>
          )}
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
          {errors && Object.keys(errors).length > 0 && errors.biography && (
            <p className='error'>{errors.biography}</p>
          )}
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
          {errors && Object.keys(errors).length > 0 && errors.password && (
            <p className='error'>{errors.password}</p>
          )}
          {/* Repeat Password */}
          {form.password.length > 0 && (
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
            {(user.premium || premium === "premium true") && (
              <button
                className={`button-red ${
                  premium === "premium false" && "invisible"
                }`}
                onClick={premiumHandler}
              >
                Desactivar Premium
              </button>
            )}
            {(!user.premium || premium === "premium false") && (
              <button
                className={`button-green ${
                  premium === "premium true" && "invisible"
                }`}
                onClick={premiumHandler}
              >
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
            <button className='button-red' onClick={confirmationHandler}>
              Eliminar cuenta
            </button>
          </details>
        </form>
      </section>
    </>
  );
}
