import Desktop from '../../components/Register/Desktop'
import Mobile from '../../components/Register/Mobile'
import style from '../../components/Register/register.module.css'

export default function Register() {
  return (
    <div className={`${style['register']}`}>
      <Desktop />
      <Mobile />
    </div>
  );
}
