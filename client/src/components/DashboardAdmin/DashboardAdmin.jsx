/** @format */

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
  //Hola Mundo
  useEffect(() => {
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
        {!!user.allUsers.length ? (
          user.allUsers
            .filter((item) => item.id !== user.user.id)
            .map((cardUser) => {
              return (
                <DashboardCard
                  key={cardUser.id}
                  id={cardUser.id}
                  imagen={cardUser.image}
                  Nombre={cardUser.name}
                  publicaciones={cardUser.Projects}
                />
              );
            })
        ) : (
          <div>
            <h4>NO HAY USUARIOS</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardAdmin;
