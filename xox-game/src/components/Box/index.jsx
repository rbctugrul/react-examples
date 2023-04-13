import React, { useState } from "react";

function Box(props) {
  const [text, setText] = useState("");

  function toggleText() {
    if (text === "") {
      setText(props.currentState);
      props.changeTurn(props.row, props.col);
    }
  }

  return (
    <div className="box" onClick={toggleText}>
      {text}
    </div>
  );
}

export default Box;
