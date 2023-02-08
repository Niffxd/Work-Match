import { combineReducers } from "redux";
import addressReducer from "./addressReducer";
import alertReducer from "./alertMessageReducer";
import categoriesReducer from "./categoriesReducer";
import confirmationReducer from "./confirmationMessageReducer";
import projectReducer from "./projectReducer";
import userReducer from "./userReducer";
import dashboardReducer from "./dashboardReducer";

const reducer = combineReducers({
  address: addressReducer,
  alert: alertReducer,
  categories: categoriesReducer,
  confirmation: confirmationReducer,
  project: projectReducer,
  user: userReducer,
  admin: dashboardReducer,
});

export default reducer;
