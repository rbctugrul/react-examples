import React from "react";
import Popular from "./Components/Popular";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Popular />
      </div>
    </BrowserRouter>
  );
}

export default App;
