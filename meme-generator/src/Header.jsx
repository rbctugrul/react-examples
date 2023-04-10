import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <p>{props.name}</p>
    </header>
  );
}

export default Header;
