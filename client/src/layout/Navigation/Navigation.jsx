import { Link, useLocation } from "react-router-dom";
import editIcon from '../../assets/images/edit.png'
import profileIcon from '../../assets/images/profile.png'
import { useAuth0 } from '@auth0/auth0-react'
import style from './navigation.module.css'


export default function Navigation() {
  const { isAuthenticated, logout, user } = useAuth0();
  const userLocation = useLocation().state;

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

  const handleDisplayOptions = () => {
    document.querySelector(`.${style['profile-links']}`).classList.toggle(`${style['show-links']}`)
  }

  return(
    <header className={`${style["container-header"]}`}>
      <Link className={`${style["logo-header"]}`}
        to='/'>
        <img src="/small_logo.png" alt="logo-header"/>
      </Link>
      {
        isAuthenticated
        ? <nav className={style['container-links']}>
            <div 
              className={style['user-profile']}
              onClick={handleDisplayOptions}
              >
                ¡Hola {user.given_name.split(' ')[0]}!
                <ul className={style['profile-links']}>
                  {
                    links.map(({label, route, icon}) => (
                      <li key={label}>
                        <Link className={style['profile-link']}
                          to={route}>
                            <img className={style['icon-link']} src={icon} alt='icon' />
                            {label}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
            </div>
            <button 
              className={style['btn-session']}
              onClick={() => logout()}>
                Cerrar sesión
            </button>
          </nav>
        : userLocation && userLocation.name
          ? <nav className={style['container-links']}>
              <div 
                className={style['user-profile']}
                onClick={handleDisplayOptions}
                >
                  ¡Hola {userLocation.name.split(' ')[0]}!
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
                onClick={() => logout()}>
                  Cerrar sesión
              </button>
            </nav>
          : <nav className={`${style["container-nav"]}`}>
              <button className={`${style['btn-session']}`}>
                <Link className={`${style["link-nav"]}`}
                      to='/register'>
                  Ingresar
                </Link>
              </button>
            </nav>
      }
    </header>
  )
}