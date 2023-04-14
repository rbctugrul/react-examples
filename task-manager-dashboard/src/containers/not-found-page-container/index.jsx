import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";

function NotFoundPageContainer() {
  return (
    <S.NotFoundPageContainer>
      <S.Title>404 - Page you're looking for is missing</S.Title>
      <Link to="/">Go home</Link>
    </S.NotFoundPageContainer>
  );
}

export { NotFoundPageContainer };
