import { HIDDEN_MESSAGE, NEW_MESSAGE } from "../actions/alertMessageActions";

const initialState = {
  success: null,
  error: null,
  className: "msg-hidden",
};

export default function alertReducer(state = initialState, action) {
  const { type, payload, statusMsg } = action;
  switch (type) {
    case NEW_MESSAGE:
      if (statusMsg === "error") {
        return { success: null, error: payload, className: "msg-show" };
      } else {
        return { success: payload, error: null, className: "msg-show" };
      }
    case HIDDEN_MESSAGE:
      return { ...state, className: "msg-hidden" };
    default:
      return state;
  }
}
