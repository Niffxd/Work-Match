import { Link, useHistory } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser, getUserId, getUsername, postUser } from '../../redux/actions/userActions'
import { clearProjectId } from "../../redux/actions/projectActions";
import editIcon from '../../assets/images/edit.png'
import settingsIcon from '../../assets/images/settings.png'
import profileIcon from '../../assets/images/profile.png'
import style from './navigation.module.css'


export default function Navigation() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { isAuthenticated, user, logout } = useAuth0();
  const allUsers = useSelector(state => state.user)

  if(isAuthenticated && !Object.keys(allUsers.user).length){
    if(allUsers.allUsers.map(user => user.username).includes(user.nickname)){
      dispatch(getUserId(allUsers.allUsers.filter(userCheck => userCheck.username === user.nickname)[0].id))
    }else{
      dispatch(postUser({
        username: user.nickname,
        password: 'Auth0_User',
        name: [user.given_name, user.family_name].join(' '),
        age: 16,
        biography: '',
        mail: user.email,
        role: 2,
        image: user.picture
      }))
      dispatch(getUsername(user.nickname))
    }
  }

  const links = [
    {
      label: 'Mi Perfil',
      route: '/my-profile',
      icon: profileIcon
    },
    {
      label: 'Crear publicación',
      route: '/create-job-offer',
      icon: editIcon
    }
  ]

  if(allUsers.user.role === 1) links.push({
    label: 'Panel de Administrador',
    route: '/my-profile/admin',
    icon: settingsIcon
  })

  const handleDisplayOptions = () => {
    document.querySelector(`.${style['profile-links']}`).classList.toggle(`${style['show-links']}`)
  }

  const handlerLogout = () => {
    if(isAuthenticated) {
      logout()
      history.push('/redirect')
      dispatch(clearUser())
    }
    else {
      history.push('/redirect')
      dispatch(clearUser())
    }
  }

  const handlerHome = async () => {
    await dispatch(clearProjectId())
    history.push('/redirect')
  }

  return(
    <header className={`${style["container-header"]}`}>
      <img
        className={`${style["logo-header"]}`}
        src="/small_logo.png"
        alt="logo-header"
        onClick={handlerHome}
      />
      {
        !!Object.keys(allUsers.user).length
          ? <nav className={style['container-links']}>
              <div 
                className={style['user-profile']}
                onClick={handleDisplayOptions}
                >
                  ¡Hola, {allUsers.user.name.split(' ')[0]}!
                  <ul className={style['profile-links']}>
                    {
                      links.map(({label, route, icon}) => (
                        <li key={label}>
                          <img className={style['icon-link']} src={icon} alt='icon' />
                          <Link className={style['profile-link']}
                            to={route}> {label}
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
              </div>
              <button 
                className={style['btn-session']}
                onClick={() => handlerLogout()}>
                  Cerrar sesión
              </button>
            </nav>
          : <nav className={`${style["container-nav"]}`}>
              <button className={`${style['btn-session']}`}>
                <Link className={`${style["link-nav"]}`}
                      to='/login'>
                  Ingresar
                </Link>
              </button>
            </nav>
      }
    </header>
  )
}