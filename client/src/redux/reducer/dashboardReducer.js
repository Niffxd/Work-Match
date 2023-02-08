import { getItem, setItem } from "../../utils/customHooks/useLocalStorage";
import {
  GET_USER_EDIT,
  DELETE_USER_ADMIN,
  UPDATE_USER_ADMIN,
  GET_ALL_USERS,
} from "../actions/dashboardAdmin";
const initialState = {
  allUsers: [],
  userEdit: {},
  message: "",
};

export default function userReducer(
  state = getItem("admin", initialState),
  action
) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USERS:
      setItem("admin", { ...state, allUsers: payload });
      return getItem("admin", initialState);
    case GET_USER_EDIT:
      setItem("admin", { ...state, userEdit: payload });
      return getItem("admin", initialState);
    case UPDATE_USER_ADMIN:
      setItem("admin", { ...state, message: payload });
      return getItem("admin", initialState);
    case DELETE_USER_ADMIN:
      setItem("admin", { ...state, message: payload });
      return getItem("admin", initialState);
    default:
      return state;
  }
}