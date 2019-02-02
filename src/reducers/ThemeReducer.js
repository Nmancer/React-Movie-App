export default (state = { currentTheme: false }, action) => {
  if (action.type === "CHANGE_THEME") {
    return { currentTheme: !state.currentTheme };
  }
  return state;
};
