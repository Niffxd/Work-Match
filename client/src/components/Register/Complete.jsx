import { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as userActions from '../../redux/actions/userActions'
import * as addressActions from '../../redux/actions/addressActions'
import BackButton from './BackButton'
import style from './register.module.css'
import btnStyle from './buttons.module.css'

export default function Complete() {
  // const states = [
  //   {
  //     value: 'buenosaires',
  //     string: 'Buenos Aires'
  //   },
  //   {
  //     value: 'caba',
  //     string: 'Ciudad Autónoma de Buenos Aires'
  //   },
  //   {
  //     value: 'catamarca',
  //     string: 'Catamarca'
  //   },
  //   {
  //     value: 'chaco',
  //     string: 'Chaco'
  //   },
  //   {
  //     value: 'chubut',
  //     string: 'Chubut'
  //   },
  //   {
  //     value: 'cordoba',
  //     string: 'Córdoba'
  //   },
  //   {
  //     value: 'corrientes',
  //     string: 'Corrientes'
  //   },
  //   {
  //     value: 'entrerios',
  //     string: 'Entre Ríos'
  //   },
  //   {
  //     value: 'formosa',
  //     string: 'Formosa'
  //   },
  //   {
  //     value: 'jujuy',
  //     string: 'Jujuy'
  //   },
  //   {
  //     value: 'lapampa',
  //     string: 'La Pampa'
  //   },
  //   {
  //     value: 'larioja',
  //     string: 'La Rioja'
  //   },
  //   {
  //     value: 'mendoza',
  //     string: 'Mendoza'
  //   },
  //   {
  //     value: 'misiones',
  //     string: 'Misiones'
  //   },
  //   {
  //     value: 'neuquen',
  //     string: 'Neuquén'
  //   },
  //   {
  //     value: 'rionegro',
  //     string: 'Río Negro'
  //   },
  //   {
  //     value: 'salta',
  //     string: 'Salta'
  //   },
  //   {
  //     value: 'sanjuan',
  //     string: 'San Juan'
  //   },
  //   {
  //     value: 'sanluis',
  //     string: 'San Luis'
  //   },
  //   {
  //     value: 'santacruz',
  //     string: 'Santa Cruz'
  //   },
  //   {
  //     value: 'santafe',
  //     string: 'Santa Fé'
  //   },
  //   {
  //     value: 'santiago',
  //     string: 'Santiago del Estero'
  //   },
  //   {
  //     value: 'tierradelfuego',
  //     string: 'Tierra del Fuego'
  //   },
  //   {
  //     value: 'tucuman',
  //     string: 'Tucuman'
  //   }
  // ]

  const dispatch = useDispatch()
  const history = useHistory()

  const preForm = useLocation().state;

  const [ postUser, setPostUser ] = useState({
    id: '',
    name: '',
    age: '',
    mail: preForm.email,
    password: preForm.password,
    phone: '',
    image: 'imagen',
    role: 2
  })

  const [ postAddress, setPostAddress ] = useState({
    user: '',
    city: 1,
    description: 'additional description'
  })

  const handleName = (event) => {
    setPostUser({
      ...postUser,
      id: event.target.value.split(' ').join('.'),
      name: event.target.value
    })
  }

  const handleAge = (event) => {
    setPostUser({
      ...postUser,
      age: event.target.value
    })
  }

  const handlePhone = (event) => {
    setPostUser({
      ...postUser,
      phone: event.target.value
    })
  }

  const handleDescription = (event) => {
    setPostAddress({
      ...postAddress,
      user: postUser.id,
      description: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(postUser.id !== ''
    && postUser.name !== ''
    && postUser.mail !== ''
    && postUser.password !== ''
    && postUser.age >= 18
    && postUser.phone !== ''){
      dispatch(userActions.postUser(postUser))
      dispatch(addressActions.postAddress(postAddress))
      alert('Usuario registrado!')
      history.push('/')
    }
    else{
      alert('Complete los campos requeridos!')
    }

  }

  return (
    <div className={`${style['mobile']}`}>
      <form className={`${style['info']}`}>
        <label htmlFor="email">Nombre Completo:</label>
        <input name='email' type='text' onChange={handleName} />
        <label htmlFor="age">Edad:</label>
        <input name='age' type='number' onChange={handleAge} />
        <label htmlFor="phone">Teléfono:</label>
        <input name='phone' type='number' onChange={handlePhone} />
        <label htmlFor="country">País:</label>
        <select name="country" id="country">
          <option value="argentina">Argentina</option>
        </select>
        <label htmlFor="description">Descripción Adicional:</label>
        <input name='description' type='text' onChange={handleDescription} />
        {/* <label htmlFor="state">Provincia:</label>
        <select name="state" id="state">
          {states.map(state => {
            return <option key={state.value} value={state.value}>{state.string}</option>
          })}
        </select> */}
      </form>
      <div className={`${style['buttons-container']}`}>
        <BackButton />
        <button
          onClick={handleSubmit}
          className={`${btnStyle['next-button']}`}>
            Registrame
        </button>
      </div>
    </div>
  )
}