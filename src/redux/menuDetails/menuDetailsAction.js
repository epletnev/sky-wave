import { GET_MENU_DETAILS, GET_REVIEWS, ADD_REVIEW } from "./menuDetailsType";
import axios from "axios";

// get menu details page data
export const getMenuDetails = (id) => async (dispatch) => {
  const result = await axios.get(`http://localhost:5000/data/${id}`);
  dispatch({
    type: GET_MENU_DETAILS,
    payload: result.data,
  });
};

// get reviews data
export const getReviews = (id) => async (dispatch) => {
  const result = await axios.get(`http://localhost:5000/data/${id}`);
  dispatch({
    type: GET_REVIEWS,
    payload: result.data,
  });
};

// add review data
export const addReview = (newReview) => async (dispatch) => {
  dispatch({
    type: ADD_REVIEW,
    payload: newReview,
  });
};
