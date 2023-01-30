import { CATEGORIES } from "../actions/categoriesActions";

const initialState = {
  categories: [],
};

export default function categoriesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    default:
      return state;
  }
}
