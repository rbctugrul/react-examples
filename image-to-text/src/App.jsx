import React, { useEffect, useState } from "react";
import { createWorker } from "tesseract.js";
import "./App.css";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [textResult, setTextResult] = useState("");

  const worker = createWorker();

  const convertImageToText = async () => {
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const { data } = await worker.recognize(selectedImage);
    console.log(data);
    await worker.terminate();
    setTextResult(data.text);
  };
  useEffect(() => {
    convertImageToText();
  }, [selectedImage]);

  const handleChangeImage = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  return (
    <div className="App">
      <h1>Image to Text App</h1>
      <p>Get words in image !</p>
      <div className="input-wrapper">
        <label htmlFor="upload">Upload Image</label>
        <input
          type="file"
          id="upload"
          accept="image/*"
          onChange={handleChangeImage}
        />
      </div>

      <div className="result">
        {selectedImage && (
          <img src={URL.createObjectURL(selectedImage)} alt="thumbnail" />
        )}
        {textResult && (
          <div className="box-p">
            <p>{textResult}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
