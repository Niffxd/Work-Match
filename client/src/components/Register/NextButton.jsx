import Link from 'next/link'
import style from './buttons.module.css'

export default function NextButton() {
  return (
    <Link href='/register/complete'>
      <button
        className={`${style['next-button']}`}>
          Siguiente
      </button>
    </Link>
  )
}