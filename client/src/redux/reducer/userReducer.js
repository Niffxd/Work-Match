import {
  GET_ROLE,
  GET_JOB_STATE,
  GET_ALL_USERS,
  GET_USER_ID,
  POST_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../actions/userActions";

const initialState = {
  role: [],
  jobState: [],
  allUsers: [],
  user: {},
  message: "",
};

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ROLE:
      return { ...state, role: payload };
    case GET_JOB_STATE:
      return { ...state, jobState: payload };
    case GET_USER_ID:
      return { ...state, user: payload };
    case GET_ALL_USERS:
      return { ...state, allUsers: payload };
    case POST_USER:
      return { ...state, message: payload };
    case UPDATE_USER:
      return { ...state, message: payload };
    case DELETE_USER:
      return { ...state, message: payload };
    default:
      return state;
  }
}
