import axios from "axios";

//URLS
const URL_USER = "/user";
const URL_APPLICATION = "/bid";

// TYPES
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USER = "GET_USER";
export const GET_PUBLICATION = "GET_PUBLICATION";
export const POST_USER = "POST_USER";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_RATE = "UPDATE_USER_RATE";
export const USER_APPLICATION = "USER_APPLICATION";
export const UPDATE_APPLICATION_STATUS = "UPDATE_APPLICATION_STATUS";
export const DELETE_USER = "DELETE_USER";

// ACTIONS

//all users
export const getAllUsers = () => async (dispatch) => {
  const response = await axios.get(`${URL_USER}`);
  const getUsers = response.data.data;
  dispatch({ type: GET_ALL_USERS, payload: getUsers });
};

//one user
export const getUserId = (id) => async (dispatch) => {
  const response = await axios.get(`${URL_USER}/${id}`);
  const getUser = response.data.data[0];
  dispatch({ type: GET_USER, payload: getUser });
};

//view one user's one publication
export const getPublication = (idProject) => ({
  type: GET_PUBLICATION,
  payload: idProject,
});

//register user
export const postUser = (data) => async (dispatch) => {
  const newUser = await axios.post(URL_USER, data);
  dispatch({ type: POST_USER, payload: newUser.data });
};

//edit user
export const putUser = (data) => async (dispatch) => {
  await axios.put(URL_USER, data);
  dispatch({
    type: UPDATE_USER,
    payload: "Los datos del usuario se han actualizado con éxito.",
  });
};

//rate user
export const putRateUser = (data) => async (dispatch) => {
  await axios.put(`${URL_USER}/rate`, data);
  dispatch({
    type: UPDATE_USER_RATE,
    payload: "La puntuación del usuario se ha actualizado con éxito.",
  });
};

//create user application
export const userApplication = (data) => async (dispatch) => {
  const newUser = await axios.post(URL_APPLICATION, data);
  dispatch({
    type: USER_APPLICATION,
    payload: newUser,
  });
};

//update application status
export const updateApplicationStatus = (data) => async (dispatch) => {
  await axios.put(URL_APPLICATION, data);
  dispatch({
    type: UPDATE_APPLICATION_STATUS,
    payload: "El estado de la applicación se actualizó con éxito.",
  });
};

//delete user
export const deleteUser = (id) => async (dispatch) => {
  await axios.delete(`${URL_USER}/${id}`);
  dispatch({ type: DELETE_USER, payload: "El usuario ha sido eliminado." });
};
