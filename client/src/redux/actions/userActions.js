import axios from "axios";

//URLS
const URL_ROLE = "http://localhost:3001/role";
const URL_JOB_STATE = "http://localhost:3001/jobState";
const URL_USER = "http://localhost:3001/user";

// TYPES
export const GET_ROLE = "GET_ROLE";
export const GET_JOB_STATE = "GET_JOB_STATE";
export const GET_USER_ID = "GET_USER_ID";
export const POST_USER = "POST_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";

// ACTIONS

export const getRole = () => async (dispatch) => {
  const response = await axios.get(URL_ROLE);
  const roles = response.data.data;
  dispatch({ type: GET_ROLE, payload: roles });
};

export const getJobState = () => async (dispatch) => {
  const response = await axios.get(URL_JOB_STATE);
  const jobState = response.data.data;
  dispatch({ type: GET_JOB_STATE, payload: jobState });
};

export const getUserId = (id) => async (dispatch) => {
  const response = await axios.get(`${URL_USER}/${id}`);
  const getUser = response.data.data;
  dispatch({ type: GET_USER_ID, payload: getUser });
};

export const postUser = (data) => async (dispatch) => {
  const response = await axios.post(URL_USER, data);
  dispatch({ type: POST_USER, payload: "El usuario se ha creado con éxito." });
};

export const putUser = (data) => async (dispatch) => {
  const response = await axios.put(URL_USER, data);
  dispatch({
    type: UPDATE_USER,
    payload: "Los datos del usuario se han actualizado con éxito.",
  });
};

export const deleteUser = (id) => async (dispatch) => {
  const response = await axios.delete(URL_USER);
  dispatch({ type: DELETE_USER, payload: "El usuario ha sido eliminado." });
};
