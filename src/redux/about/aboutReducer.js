import { GET_ABOUT } from "./aboutType";

const initialState = {
  about: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ABOUT:
      return {
        ...state,
        about: payload,
      };
    default:
      return state;
  }
};
