import React from "react";
import { Logo } from "../logo";
import { NavigationMenu } from "../navigation-menu";

import * as S from "./styles";

function Sidebar() {
  return (
    <S.Sidebar>
      <Logo />
      <NavigationMenu />
    </S.Sidebar>
  );
}

export { Sidebar };
