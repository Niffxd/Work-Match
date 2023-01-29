'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation.js';
import useForm from '@/utils/customHooks/useForm';
import { getUser, putUser } from '@/utils/api/user.js';
import validationEditProfile from '../../utils/helpers/validationsEditProfile.js';
import style from './page.module.css';

//TO DO 1/5: Sustituir userData por los datos del usuario.

const userData = {
  id: 1,
  age: 25,
  address: 'Mendoza, Argentina',
  biography: '',
  image:
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  mail: 'darianarengifo@gmail.com',
  name: 'Dariana Rengifo',
  phone: 3517739445,
  premium: true,
  rate: 4.5,
  username: 'dari1705',
};

export default async function DashboardEmployee() {
  //view links
  const [menu, setMenu] = useState('invisible');

  // user data
  // const userData = await getUser(id);
  const {
    id,
    age,
    address,
    biography,
    image,
    name,
    rate,
    mail,
    phone,
    premium,
    username,
  } = userData;
  // initial state of form
  const initialForm = {
    address,
    age,
    biography,
    image,
    mail,
    name,
    phone,
    password: '',
    repeatPassword: '',
    username,
  };
  // custom hook form
  const { form, errors, setErrors, resetHandler, changeHandler } = useForm(
    initialForm,
    validationEditProfile
  );

  //view links
  const menuHandler = (event) => {
    event.preventDefault();
    if (menu === 'invisible') {
      setMenu('visible');
    } else {
      setMenu('invisible');
    }
  };

  //change photo profile
  const addImageHandler = (event) => {
    event.preventDefault();
    //TO DO 2/5: Agregar foto de perfil de los archivos del usuario.
    alert('agrega una foto de perfil');
  };

  const deleteHandler = async (event) => {
    event.preventDefault();
    try {
      const router = useRouter();
      //TO DO 3/5: verificar que funcione (cuando se puedan crear usuarios)
      await deleteUser(id);
      alert('cuenta eliminada');
      router.push('/');
    } catch (error) {
      setErrors({ ...errors, form: error.message });
    }
  };

  const premiumHandler = async (event) => {
    event.preventDefault();
    try {
      if (premium) {
        //TO DO 4/5: verificar que funcione (cuando se puedan crear usuarios)
        await putUser({ id, premium: false });
        alert('Puedes volver a activar el premium cuando desees.');
      } else {
        await putUser({ id, premium: true });
        alert('Ahora tienes cuenta premium.');
      }
    } catch (error) {
      setErrors({ ...errors, form: error.message });
    }
  };

  // update user data
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      setErrors(validationEditProfile(form));
      if (Object.keys(errors).length === 0) {
        //TO DO 5/5: verificar que funcione (cuando se puedan crear usuarios)
        await putUser(form);
        alert('datos actualizados');
      }
    } catch (error) {
      setErrors({ ...errors, form: error.message });
    }
  };

  return (
    <>
      {/* User's Navigation Bar */}
      <nav className={`${style['user-navigation']}`}>
        <div className={`${style['icon-container']}`}>
          <img
            className={`icon-dark ${style['menu-icon']}`}
            src="https://cdn-icons-png.flaticon.com/512/56/56763.png"
            alt="menu"
            onClick={menuHandler}
          />
        </div>
      </nav>
      <section className={`container ${style['position-relative']}`}>
        {/* Links */}
        <div className={`${menu} ${style['navigation-container']}`}>
          {/* Links Employee */}
          <details className={`${style['details']}`}>
            <summary className={`${style['summary']}`}>
              Perfil de Empleado
            </summary>
            <div className={`${style['links-container']}`}>
              <Link
                className={`${style['link']}`}
                href="/my-profile/employee/applications"
              >
                Postulaciones
              </Link>
              <Link
                className={`${style['link']}`}
                href="/my-profile/employee/matches"
              >
                Matches
              </Link>
            </div>
          </details>
          {/* Links employer */}
          <details className={`${style['details']}`}>
            <summary className={`${style['summary']}`}>
              Perfil de Empleador
            </summary>
            <div className={`${style['links-container']}`}>
              <Link
                className={`${style['link']}`}
                href="/my-profile/employer/publications"
              >
                Publicaciones
              </Link>
              <Link
                className={`${style['link']}`}
                href="/my-profile/employer/postulates"
              >
                Postulados
              </Link>
              <Link
                className={`${style['link']}`}
                href="/my-profile/employer/matches"
              >
                Matches
              </Link>
            </div>
          </details>
        </div>
        {/* Form to edit data */}
        <form>
          {/* Image */}
          <div className={`${style['user-banner']}`}>
            <div className={`${style['add-photo-container']}`}>
              <div className={`${style['photo-container']}`}>
                <img
                  className={`${style['photo-profile']}`}
                  src={image}
                  alt="Photo profile"
                />
              </div>
              <button
                className={`${style['add-photo']}`}
                onClick={addImageHandler}
              >
                +
              </button>
            </div>
            <div className={`${style['user-data']}`}>
              <div className={`${style['premium']}`}>
                <h2 className={`${style['margin']}`}>Hola, {name}</h2>
                {premium && (
                  <img
                    className={`${style['premium-icon']}`}
                    src="https://cdn-icons-png.flaticon.com/512/5253/5253963.png"
                    alt="verificate"
                  />
                )}
              </div>
              <div className={`${style['score-container']} ${style['margin']}`}>
                <p className={`${style['text-score']}`}>Puntuación:</p>
                <img
                  className={`${style['star-icon']}`}
                  src="https://cdn-icons-png.flaticon.com/512/5583/5583265.png"
                  alt="Star"
                />
                <p>{rate}</p>
              </div>
              {!premium && (
                <button className="button-green">Activar premium</button>
              )}
            </div>
          </div>
          {/* Username */}
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Ej: user123"
            value={form.username}
            onChange={changeHandler}
            onBlur={changeHandler}
            autoComplete="off"
          />
          {errors && Object.keys(errors).length > 0 && errors.username && (
            <p className="error">{errors.username}</p>
          )}
          {/* Name */}
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Ej: Juan Pérez"
            value={form.name}
            onChange={changeHandler}
            onBlur={changeHandler}
            autoComplete="off"
          />
          {errors && Object.keys(errors).length > 0 && errors.name && (
            <p className="error">{errors.name}</p>
          )}
          {/* Age */}
          <label htmlFor="age">Edad</label>
          <input
            id="age"
            type="number"
            name="age"
            placeholder="Ej: 25"
            value={form.age}
            onChange={changeHandler}
            onBlur={changeHandler}
            autoComplete="off"
          />
          {errors && Object.keys(errors).length > 0 && errors.age && (
            <p className="error">{errors.age}</p>
          )}
          {/* Mail */}
          <label htmlFor="mail">Correo electrónico</label>
          <input
            id="mail"
            type="text"
            name="mail"
            placeholder="Ej: ejemplo123@mail.com"
            value={form.mail}
            onChange={changeHandler}
            onBlur={changeHandler}
            autoComplete="off"
          />
          {errors && Object.keys(errors).length > 0 && errors.mail && (
            <p className="error">{errors.mail}</p>
          )}
          {/* Phone */}
          <label htmlFor="phone">Teléfono</label>
          <input
            id="phone"
            type="number"
            name="phone"
            placeholder="Ej: 0212 111 1111"
            value={form.phone}
            onChange={changeHandler}
            onBlur={changeHandler}
            autoComplete="off"
          />
          {errors && Object.keys(errors).length > 0 && errors.phone && (
            <p className="error">{errors.phone}</p>
          )}
          {/* Address */}
          <label htmlFor="address">Dirección</label>
          <input
            id="address"
            type="text"
            name="address"
            placeholder="Ej: Mendoza, Argentina"
            value={form.address}
            onChange={changeHandler}
            onBlur={changeHandler}
            autoComplete="off"
          />
          {errors && Object.keys(errors).length > 0 && errors.address && (
            <p className="error">{errors.address}</p>
          )}
          {/* Biography */}
          <label htmlFor="biography">Sobre mi</label>
          <textarea
            name="biography"
            id="biography"
            placeholder="Ej: Soy una persona responsable, puntual y con experiencia en..."
            value={form.biography}
            onChange={changeHandler}
            onBlur={changeHandler}
            autoComplete="off"
          />
          {errors && Object.keys(errors).length > 0 && errors.biography && (
            <p className="error">{errors.biography}</p>
          )}
          {/* Password */}
          <label htmlFor="password">Nueva contraseña</label>
          <input
            id="pasword"
            type="password"
            name="password"
            placeholder="Ej: contraseña123"
            value={form.password}
            onChange={changeHandler}
            onBlur={changeHandler}
            autoComplete="off"
          />
          {errors && Object.keys(errors).length > 0 && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          {/* Repeat Password */}
          {form.password.length > 0 && (
            <>
              <label htmlFor="repeatPassword">Repetir contraseña</label>
              <input
                id="repeatPassword"
                type="password"
                name="repeatPassword"
                value={form.repeatPassword}
                onChange={changeHandler}
                onBlur={changeHandler}
                autoComplete="off"
              />
              {errors &&
                Object.keys(errors).length > 0 &&
                errors.repeatPassword && (
                  <p className="error">{errors.repeatPassword}</p>
                )}
            </>
          )}
          {errors && Object.keys(errors).length > 0 && errors.form && (
            <p className="error">{errors.form}</p>
          )}
          <div className="buttons-container">
            <button className="button-purple" onClick={resetHandler}>
              Limpiar
            </button>
            <button className="button-green" onClick={submitHandler}>
              Guardar cambios
            </button>
          </div>
          <details className={`${style['questions-container']}`}>
            <summary className="semibold">
              ¿Cuales son las ventajas de ser Premium?
            </summary>
            <ul className={`${style['unordered-list']}`}>
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
            {premium ? (
              <button className="button-red" onClick={premiumHandler}>
                Desactivar Premium
              </button>
            ) : (
              <button className="button-green" onClick={premiumHandler}>
                Activar Premium
              </button>
            )}
          </details>

          <details className={`${style['questions-container']}`}>
            <summary className="semibold">
              ¿Deseas desactivar permanentemente tu cuenta?
            </summary>
            <p>
              Al desactivar tu cuenta nadie podrá acceder a tus publicaciones ni
              a tu perfil.
            </p>
            <button className="button-red" onClick={deleteHandler}>
              Eliminar cuenta
            </button>
          </details>
        </form>
      </section>
    </>
  );
}
