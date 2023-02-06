/** @format */

import { useAuth0 } from "@auth0/auth0-react";
import style from '../Register/buttons.module.css'

export const SignInButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
      <button className={style['login-auth0']} onClick={() => loginWithRedirect()}>Ingresa con Google</button>
  );
};
