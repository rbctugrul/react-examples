import React from "react";

import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/global.scss";

import Data from "../data.json";
import { Conversation } from "./components/conversation";

function App() {
  return (
    <div className="container">
      <Conversation {...Data} />
    </div>
  );
}

export default App;
