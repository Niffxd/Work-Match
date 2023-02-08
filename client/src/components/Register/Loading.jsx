import loader from '../../assets/loaders/oval.svg'
import style from './register.module.css'

export default function Loader ({ width, preview, styles }) {
  !width ? width = '150' : width = '64'
  return(
    <div className={`${style[preview]} ${style.loader} ${style[styles]}`}>
      <img src={loader} width={width} alt="loading..." />
    </div>
  )
}