import {
    GET_USER_EDIT,
    DELETE_USER_ADMIN,
    UPDATE_USER_ADMIN ,
    GET_ALL_USERS,
    GET_USER_ID_ADMIN,
  } from "../actions/dashboardAdmin";
const initialState = {
    allUsers: [],
    userEdit: {},
    message: "",
    id: null
   
  };
  
  export default function userReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_ALL_USERS:
        return {...state, allUsers: payload}
      case GET_USER_EDIT:
        return { ...state, userEdit: payload };
      
      case UPDATE_USER_ADMIN:
        return { ...state, message: payload };
      
        case DELETE_USER_ADMIN:
        return { ...state, message: payload };

        case GET_USER_ID_ADMIN : 
        return {
          ...state, id: payload
        }
      
        default:
        return state;

    }
  }
  