import { NavLink, useParams } from "react-router-dom";
import EmployerMatches from "../../../components/EmployerProfile/Matches/Matches";
import EmployerPostulates from "../../../components/EmployerProfile/Postulates/Postulates";
import EmployerPublications from "../../../components/EmployerProfile/Publications/Publications";
import style from "./employerProfile.module.css";

export default function EmployerProfile() {
  const { type } = useParams();
  return (
    <>
      <header className={`${style["header"]}`}>
        <nav className={`${style["nav"]}`}>
          <NavLink
            className={`${style["link"]}`}
            activeClassName={`${style["active"]}`}
            to='/my-profile/employer/publications'
          >
            Publicaciones
          </NavLink>
          <NavLink
            className={`${style["link"]}`}
            activeClassName={`${style["active"]}`}
            to='/my-profile/employer/postulates'
          >
            Postulados
          </NavLink>
          <NavLink
            className={`${style["link"]}`}
            activeClassName={`${style["active"]}`}
            to='/my-profile/employer/matches'
          >
            Matches
          </NavLink>
        </nav>
      </header>
      <div className={`container ${style["container"]}`}>
        {type === "publications" && <EmployerPublications />}
        {type === "postulates" && <EmployerPostulates />}
        {type === "matches" && <EmployerMatches />}
      </div>
    </>
  );
}
