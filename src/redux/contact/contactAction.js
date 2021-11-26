import { GET_CONTACT, GET_ENQUIRY, ADD_ENQUIRY } from "./contactType";
import axios from "axios";

// get contact data
export const getContact = () => async (dispatch) => {
  const result = await axios.get("http://localhost:5000/contactData");
  dispatch({
    type: GET_CONTACT,
    payload: result.data,
  });
};

// get contact enquiry data
export const getEnquiry = () => async (dispatch) => {
  const result = await axios.get("http://localhost:5000/getInTouchData");
  dispatch({
    type: GET_ENQUIRY,
    payload: result.data,
  });
};

// add contact enquiry data
export const addEnquiry = (newEnquiry) => async (dispatch) => {
  await axios.post("http://localhost:5000/getInTouchData", newEnquiry);
  dispatch({
    type: ADD_ENQUIRY,
    payload: newEnquiry,
  });
};
