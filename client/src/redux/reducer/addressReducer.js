import {
  GET_ADDRESS,
  GET_STATE,
  POST_USER_ADDRESS,
  PUT_USER_ADDRESS,
} from "../actions/addressActions";

const initialState = {
  address: [],
  states: [],
  message: "",
};

export default function addressReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ADDRESS:
      return { ...state, address: payload };
    case GET_STATE:
      return { ...state, states: payload };
    case POST_USER_ADDRESS:
      return { ...state, message: payload };
    case PUT_USER_ADDRESS:
      return { ...state, message: payload };
    default:
      return state;
  }
}
