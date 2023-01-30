import BackButton from './BackButton'
import RegisterButton from './RegisterButton'
import * as validate from '../../utils/helpers/Register/validateForm'
import style from './register.module.css'
import './style.css'

export default function Complete() {
  const states = [
    {
      value: 'buenosaires',
      string: 'Buenos Aires'
    },
    {
      value: 'caba',
      string: 'Ciudad Autónoma de Buenos Aires'
    },
    {
      value: 'catamarca',
      string: 'Catamarca'
    },
    {
      value: 'chaco',
      string: 'Chaco'
    },
    {
      value: 'chubut',
      string: 'Chubut'
    },
    {
      value: 'cordoba',
      string: 'Córdoba'
    },
    {
      value: 'corrientes',
      string: 'Corrientes'
    },
    {
      value: 'entrerios',
      string: 'Entre Ríos'
    },
    {
      value: 'formosa',
      string: 'Formosa'
    },
    {
      value: 'jujuy',
      string: 'Jujuy'
    },
    {
      value: 'lapampa',
      string: 'La Pampa'
    },
    {
      value: 'larioja',
      string: 'La Rioja'
    },
    {
      value: 'mendoza',
      string: 'Mendoza'
    },
    {
      value: 'misiones',
      string: 'Misiones'
    },
    {
      value: 'neuquen',
      string: 'Neuquén'
    },
    {
      value: 'rionegro',
      string: 'Río Negro'
    },
    {
      value: 'salta',
      string: 'Salta'
    },
    {
      value: 'sanjuan',
      string: 'San Juan'
    },
    {
      value: 'sanluis',
      string: 'San Luis'
    },
    {
      value: 'santacruz',
      string: 'Santa Cruz'
    },
    {
      value: 'santafe',
      string: 'Santa Fé'
    },
    {
      value: 'santiago',
      string: 'Santiago del Estero'
    },
    {
      value: 'tierradelfuego',
      string: 'Tierra del Fuego'
    },
    {
      value: 'tucuman',
      string: 'Tucuman'
    }
  ]

  return (
    <div className={`${style['mobile']}`}>
      <div className={`${style['info']}`}>
        <label htmlFor="age">Edad:</label>
        <input name='age' type='number' />
        <label htmlFor="email">Correo electrónico:</label>
        <input name='email' type='email' />
        <label htmlFor="name">Teléfono:</label>
        <input name='phone' type='number' />
        <label htmlFor="country">País:</label>
        <select name="country" id="country">
          <option value="argentina">Argentina</option>
        </select>
        <label htmlFor="state">Provincia:</label>
        <select name="state" id="state">
          {states.map(state => {
            return <option value={state.value}>{state.string}</option>
          })}
        </select>
      </div>
      <div className={`${style['buttons-container']}`}>
        <BackButton />
        <RegisterButton />
      </div>
    </div>
  )
}