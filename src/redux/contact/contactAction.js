import { GET_CONTACT, GET_ENQUIRY, ADD_ENQUIRY } from "./contactType";
// import axios from "axios";

const contactData = {
  address: "2903 Avenue Z, MG Marg, Mumbai, India",
  phone: ["(91) 987 654 3210", "(91) 987 654 3211"],
  email: "contact@skywave.com",
};

const getInTouchData = [
  {
    name: "aravind",
    email: "aravindjai0@gmail.com",
    phone: "3333333123",
    message: "Hi arathe",
    id: 1,
  },
];

// get contact data
export const getContact = () => (dispatch) => {
  const result = { ...contactData };
  dispatch({
    type: GET_CONTACT,
    payload: result,
  });
};

// get contact enquiry data
export const getEnquiry = () => (dispatch) => {
  const result = [...getInTouchData];
  dispatch({
    type: GET_ENQUIRY,
    payload: result,
  });
};

// add contact enquiry data
export const addEnquiry = (newEnquiry) => (dispatch) => {
  dispatch({
    type: ADD_ENQUIRY,
    payload: newEnquiry,
  });
};

// // get contact data
// export const getContact = () => async (dispatch) => {
//   const result = await axios.get("http://localhost:5000/contactData");
//   dispatch({
//     type: GET_CONTACT,
//     payload: result.data,
//   });
// };

// // get contact enquiry data
// export const getEnquiry = () => async (dispatch) => {
//   const result = await axios.get("http://localhost:5000/getInTouchData");
//   dispatch({
//     type: GET_ENQUIRY,
//     payload: result.data,
//   });
// };

// // add contact enquiry data
// export const addEnquiry = (newEnquiry) => async (dispatch) => {
//   await axios.post("http://localhost:5000/getInTouchData", newEnquiry);
//   dispatch({
//     type: ADD_ENQUIRY,
//     payload: newEnquiry,
//   });
// };
