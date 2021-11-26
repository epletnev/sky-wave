import { GET_MENU_DETAILS, GET_REVIEWS, ADD_REVIEW } from "./menuDetailsType";

const initialState = {
  menuDetails: [],
  reviews: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MENU_DETAILS:
      return {
        ...state,
        menuDetails: payload,
      };
    case GET_REVIEWS:
      return {
        ...state,
        reviews: payload.reviews,
      };
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, payload],
      };
    default:
      return state;
  }
};
