import {
  ADD_TODO,
  CHANGE_TODO,
  DELETE_TODOS,
  FILTER_STATUS,
} from "../actionTypes";

export function add(data) {
  return {
    type: ADD_TODO,
    data,
  };
}

export function changed(id) {
  return {
    type: CHANGE_TODO,
    id,
  };
}

export function deleted(id) {
  return {
    type: DELETE_TODOS,
    id,
  };
}

export function toggleStatus(data) {
  return {
    type: FILTER_STATUS,
    data,
  };
}

export const filterStatus = {
  all: "all",
  unfinished: "unfinished",
  finished: "finished",
};
