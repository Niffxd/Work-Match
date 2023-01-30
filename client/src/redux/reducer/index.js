import { combineReducers } from "redux";
import addressReducer from "./addressReducer";
import categoriesReducer from "./categoriesReducer";
import projectReducer from "./projectReducer";
import userReducer from "./userReducer";

const reducer = combineReducers({
  address: addressReducer,
  categories: categoriesReducer,
  project: projectReducer,
  user: userReducer,
});

export default reducer;
