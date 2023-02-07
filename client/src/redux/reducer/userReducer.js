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
  DELETE_USER_ADMIN
} from "../actions/userActions";

const initialState = {
  allUsers: [],
  user: {},
  userPublication: false,
  message: "",
  idBid: null,
};

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USERS:
      return { ...state, allUsers: payload };
    case GET_USER:
    case GET_USERNAME:
    case CLEAR_USER:
    case POST_USER:
    case REACTIVE_ACCOUNT:
      return { ...state, user: payload };
    case UPDATE_USER:
    case UPDATE_USER_RATE:
    case USER_APPLICATION:
    case UPDATE_APPLICATION_STATUS:
    case DELETE_USER:
    case DELETE_USER_ADMIN:
      return { ...state, message: payload };
    case ID_BID:
      return { ...state, idBid: payload };
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
      return { ...state, userPublication: userStatus };
    default:
      return state;
  }
}
