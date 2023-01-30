import { Link } from "react-router-dom";
import style from './buttons.module.css'

export default function RegisterButton() {
  return (
    <Link to='/register'>
      <button
        className={`${style['next-button']}`}>
          Registrame
      </button>
    </Link>
  )
}