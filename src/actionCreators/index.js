export function add(data) {
  return {
    type: "add",
    data,
  };
}

export function changed(id) {
  return {
    type: "changed",
    id,
  };
}

export function deleted(id) {
  return {
    type: "deleted",
    id,
  };
}

export function toggleStatus(data) {
  return {
    type: "toggleStatus",
    data,
  };
}

export const filterStatus = {
  all: "all",
  unfinished: "unfinished",
  finished: "finished",
};
