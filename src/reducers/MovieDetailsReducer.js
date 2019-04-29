import { FETCH_MOVIEDETAILS } from "../actions/types";

export default (state = {}, action) => {
  if (action.type === FETCH_MOVIEDETAILS) {
    return action.payload;
  }
  return state;
};
