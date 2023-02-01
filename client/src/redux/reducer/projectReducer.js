import {
  GET_PROJECTS,
  GET_PROJECT_ID,
  CLEAR_PROJECT_ID,
  POST_PROJECT,
  PUT_PROJECT,
  DELETE_PROJECT,
} from "../actions/projectActions";

const initialState = {
  allProjects: [],
  oneProject: {},
  message: "",
};

export default function projectReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROJECTS:
      return { ...state, allProjects: payload };
    case GET_PROJECT_ID:
      return { ...state, oneProject: payload };
    case CLEAR_PROJECT_ID:
      return { ...state, oneProject: {} };
    case POST_PROJECT:
      return { ...state, oneProject: payload };
    case PUT_PROJECT:
      return { ...state, message: payload };
    case DELETE_PROJECT:
      return { ...state, message: payload };
    default:
      return state;
  }
}
