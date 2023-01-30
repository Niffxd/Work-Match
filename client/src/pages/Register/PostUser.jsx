import '../../styles/normalize.css';
import '../../styles/index.css';
import Desktop from '../../components/Register/Desktop'
import Complete from '../../components/Register/Complete'
import style from '../../components/Register/register.module.css'

export default function Register() {
  return (
    <div className={`${style['register']}`}>
      <Desktop />
      <Complete />
    </div>
  );
}
