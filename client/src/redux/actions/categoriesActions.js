import axios from "axios";

// URL
const URL = "/category";

// TYPES
export const CATEGORIES = "CATEGORIES";

// ACTIONS
export const getCategories = () => async (dispatch) => {
  const response = await axios.get(URL);
  const categories = response.data.data;
  dispatch({ type: CATEGORIES, payload: categories });
};
