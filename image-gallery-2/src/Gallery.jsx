import React, { useState } from "react";
import Images from "./images.jsx";
import "./Gallery.css";
import { FaWindowClose } from "react-icons/fa"; 

function Gallery() {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="tempimg" />
        <FaWindowClose onClick={() => setModel(false)} className="x" />
      </div>
      <div className="gallery">
        {Images.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img
                src={item.image}
                alt="img"
                style={{ width: "100%" }}
                onClick={() => getImg(item.image)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
