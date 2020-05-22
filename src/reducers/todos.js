import { ADD_TODO, CHANGE_TODO } from "../actionTypes";

const initState = [{ data: 123, id: 0, status: false }];

function todos(state = initState, action) {
  const { type } = action;
  switch (type) {
    case ADD_TODO:
      const obj = {
        data: action.data,
        id: state.length,
        status: false,
      };
      return [...state, obj];
    case CHANGE_TODO:
      return state.map((item) => {
        if (item.id === action.id) item.status = true;
        return item;
      });
    default:
      return state;
  }
}

export default todos;
