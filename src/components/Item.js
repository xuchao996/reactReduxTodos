import React from "react";
import "./Item.css";
function Item(props) {
  return (
    <li
      className={[props.status ? "judge item" : "item"]}
      onClick={() => props.changeStatus(props.id)}
    >
      <p>{props.children}</p>
    </li>
  );
}

export default Item;
