import React from "react";

function LinkBtn(props) {
  const { children } = props;
  return (
    <button
      currentStatus={props.currentStatus}
      className={props.currentStatus === props.filter ? "current" : null}
      onClick={() => props.toggleStatus(props.filter)}
    >
      {children}
    </button>
  );
}

export default LinkBtn;
