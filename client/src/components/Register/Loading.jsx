import loader from '../../assets/loaders/oval.svg'
import style from './register.module.css'

export default function Loader () {
  return(
    <div className={style.loader}>
      <img src={loader} width='150' alt="loading..." />
    </div>
  )
}