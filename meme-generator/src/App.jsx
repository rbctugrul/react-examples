import React from "react";
import "./App.css";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";

function App() {
  return (
    <div className="App">
      <Header name="Meme Generator" />
      <MemeGenerator />
    </div>
  );
}

export default App;
