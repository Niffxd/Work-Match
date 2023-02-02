import {
  GET_ALL_USERS,
  GET_USER,
  GET_PUBLICATION,
  POST_USER,
  UPDATE_USER,
  UPDATE_USER_RATE,
  USER_APPLICATION,
  UPDATE_APPLICATION_STATUS,
  DELETE_USER,
} from "../actions/userActions";

const initialState = {
  allUsers: [],
  user: {},
  userPublication: false,
  message: "",
};

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USERS:
      return { ...state, allUsers: payload };
    case GET_USER:
    case POST_USER:
      return { ...state, user: payload };
    case UPDATE_USER:
      return { ...state, message: payload };
    case UPDATE_USER_RATE:
      return { ...state, message: payload };
    case USER_APPLICATION:
      return { ...state, message: payload };
    case UPDATE_APPLICATION_STATUS:
      return { ...state, message: payload };
    case DELETE_USER:
      return { ...state, message: payload };
    default:
      return state;
  }
}
