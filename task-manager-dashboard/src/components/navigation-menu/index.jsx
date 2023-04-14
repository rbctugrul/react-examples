import React from "react";
import * as S from "./styles";
import { MENU } from "./constants";

function NavigationMenu() {
  return (
    <S.NavigationMenu>
      {MENU.map((item) => (
        <S.NavigationItem to={item.href} key={item.id}>
          <S.IconWrapper>{item.icon}</S.IconWrapper>
          <S.Title>{item.title}</S.Title>
        </S.NavigationItem>
      ))}
    </S.NavigationMenu>
  );
}

export { NavigationMenu };
