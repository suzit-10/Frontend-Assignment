import { ActionTypes } from "../constant/auth_action_type";

const initialState = {
  userData: {},
};
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER_DATA:
      return { ...initialState, userData: payload };

    default:
      return state;
  }
};
export { authReducer };
