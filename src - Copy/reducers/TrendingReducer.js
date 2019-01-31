export default (state = [], action) => {
  if (action.type === "FETCH_TRENDING") {
    return action.payload;
  }
};
