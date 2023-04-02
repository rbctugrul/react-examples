import React from 'react';
import * as S from "./styled";

function Step({
  title,
  subtitle,
  hasBackButton,
  hasNextButton,
  children
}) {
  return (
    <S.Step>
      <S.StepHeader>
        <S.Title>
          {title}
        </S.Title>
        <S.Subtitle>
          {subtitle}
        </S.Subtitle>
      </S.StepHeader>
        <S.Body>
          {children}
        </S.Body>
        <S.StepFooter>
          {hasBackButton && <S.GoBackButton>
            Go Back
          </S.GoBackButton>}
          {hasNextButton && <S.GoNextButton>
            Next Step
          </S.GoNextButton>}
        </S.StepFooter>
    </S.Step>
  );
}

export default Step