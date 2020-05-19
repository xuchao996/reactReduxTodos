const initState = "all";
export default function status(state = initState, action) {
  const { type } = action;
  switch (type) {
    case "toggleStatus":
      state = action.data;
      return state;
    default:
      return state;
  }
}
