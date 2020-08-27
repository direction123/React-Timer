const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "START":
      return {
        count: state.count + 1
      };
    case "STOP":
      return {
        count: state.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};
export default reducer;
