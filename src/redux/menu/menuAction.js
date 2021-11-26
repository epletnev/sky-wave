import { GET_MENU } from "./menuType";
import axios from "axios";

// get all menu data
export const getMenu = () => async (dispatch) => {
  const result = await axios.get("http://localhost:5000/data");
  dispatch({
    type: GET_MENU,
    payload: result.data,
  });
};
