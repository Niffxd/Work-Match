import { combineReducers } from "redux";
import addressReducer from "./addressReducer";
import categoriesReducer from "./categoriesReducer";
import userReducer from "./userReducer";

const reducer = combineReducers({
  address: addressReducer,
  categories: categoriesReducer,
  user: userReducer,
});

export default reducer;
