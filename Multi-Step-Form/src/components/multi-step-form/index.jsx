import React from 'react';
import Sidebar from '../sidebar';
import Step1 from '../step-1';
import * as S from './styled';

function MultiStepForm() {
  return (
    <S.MultiStepForm>
      <Sidebar />
      <Step1 />
    </S.MultiStepForm>
  )
}

export default MultiStepForm