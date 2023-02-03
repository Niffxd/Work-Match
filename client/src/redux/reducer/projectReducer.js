import {
  GET_PROJECTS,
  GET_PROJECT_ID,
  CLEAR_PROJECT_ID,
  POST_PROJECT,
  PUT_PROJECT,
  DELETE_PROJECT,
  GET_OWNER,
  ITEMS_PER_PAGE,
  CURRENT_PAGE,
} from "../actions/projectActions";

const initialState = {
  allProjects: [],
  oneProject: {},
  owner: {},
  projectsPerPage: [],
  currentPage: 1,
  message: "",
};

export default function projectReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROJECTS:
      return { ...state, allProjects: payload };
    case GET_PROJECT_ID:
      return { ...state, oneProject: payload };
    case GET_OWNER:
      return { ...state, owner: payload };
    case CLEAR_PROJECT_ID:
      return { ...state, oneProject: {}, owner: {} };
    case POST_PROJECT:
      return { ...state, oneProject: payload };
    case PUT_PROJECT:
      return { ...state, message: payload };
    case DELETE_PROJECT:
      return { ...state, message: payload };
    case ITEMS_PER_PAGE:
      const itemsPerPage = state.allProjects.slice(payload.min, payload.max);
      return { ...state, projectsPerPage: itemsPerPage };
    case CURRENT_PAGE:
      return { ...state, currentPage: payload };
    default:
      return state;
  }
}
