import { GET_CONTACT, GET_ENQUIRY, ADD_ENQUIRY } from "./contactType";

const initialState = {
  contact: [],
  enquiry: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACT:
      return {
        ...state,
        contact: payload,
      };
    case GET_ENQUIRY:
      return {
        ...state,
        enquiry: payload,
      };
    case ADD_ENQUIRY:
      return {
        ...state,
        enquiry: [...state.enquiry, payload],
      };
    default:
      return state;
  }
};
