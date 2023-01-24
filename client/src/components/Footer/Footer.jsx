import Link from 'next/link';
import style from './footer.module.css'

const links = [
  {
    label: 'Terms',
    route: '/terms-and-conditions',
  },
  {
    label: 'Copyright',
    route: '/copyright',
  },
  {
    label: 'About us',
    route: '/about-us',
  }
]

export default function Footer() {
  return(
    <footer className={`${style["container-footer"]}`}>
      <div className={`${style["logo-footer"]}`}>
        <img src="/large_logo.png" alt="logo-footer"/>
      </div>
      <ul className={`${style["links-footer"]}`}>
        {
          links.map(({label, route}) => (
            <li key={label}>
              <Link className={`${style["link-footer"]}`}
                href={route}> {label}
              </Link>
            </li>
          ))
        }
      </ul>
    </footer>
  )
}