import { GET_MENU } from "./menuType";

const initialState = {
  menu: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MENU:
      return {
        ...state,
        menu: payload,
      };
    default:
      return state;
  }
};
