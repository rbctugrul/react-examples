import React, { useState } from "react";

function Main() {
  const [imgUrl, setImgUrl] = useState("");

  const callImg = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => setImgUrl(data[0].url));
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <h2>Kittie</h2>
          <img src={imgUrl}  />
          <button onClick={() => callImg()}>Click</button>
        </div>
      </div>
    </>
  );
}

export default Main;
