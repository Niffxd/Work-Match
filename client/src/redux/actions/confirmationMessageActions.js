// TYPES
export const CONFIMATION_WINDOW_OPEN = "CONFIMATION_WINDOW_OPEN";
export const CONFIMATION_WINDOW_CLOSE = "CONFIMATION_WINDOW_CLOSE";

// ACTIONS
export const confirmationOpen = () => ({ type: CONFIMATION_WINDOW_OPEN });

export const confirmationClose = () => ({ type: CONFIMATION_WINDOW_CLOSE });
