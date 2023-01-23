import Link from 'next/link';
import style from './navigation.module.css'


export default function Navigation() {
  return(
    <header className={`${style["container-header"]}`}>
      <Link className={`${style["logo-header"]}`}
        href='/'>
        <img src="/small_logo.png" alt="logo-header"/>
      </Link>
      <nav className={`${style["container-nav"]}`}>
        <button className='button-green'>
          <Link className={`${style["link-nav"]}`}
                href='/create-job-offer'>
            Publicar oferta
          </Link>
        </button>
      </nav>
    </header>
  )
}