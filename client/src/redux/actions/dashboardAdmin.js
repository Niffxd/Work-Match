import axios from "axios";

const URL_USER = "/user";


// TYPES
export const GET_ALL_USERS = "GET_ALL_USERS";
export const DELETE_USER_ADMIN = "DELETE_USER_ADMIN";
export const UPDATE_USER_ADMIN = "UPDATE_USER_ADMIN";
export const GET_USER_EDIT = "GET_USER_EDIT";
export const GET_USER_ID_ADMIN = "GET_USER_ID_ADMIN"


// ACTIONS

//all users
export const getAllUsers = () => async (dispatch) => {
    const response = await axios.get(`${URL_USER}`);
    const getUsers = response.data.data;
    dispatch({ type: GET_ALL_USERS, payload: getUsers });
  };

  //one user
export const getUserEdit = (id) => async (dispatch) => {
    const response = await axios.get(`${URL_USER}/${id}`);
    const getUser = response.data.data[0];
    dispatch({ type: GET_USER_EDIT, payload: getUser });
  };

//delete user admin
export const deleteUserAdmin = (id) => async (dispatch) => {
    await axios.delete(`${URL_USER}/${id}`);
    dispatch({ type: DELETE_USER_ADMIN, payload: "El usuario ha sido eliminado." })
    dispatch(getAllUsers())
  };
  
  //edit user admin
export const putUserAdmin = (data, id) => async (dispatch) => {
    await axios.put(`${URL_USER}/${id}`, data);
    dispatch({
      type: UPDATE_USER_ADMIN,
      payload: "Los datos del usuario se han actualizado con éxito.",
    });
  };

  //Obtener id para eliminar al usuario 
  export const getUserIdAmin = (id) => ({
    type: GET_USER_ID_ADMIN,
    payload: id
  })