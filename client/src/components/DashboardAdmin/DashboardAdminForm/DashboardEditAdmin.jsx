import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {useParams} from "react-router-dom"
import styles from "./dashboardEditAdmin.module.css"
import { getUserEdit } from "../../../redux/actions/dashboardAdmin";
import { putUserAdmin } from "../../../redux/actions/dashboardAdmin";
import { useHistory } from "react-router-dom";
import {newMessage} from "../../../redux/actions/alertMessageActions"

const DashboardEditAdmin = () => {
  
  const history = useHistory()
  
  const {id} = useParams()
  
  const dispatch = useDispatch()
  
  const user = useSelector(state => state.admin)
  
  const [value, setValue] = useState({
    name: "",
    role: "",
    category: "", 
    blocked: false
  })

  useEffect(()=> {
  dispatch(getUserEdit(id))
  }, [id]) //eslint-disable-line
   
    const handleSubmit =(e) => {
      e.preventDefault();
      dispatch(putUserAdmin(value,id))
      history.push("/my-profile/admin")
      dispatch(newMessage("El usuario fue actualizado con exito", "sucess"))
    }
    const handleChange = (e) => {
      setValue((state) => ({
        ...state,
        [e.target.name]: e.target.type === "checkbox" ? e.target.checked: e.target.value
      }))
    }
    
    console.log(value)
     
    useEffect(()=> {
        if(user.userEdit){
          setValue({...user.userEdit})
        }
      },[user.userEdit])

        return (
          <div className={`container`}>
          <form onSubmit={handleSubmit} className={`${styles["form"]}`} >
           <div className={`${styles["container"]}`} >
           <label>FullName</label>
           <input
           type="text"
           placeholder="Nombre requerido"
           value={value.name ||""}
           name="name"
           onChange={handleChange}
           />
           <label> Rango</label>
           <select className={`${styles["select"]}`} value={value.role || ""} name="role" onChange={handleChange}>
             <option value="">Seleccione  </option>
             <option value="1"> Admin</option>
             <option value="2"> Usuario </option>
           </select>
           
           <div className={`${styles["div_checked"]}`}>
           <label className={`${styles["label_checked"]}`} >Bloquear usuario</label>
           <input className={`${styles["checked"]}`} type="checkbox"  name="blocked" onChange={handleChange} checked={value.blocked }/>
           </div>
           <div className="buttons-container">
           <button className="button-purple" onClick={() => history.push("/my-profile/admin")} >
             Back
           </button> 
           <button className="button-green" type="submit">Save</button>
           </div>
             </div>
            
          </form>
   </div>

    )
}

export default DashboardEditAdmin
