export default (state = {}, action) => {
  if (action.type === "FETCH_ACTORDETAILS") {
    return action.payload;
  }
  return state;
};
