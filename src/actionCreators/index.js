import {
  ADD_TODO,
  CHANGE_TODO,
  DELETE_TODOS,
  FILTER_STATUS,
  GET_TODO,
} from "../actionTypes";

import { getList as getListApi } from "../api";

export function getList() {
  return function (dispatch) {
    getListApi().then((response) => {
      dispatch({
        type: GET_TODO,
        data: response,
      });
    });
  };
}

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
