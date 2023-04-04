import React from "react";

import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/global.scss";

import { Conservation } from "./components/conversation";

function App() {
  return (
    <div className="container">
      <Conservation />
    </div>
  );
}

export default App;
