import { TYPES } from "./actions";
import { composeReducer } from "redux-compose-reducer";

const initialState = {
  isInit: false,
};

export const setGapiInit = (state, action) => {
  return { ...state, isInit: action.payload };
};

export default composeReducer({
  types: TYPES,
  initialState,
  reducers: {
    setGapiInit,
  },
});
