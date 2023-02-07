import { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as userActions from '../../redux/actions/userActions'
import * as addressActions from '../../redux/actions/addressActions'
import BackButton from './BackButton'
import style from './register.module.css'
import btnStyle from './buttons.module.css'

export default function Complete() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { allUsers } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(userActions.getAllUsers)
  }, [dispatch])

  const preForm = useLocation().state;

  const [ postUser, setPostUser ] = useState({
    username: '',
    password: preForm.password,
    name: '',
    age: '',
    biography: '',
    mail: preForm.email,
    phone: '',
    role: 2,
    image: 'imagen'
  })

  const [ username, setUsername ] = useState('juan.perez')
  
  const [ postAddress, setPostAddress ] = useState({ // eslint-disable-line no-unused-vars
    description: ''
  })

  const handleName = (event) => {
    setPostUser({
      ...postUser,
      username: event.target.value.toLowerCase().split(' ').join('.'), //Nicolas Sanchez - nicolas.sanchez
      name: event.target.value
    })
    setUsername(event.target.value.toLowerCase().split(' ').join('.'))
  }

  const handleUsername = (event) => {
    setPostUser({
      ...postUser,
      username: event.target.value
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

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(allUsers)
    if(postUser.username !== ''
    && postUser.name !== ''
    && postUser.age >= 16 && postUser.age >= 90
    && postUser.phone !== '' && postUser.phone.length >= 9 && postUser.phone.length <= 12){
      dispatch(userActions.postUser(postUser))
      dispatch(addressActions.postAddress(postAddress))

      alert('Usuario registrado con éxito!. Por favor loguate para comenzar a trabajar!')
      history.push('/login')
    }
    else{
      alert('Complete los campos requeridos!')
    }
  }

  return (
    <div className={`${style['mobile']}`}>
      <form className={`${style['info']}`}>
        <label htmlFor="user">Nombre Completo:</label>
        <input placeholder='Juan Perez' name='user' type='text' onChange={handleName} />
        <label htmlFor="user">Usuario:</label>
        <input placeholder={username} name='user' type='text' onChange={handleUsername} />
        <label htmlFor="age">Edad:</label>
        <input placeholder='16 años en adelante' name='age' type='number' onChange={handleAge} />
        <label htmlFor="phone">Teléfono:</label>
        <input placeholder='11 1234-5678' name='phone' type='number' onChange={handlePhone} />
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