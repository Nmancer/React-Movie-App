export default (state = [], action) => {
  if (action.type === "FETCH_MOVIES") {
    if (action.payload.page === 1) {
      return action.payload;
    }
    const newState = {
      ...action.payload,
      results: state.results.concat(action.payload.results)
    };
    return newState;
  }

  return state;
};
