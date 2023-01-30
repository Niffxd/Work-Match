import axios from "axios";

//URLS
const URL_ROLE = "/role";
const URL_JOB_STATE = "/jobState";
const URL_USER = "/user";

// TYPES
export const GET_ROLE = "GET_ROLE";
export const GET_JOB_STATE = "GET_JOB_STATE";
export const GET_ALL_USERS = "GET_ALL_USERS";
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

export const getAllUsers = () => async (dispatch) => {
  const response = await axios.get(`${URL_USER}`);
  const getAllUsers = response.data.data;
  dispatch({ type: GET_USER_ID, payload: getAllUsers });
};

export const getUserId = (id) => async (dispatch) => {
  const response = await axios.get(`${URL_USER}/${id}`);
  const getUser = response.data.data;
  dispatch({ type: GET_USER_ID, payload: getUser });
};

export const postUser = (data) => async (dispatch) => {
  await axios.post(URL_USER, data);
  dispatch({ type: POST_USER, payload: "El usuario se ha creado con éxito." });
};

export const putUser = (data) => async (dispatch) => {
  await axios.put(URL_USER, data);
  dispatch({
    type: UPDATE_USER,
    payload: "Los datos del usuario se han actualizado con éxito.",
  });
};

export const deleteUser = (id) => async (dispatch) => {
  await axios.delete(URL_USER);
  dispatch({ type: DELETE_USER, payload: "El usuario ha sido eliminado." });
};
