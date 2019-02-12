export default (state = [], action) => {
  if (action.type === "FETCH_MOVIES") {
    if (action.payload.page === 1) {
      return action.payload;
    }

    return {
      page: action.payload.page,
      results: [...state.results, ...action.payload.results]
    };
  }

  return state;
};
