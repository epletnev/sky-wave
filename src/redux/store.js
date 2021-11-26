import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import Thunk from "redux-thunk";

export const getStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(Thunk))
  );
  return store;
};
