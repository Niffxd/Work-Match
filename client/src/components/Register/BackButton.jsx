import Link from 'next/link'
import style from './buttons.module.css'

export default function BackButton() {
  return (
    <Link href='/register'>
      <button
        className={`${style['back-button']}`}>
          Volver
      </button>
    </Link>
  )
}