import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {useParams} from "react-router-dom"
import styles from "./dashboardEditAdmin.module.css"
import { getUserId } from "../../../redux/actions/dashboardAdmin";
import { putUserAdmin } from "../../../redux/actions/dashboardAdmin";
import { useHistory } from "react-router-dom";

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
  dispatch(getUserId(id))
  }, [id]) //eslint-disable-line
   
    const handleSubmit =(e) => {
      e.preventDefault();
      dispatch(putUserAdmin(value,id))
      history.push("/my-profile/admin")
    }
    const handleChange = (e) => {
      setValue((state) => ({
        ...state,
        [e.target.name]: e.target.type === "checkbox" ? e.target.checked: e.target.value
      }))
    }
    
    console.log(value)
     
    useEffect(()=> {
        if(user.user){
          setValue({...user.user})
        }
      },[user.user])

        return (
      <div className={`${styles["background"]}`}>

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
      
            <select value={value.role || ""} name="role" onChange={handleChange}>
              <option value="">Seleccione  </option>
              <option value="1"> Admin</option>
              <option value="2"> Usuario </option>
            </select>
            
            <div className={`${styles["div_checked"]}`}>
            <label>Bloquear usuario</label>
            <input className={`${styles["checked"]}`} type="checkbox"  name="blocked" onChange={handleChange} checked={value.check }/>
            </div>
              
            <button type="submit">Save</button>
              </div>
           </form>
</div>
    )
}

export default DashboardEditAdmin
