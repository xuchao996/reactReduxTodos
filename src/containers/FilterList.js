import React from "react";
import Item from "../components/Item";

import { connect } from "react-redux";

// action create
import { changed, filterStatus, getList } from "../actionCreators/index";

function List(props) {
  props.getList();
  const { list } = props;
  const changeStatus = (id) => {
    props.changed(id);
  };
  return (
    <ul>
      {list.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          changeStatus={changeStatus}
          status={item.status}
        >
          {item.data}
        </Item>
      ))}
    </ul>
  );
}

function getVisibleList(list, status) {
  switch (status) {
    case filterStatus.all:
      return list;
    case filterStatus.finished:
      return list.filter((item) => item.status);
    case filterStatus.unfinished:
      return list.filter((item) => !item.status);
    default:
      return list;
  }
}

const mapStateToProps = (state) => {
  return {
    list: getVisibleList(state.todos, state.status),
  };
};
const mapDispatchToProps = {
  changed,
  getList,
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
