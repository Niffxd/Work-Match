import axios from "axios";

//URLS
const URL_COUNTRY = "http://localhost:3001/country";
const URL_STATE = "http://localhost:3001/state";
const URL_CITY = "http://localhost:3001/city";
const URL_ADDRESS = "http://localhost:3001/address";
const URL_GET_ADDRESS = "http://localhost:3001/user";

// TYPES
export const GET_COUNTRY = "GET_COUNTRY";
export const GET_STATE = "GET_STATE";
export const GET_CITY = "GET_CITY";
export const GET_USER_ADDRESS = "GET_USER_ADDRESS";
export const POST_USER_ADDRESS = "POST_USER_ADDRESS";
export const PUT_USER_ADDRESS = "PUT_USER_ADDRESS";

// ACTIONS

export const getCountry = () => async (dispatch) => {
  const response = await axios.get(URL_COUNTRY);
  const country = response.data.data;
  dispatch({ type: GET_COUNTRY, payload: country });
};
export const getState = () => async (dispatch) => {
  const response = await axios.get(URL_STATE);
  const state = response.data.data;
  dispatch({ type: GET_STATE, payload: state });
};
export const getCity = () => async (dispatch) => {
  const response = await axios.get(URL_CITY);
  const city = response.data.data;
  dispatch({ type: GET_CITY, payload: city });
};
export const getAddress = (idUser) => async (dispatch) => {
  const response = await axios.get(`${URL_GET_ADDRESS}/${idUser}/address`);
  const address = response.data.data;
  dispatch({ type: GET_USER_ADDRESS, payload: address });
};
export const postAddress = (data) => async (dispatch) => {
  const response = await axios.post(URL_ADDRESS, data);
  dispatch({ type: POST_USER_ADDRESS, payload: "Dirección creada con éxito." });
};
export const putAddress = (data) => async (dispatch) => {
  const response = await axios.put(URL_ADDRESS, data);
  dispatch({
    type: PUT_USER_ADDRESS,
    payload: "Dirección actualizada con éxito.",
  });
};
