import React, { useState } from "react";
import "./App.css";
import Images from "./Images";

function App() {
  const [selectedImg, setSelectedImg] = useState(Images[0]);

  return (
    <div className="App">
      <div className="container">
        <img src={selectedImg} alt="Selected" className="selected" />
      </div>
      <div className="imgContainer">
        {Images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="tantuni"
            onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
