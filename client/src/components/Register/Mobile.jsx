import { Link } from "react-router-dom";
import { useState } from "react";
import NextButton from './NextButton.jsx'
import AddButton from './AddButton.jsx'
import user from '../../assets/images/user.png'
import style from './register.module.css'
import './style.css'

export default function Mobile() {
  const [validateName, setValidateName] = useState(false)
  const [validateLastname, setValidateLastname] = useState(false)
  const [validate, setValidate] = useState(false)

  const [ preForm, setPreform ] = useState({
    name: "",
    lastname: ""
  })

  const handleNameChange = (event) => {
    setPreform({...preForm, name: event.target.value })
    if(event.target.value.length > 0) setValidateName(true)
    else setValidateName(false)

    if(validateName && validateLastname) setValidate(true)
    else setValidate(false)
  }

  const handleLastnameChange = (event) => {
    setPreform({...preForm, lastname: event.target.value })
    if(event.target.value.length > 0) setValidateLastname(true)
    else setValidateLastname(false)

    if(validateName && validateLastname) setValidate(true)
    else setValidate(false)
  }

  return (
    <div className={`${style['mobile']}`}>
    <div className={`${style['add-photo-container']}`}>
      <div className={`${style['photo-container']}`}>
        <img
          className={`${style['photo-profile']}`}
          src={user}
          width={100}
          height={100}
          alt="profile" />
      </div>
      <AddButton/>
    </div>
    <div className={`${style['info']}`}>
      <label htmlFor="name">Nombre:</label>
      <input name='name' type="text" onChange={handleNameChange} />
      <label htmlFor="lastname">Apellido:</label>
      <input name='lastname' type="text" onChange={handleLastnameChange} />
      <NextButton validate={validate}/>
      <div className={`${style['login']}`}>
        <p>¿Ya tienes cuenta?</p>
        <Link to="/login">
          Inicia sesión
        </Link>
      </div>
    </div>
  </div>
  )
}