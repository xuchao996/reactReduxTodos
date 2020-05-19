import React, { useRef } from "react";
function AddItem(props) {
  // 拿到ref
  const textInput = useRef(null);
  let val = "";
  const addHandler = function (v) {
    v = v.trim();
    if (!v) return;
    val = "";
    textInput.current.value = "";
    return props.add(v);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="请输入"
        ref={textInput}
        onChange={(e) => (val = e.target.value)}
      />
      <button onClick={() => addHandler(val)}>add</button>
    </div>
  );
}

export default AddItem;
