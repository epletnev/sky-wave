import { GET_ABOUT } from "./aboutType";
import axios from "axios";

// get about page data
export const getAbout = () => async (dispatch) => {
  const result = await axios.get("http://localhost:5000/aboutData");
  dispatch({
    type: GET_ABOUT,
    payload: result.data,
  });
};
