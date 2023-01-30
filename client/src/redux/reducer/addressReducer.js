import {
  GET_COUNTRY,
  GET_STATE,
  GET_CITY,
  GET_USER_ADDRESS,
  POST_USER_ADDRESS,
  PUT_USER_ADDRESS,
} from "../actions/addressActions";

const initialState = {
  country: [],
  state: [],
  city: [],
  userAddress: [],
  message: "",
};

export default function addressReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_COUNTRY:
      return { ...state, country: payload };
    case GET_STATE:
      return { ...state, state: payload };
    case GET_CITY:
      return { ...state, city: payload };
    case GET_USER_ADDRESS:
      return { ...state, userAddress: payload };
    case POST_USER_ADDRESS:
      return { ...state, message: payload };
    case PUT_USER_ADDRESS:
      return { ...state, message: payload };
    default:
      return state;
  }
}
