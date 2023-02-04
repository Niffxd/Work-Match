import { useParams, NavLink } from "react-router-dom";
import EmployeeApplications from "../../../components/EmployeeProfile/Applications/Applications";
import EmployeeMatches from "../../../components/EmployeeProfile/Matches/Matches";
import style from "./employeeProfile.module.css";

export default function EmployeeProfile() {
  const { type } = useParams();
  return (
    <>
      <header className={`${style["header"]}`}>
        <nav className={`${style["nav"]}`}>
          <NavLink
            className={`${style["link"]}`}
            activeClassName={`${style["active"]}`}
            to='/my-profile/employee/applications'
          >
            Postulaciones
          </NavLink>
          <NavLink
            className={`${style["link"]}`}
            activeClassName={`${style["active"]}`}
            to='/my-profile/employee/matches'
          >
            Matches
          </NavLink>
        </nav>
      </header>
      <div className={`container ${style["container"]}`}>
        {type === "applications" && <EmployeeApplications />}
        {type === "matches" && <EmployeeMatches />}
      </div>
    </>
  );
}
