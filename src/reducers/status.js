import { FILTER_STATUS } from "../actionTypes";

const initState = "all";
export default function status(state = initState, action) {
  const { type } = action;
  switch (type) {
    case FILTER_STATUS:
      state = action.data;
      return state;
    default:
      return state;
  }
}
