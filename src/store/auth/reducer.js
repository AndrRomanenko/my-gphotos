import { TYPES } from "./actions";
import { composeReducer } from "redux-compose-reducer";

const initialState = {
  isLoggedIn: false,
  user: {
    name: "",
    email: "",
  },
  gapiData: null,
};

export const setAuthStatus = (state, action) => {
  return { ...state, isLoggedIn: action.payload };
};

export const authSuccess = (state, action) => {
  return {
    ...state,
    isLoggedIn: true,
    user: action.payload.user,
    gapiData: action.payload.gapiData,
  };
};

export default composeReducer({
  types: TYPES,
  initialState,
  reducers: {
    setAuthStatus,
    authSuccess,
  },
});
