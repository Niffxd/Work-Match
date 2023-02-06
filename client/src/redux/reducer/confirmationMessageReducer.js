import {
  CONFIMATION_WINDOW_CLOSE,
  CONFIMATION_WINDOW_OPEN,
} from "../actions/confirmationMessageActions";

const initialState = {
  confirmationMessage: "invisible",
};

export default function confirmationReducer(state = initialState, action) {
  switch (action.type) {
    case CONFIMATION_WINDOW_OPEN:
      return { ...state, confirmationMessage: "visible" };
    case CONFIMATION_WINDOW_CLOSE:
      return { ...state, confirmationMessage: "invisible" };
    default:
      return state;
  }
}
