import axios from "axios";

//URLS
const URL_STATE = "/state";
const URL_ADDRESS = "/address";

// TYPES
export const GET_ADDRESS = "GET_ADDRESS";
export const GET_STATE = "GET_STATE";
export const POST_USER_ADDRESS = "POST_USER_ADDRESS";
export const PUT_USER_ADDRESS = "PUT_USER_ADDRESS";

// ACTIONS

export const getAddress = () => async (dispatch) => {
  const response = await axios.get(URL_ADDRESS);
  const address = response.data.data;
  dispatch({ type: GET_ADDRESS, payload: address });
};

export const getState = () => async (dispatch) => {
  const response = await axios.get(URL_STATE);
  const state = response.data.data;
  dispatch({ type: GET_STATE, payload: state });
};
export const postAddress = (data) => async (dispatch) => {
  await axios.post(URL_ADDRESS, data);
  dispatch({ type: POST_USER_ADDRESS, payload: "Dirección creada con éxito." });
};
export const putAddress = (data) => async (dispatch) => {
  await axios.put(URL_ADDRESS, data);
  dispatch({
    type: PUT_USER_ADDRESS,
    payload: "Dirección actualizada con éxito.",
  });
};
