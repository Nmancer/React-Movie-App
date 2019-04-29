import { FETCH_SEARCH } from "../actions/types";

export default (state = [], action) => {
  if (action.type === FETCH_SEARCH) {
    return action.payload;
  }
  return state;
};
