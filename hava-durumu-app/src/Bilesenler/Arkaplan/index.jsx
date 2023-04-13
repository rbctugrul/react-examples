import React from "react";
import yagmurlu from "../../Resimler/rainy.jpg";

function index() {
  return (
    <div className="arkaplan">
      <div className="overlay">
        <img src={yagmurlu} alt="" />
      </div>
    </div>
  );
}

export default index;
