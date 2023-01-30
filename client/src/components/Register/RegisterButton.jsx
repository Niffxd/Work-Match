import Link from 'next/link'
import style from './buttons.module.css'

export default function RegisterButton() {
  return (
    <Link href='/register'>
      <button
        className={`${style['next-button']}`}>
          Registrame
      </button>
    </Link>
  )
}