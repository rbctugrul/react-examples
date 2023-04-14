import React from "react";
import * as S from "./styles";
import { Logo } from "../logo";
import { NavigationMenu } from "../navigation-menu";

function Sidebar() {
  return (
    <S.Sidebar>
      <Logo />
      <NavigationMenu />
    </S.Sidebar>
  );
}

export { Sidebar };
