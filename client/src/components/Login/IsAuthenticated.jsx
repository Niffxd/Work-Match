/** @format */

// import { LoginButton } from './components/loginbtn/LoginsigIn';
import { Link } from "react-router-dom";
import { Profile } from "./Profile";
import { SignOutButton } from "./SignOutbutton";
import { useAuth0 } from "@auth0/auth0-react";
function IsAuthenticated() {
  const { isAuthenticated, user } = useAuth0();
  console.log(user);
  return (
    <div>
      {isAuthenticated ? (
        <>
          <Profile />
          <SignOutButton />
        </>
      ) : (
        <Link to="/Login">
          <button>LOGIN</button>
        </Link>
      )}
    </div>
  );
}

export default IsAuthenticated;
