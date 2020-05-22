import { data as list } from "./list";

export const getList = function () {
  return new Promise(function (reslove) {
    setTimeout(() => {
      reslove(list);
    }, 2000);
  });
};
