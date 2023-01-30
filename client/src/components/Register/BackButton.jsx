import { Link } from "react-router-dom";
import style from './buttons.module.css'

export default function BackButton() {
  return (
    <Link to='/register'>
      <button
        className={`${style['back-button']}`}>
          Volver
      </button>
    </Link>
  )
}