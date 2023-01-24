import { configureStore ,ThunkAction, Action} from "@reduxjs/toolkit";
import counterReducer from "../../features/slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
