import { Link } from "react-router-dom";
import style from './navigation.module.css'


export default function Navigation() {
  return(
    <header className={`${style["container-header"]}`}>
      <Link className={`${style["logo-header"]}`}
        to='/'>
        <img src="/small_logo.png" alt="logo-header"/>
      </Link>
      <nav className={`${style["container-nav"]}`}>
        <button className='button-green'>
          <Link className={`${style["link-nav"]}`}
                to='/register'>
            Ingresar
          </Link>
        </button>
      </nav>
    </header>
  )
}