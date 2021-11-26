import { combineReducers } from "redux";
import menuReducer from "./menu/menuReducer";
import menuDetailsReducer from "./menuDetails/menuDetailsReducer";
import aboutReducer from "./about/aboutReducer";
import contactReducer from "./contact/contactReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  menuDetails: menuDetailsReducer,
  about: aboutReducer,
  contact: contactReducer,
});

export default rootReducer;
