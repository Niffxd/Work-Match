import styles from "./dashboardAdmin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getPublication } from "../../redux/actions/userActions";
import {getProjectId} from "../../redux/actions/projectActions"

import { useHistory } from "react-router-dom";

import deletet from "../../assets/images/delete.png";
import trespuntos from "../../assets/images/trespuntos.png";
import edit from "../../assets/images/edit.png";
const DashboardCard = ({ id, imagen, Nombre, publicaciones }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.user);
  
  let rol = Object.values(publicaciones).map((x) => x.Bid.owner);
  
  if (rol !== user.allUsers.id) {
    rol = "Empleador";
  } else {
    rol = "Empleado";
  }
  
  const handleDelete = (id) => {  
    if(window.confirm("estas seguro de eliminar")){
      dispatch(deleteUser(id))
    }
  }

  const handleUpdate= (id) => {
    history.push(`/my-profile/admin/${id}`);
  }

  const  handleUpdateProjects = async (id) => {
  await dispatch(getPublication(id));
  await dispatch(getProjectId(id));
  history.push(`/edit-job-offer`)
  }

 

  return (
    <details>
      <summary className={`${styles["summary"]}`}>
        <ul>
          <li>
            <h4>
              {id}
            </h4>
          </li>
          <li>
            <h4 >
              {Nombre}
            </h4>
          </li>
          <li>
            <h4>{rol}</h4>
          </li>
          <div className={`${styles["container_btn"]}`}>
          <button  className={`${styles["buttonDelete_edit"]}`} onClick={() => handleUpdate(id)}  >
              <img
               src={edit}
               alt="btn"
               />
            </button>
      
           <button  className={`${styles["buttonDelete_edit"]}`} onClick={() => handleDelete(id)}  >
              <img
               src={deletet}
               alt="btn_delete"
               />
           </button>
   
               </div>
        </ul>
 
      </summary>
 
      <div className={`${styles["background_detalle"]}`}>
        <div className={`${styles["detalle"]}`}>
          <ul>
            <li>
              <h4>Publicacion</h4>
            </li>
            <li>
              <h4>Titulo</h4>
            </li>
            <li>
              <h4>Status</h4>
            </li>
            <li>
              <h4>Accion</h4>
            </li>
          </ul>
        </div>
        <hr />
 
        {Object.keys(publicaciones).length > 0 ? (
          publicaciones.map((x) => (
            <div className={`${styles["detalle"]}`} key={x.id}>
              <ul>
                <li>
                  <h4>#{x.Category.id}</h4>
                </li>
                <li>
                  <h4>{x.Category.name}</h4>
                </li>
                <li>
                  <h4>{x.Bid.status}</h4>
                </li>
                <button className={`${styles["button"]}`} onClick={() =>{ handleUpdateProjects(x.id)}} >
                <img
                  src={trespuntos}
                  alt="btn"
                  />
                  </button>
              </ul>
            </div>
          ))
        ) : (
          <div className={`${styles["detalleSiNoHayActividad"]}`}>
            <h4>NO HAY CATEGORIAS </h4>
          </div>
        )}
      </div>
    </details>
  );
};

export default DashboardCard;