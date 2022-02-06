import { ActionTypes } from "../constant/auth_action_type";

export const setUserData = (userData) => {
  return {
    type: ActionTypes.SET_USER_DATA,
    payload: userData,
  };
};
