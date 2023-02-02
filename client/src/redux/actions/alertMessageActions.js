// TYPES
export const NEW_MESSAGE = "NEW_MESSAGE";
export const HIDDEN_MESSAGE = "HIDDEN_MESSAGE";

// ACTIONS
export const newMessage = (message, statusMsg) => ({
  type: NEW_MESSAGE,
  payload: message,
  statusMsg,
});

export const hiddenMessage = () => ({
  type: HIDDEN_MESSAGE,
});
