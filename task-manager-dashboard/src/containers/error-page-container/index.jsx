import React from "react";
import { Link, useRouteError } from "react-router-dom";

import * as S from "./styles";

function ErrorPageContainer() {
  const error = useRouteError();

  return (
    <S.ErrorPageContainer>
      <S.Title>Unexpected error occured, please try again</S.Title>
      <S.Error>{error?.toString()}</S.Error>
      <Link to="/">Go home</Link>
    </S.ErrorPageContainer>
  );
}

export { ErrorPageContainer };
