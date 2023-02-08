import styles from "./dashboardAdmin.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {newMessage} from "../../redux/actions/alertMessageActions" 
import { deleteUser, getPublication } from "../../redux/actions/userActions";
import {getProjectId} from "../../redux/actions/projectActions"
import ConfirmationMessage from "../ConfirmationMessage/ConfirmationMessage"
import deletet from "../../assets/images/delete.png";
import trespuntos from "../../assets/images/trespuntos.png";
import edit from "../../assets/images/edit.png";
import { confirmationOpen } from "../../redux/actions/confirmationMessageActions";

const DashboardCard = ({ id, imagen, Nombre, publicaciones }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [visible, setVisible] = useState("visible");
  const user = useSelector((state) => state.user);
  

 let rol      = "Inactivo";
let empleador = false;
let empleado  = false;
let flag      = true;
let i         = 0;

while (flag && i < publicaciones.length) {
  if (publicaciones[i] && publicaciones[i].Bid.status === "Owner") {
    empleador = true;
    i += 1;
  } else if (publicaciones[i] && publicaciones[i].Bid.status !== "Owner") {
    empleado = true;
    i += 1;
  }
  if (empleador && empleado) {
    flag = false;
  }
}

 empleador  &&  empleado  &&   (rol = 'Ambos')
 empleador  && !empleado  &&   (rol = 'Empleador')
!empleador  &&  empleado  &&   (rol = 'Empleado')

let  usuario = Object.values(user.allUsers).map( x => x )

 
let blocked = usuario.map((x) => {
    if(x.blocked === true){
    return "bloqueado"
  } else {
    return "desbloqueado"
  }
})
// console.log(blocked)

  const confirmationHandler = async (event) => {
    event.preventDefault()
  await dispatch(confirmationOpen())
  }
  const handleDelete = (id) => {  
    dispatch(newMessage("El usuario fue eliminado con exito", "success"))
    dispatch(deleteUser(id))
    setVisible("invisible");    
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
    <>
    <ConfirmationMessage
      message="¿Quieres eliminar este usuario?"
      handler={handleDelete}
      />
    <details className={`${ visible ==="invisible"? styles["invisible"] : styles[""]}`} >
      <summary className={`${ blocked === "bloqueado" ? styles["marco_rojo"] : styles["summary"]  }`}>
        <ul className={`${ styles["ul_items"] }`} >
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
              <img
               src={edit}
               alt="btn"
               className={`${styles["buttonDelete_edit"]}`} 
               onClick={() => handleUpdate(id)}
               />
              <img
               src={deletet}
               alt="btn_delete"
               className={`${styles["buttonDelete_edit"]}`} 
               onClick={() => handleDelete(id)} 
               />
   
               </div>
        </ul>
 
      </summary>
 
      <div className={`${styles["background_detalle"]}`}>
          <ul className={`${styles["ul_detalle"]}`} >
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
        <hr />
 
        { Object.keys(publicaciones).length > 0 ? (
          publicaciones.map((x) => (
            <div className={`${styles["detalle"]}`} key={x.id}>
              <ul className={`${styles["ul_detalle"]}`}>
                <li>
                  <h4>#{x.Category.id}</h4>
                </li>
                <li>
                  <h4>{x.Category.name}</h4>
                </li>
                <li>
                  <h4>{x.Bid.status}</h4>
                </li>
                <img
                  src={trespuntos}
                  alt="btn"
                  className={`${styles["button"]}`} 
                  onClick={() =>{ handleUpdateProjects(x.id)}}
                  />
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
  </>
  );
};

export default DashboardCard;