import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducer from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};

const middlewares = [thunk];
const persistedReducer = persistReducer(persistConfig, reducer);

const logger = createLogger({
  collapsed: true,
});
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === "development") {
  //@ts-ignore
  middlewares.push(logger);
}

export default () => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
