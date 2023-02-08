import styles from "./dashboardAdmin.module.css";
import DashboardCard from "./DashboardCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAddress, getState } from "../../redux/actions/addressActions";
import { getCategories } from "../../redux/actions/categoriesActions";
import { getProjects } from "../../redux/actions/projectActions";
import { getAllUsers } from "../../redux/actions/userActions";

const DashboardAdmin = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(()  => {
     dispatch(getAllUsers())
    .then(() => dispatch(getState()))
    .then(() => dispatch(getAddress()))
    .then(() => dispatch(getCategories()))
    .then(() => dispatch(getProjects()))
 .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <div className={`${styles["container"]}`}>
      <div className={`${styles["containerPrimerUl"]}`}>
        <ul className={`${styles["display_ul"]}`}>
          <li>
            <h4>Id</h4>
          </li>
          <li>
            <h4>Nombre</h4>
          </li>
          <li>
            <h4>Rol</h4>
          </li>
          <li>
            <h4>Accion</h4>
          </li>
        </ul>
        <hr />
        {user.allUsers && Object.values(user.allUsers).length > 0 ? user.allUsers.map((x) => (
          <DashboardCard
            key={x.id}
            id={x.id}
            imagen={x.image}
            Nombre={x.name}
            publicaciones={x.Projects}
          />
        )): <div><h4>NO HAY USUARIOS</h4></div>} 
      </div>
    </div>
  );
};

export default DashboardAdmin;
