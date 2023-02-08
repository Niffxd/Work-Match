import { getItem, setItem } from "../../utils/customHooks/useLocalStorage";
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

export default function addressReducer(
  state = getItem("address", initialState),
  action
) {
  const { type, payload } = action;
  switch (type) {
    case GET_ADDRESS:
      setItem("address", { ...state, address: payload });
      return getItem("address", initialState);
    case GET_STATE:
      setItem("address", { ...state, states: payload });
      return getItem("address", initialState);
    case POST_USER_ADDRESS:
      setItem("address", { ...state, message: payload });
      return getItem("address", initialState);
    case PUT_USER_ADDRESS:
      setItem("address", { ...state, message: payload });
      return getItem("address", initialState);
    default:
      return state;
  }
}
