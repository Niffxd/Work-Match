import Image from 'next/image'
import style from './register.module.css'
import './style.css'

export default function Desktop() {
  return (
    <div className={`${style['desktop']}`}>
      <h1>Registrate ahora</h1>
      <h2>y comienza a disfrutar de todos nuestros beneficios:</h2>
      <ul>
        <li>
          <Image src="/check.svg" height={48} width={48} alt='check'/>
          <p>Busca tu trabajo ideal y haz match con él.</p>
        </li>
        <li>
          <Image src="/check.svg" height={48} width={48} alt='check'/>
          <p>Gana dinero rápido con trabajos simples.</p>
        </li>
        <li>
          <Image src="/check.svg" height={48} width={48} alt='check'/>
          <p>Publica tus propias ofertas de trabajo.</p>
        </li>
        <li>
          <Image src="/check.svg" height={48} width={48} alt='check'/>
          <p>Elige a los mejores candidatos para realizar ese trabajo.</p>
        </li>
      </ul>
    </div>
  )
}
