import React from "react";

import { Reactions } from "./reactions";
import { Header } from "./header";
import { Body } from "./body";


function Comment() {

  return (
    <div>
      <Reactions />
      <Header />
      <Body />
    </div>
  );
}

export { Comment };
