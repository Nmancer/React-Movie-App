export default (state = { currentAccent: "red" }, action) => {
  if (action.type === "CHANGE_ACCENT") {
    return { currentAccent: action.color };
  }
  return state;
};
