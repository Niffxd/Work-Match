import { getItem, setItem } from "../../utils/customHooks/useLocalStorage";
import { CATEGORIES } from "../actions/categoriesActions";

const initialState = {
  categories: [],
};

export default function categoriesReducer(
  state = getItem("category", initialState),
  action
) {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES:
      setItem("category", {
        ...state,
        categories: payload,
      });
      return getItem("category", initialState);

    default:
      return state;
  }
}
