import { getItem, setItem } from "../../utils/customHooks/useLocalStorage";
import {
  GET_ALL_USERS,
  GET_USER,
  GET_USERNAME,
  GET_PUBLICATION,
  POST_USER,
  UPDATE_USER,
  UPDATE_USER_RATE,
  USER_APPLICATION,
  UPDATE_APPLICATION_STATUS,
  DELETE_USER,
  CLEAR_USER,
  REACTIVE_ACCOUNT,
  ID_BID,
  DELETE_USER_ADMIN,
} from "../actions/userActions";

const initialState = {
  allUsers: [],
  user: {},
  userPublication: false,
  message: "",
  idBid: null,
};

export default function userReducer(
  state = getItem("user", initialState),
  action
) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USERS:
      setItem("user", { ...state, allUsers: payload });
      return getItem("user", initialState);
    case GET_USER:
    case GET_USERNAME:
    case CLEAR_USER:
    case POST_USER:
    case REACTIVE_ACCOUNT:
      setItem("user", { ...state, user: payload });
      return getItem("user", initialState);
    case UPDATE_USER:
    case UPDATE_USER_RATE:
    case USER_APPLICATION:
    case UPDATE_APPLICATION_STATUS:
    case DELETE_USER:
    case DELETE_USER_ADMIN:
      setItem("user", { ...state, message: payload });
      return getItem("user", initialState);
    case ID_BID:
      setItem("user", { ...state, idBid: payload });
      return getItem("user", initialState);
    case GET_PUBLICATION:
      const publication = state.user.Projects
        ? state.user.Projects.find(
            (project) => project.id === parseInt(payload)
          )
        : false;
      const userStatus = !publication
        ? publication
        : publication.Bid.owner === publication.Bid.user
        ? "owner"
        : "user";
      setItem("user", { ...state, userPublication: userStatus });
      return getItem("user", initialState);
    default:
      return state;
  }
}
