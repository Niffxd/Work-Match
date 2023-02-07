import {
    GET_USER,
    DELETE_USER_ADMIN,
    UPDATE_USER_ADMIN ,
    GET_ALL_USERS
  } from "../actions/dashboardAdmin";
const initialState = {
    allUsers: [],
    user: {},
    message: "",
   
  };
  
  export default function userReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_ALL_USERS:
        return {...state, allUsers: payload}
      case GET_USER:
        return { ...state, user: payload };
      
      case UPDATE_USER_ADMIN:
        return { ...state, message: payload };
      
        case DELETE_USER_ADMIN:
        return { ...state, message: payload };
      default:
        return state;
    }
  }
  