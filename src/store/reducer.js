import { combineReducers } from "redux";

import common from "./common";
import auth from "./auth";

const rootReducer = combineReducers({
  common,
  auth,
});

const appReducer = (state, action) =>
  action.type === "RESET_STORE"
    ? rootReducer(rootReducer(undefined, action), action)
    : rootReducer(state, action);

export default appReducer;
