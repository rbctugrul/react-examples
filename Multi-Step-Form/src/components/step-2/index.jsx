import React, { useState } from "react";
import Step from "../step";
import FormJSON from "../../../form.json";

import * as S from "./styled";

import ArcadeIcon from "../../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../../assets/images/icon-advanced.svg";
import ProIcon from "../../../assets/images/icon-pro.svg";

const Icons = {
  1: ArcadeIcon,
  2: AdvancedIcon,
  3: ProIcon,
};

const DEFAULT_PLAN = 1;
const DEFAULT_BILLING_TYPE = "monthly";

const { step2 } = FormJSON;

function Step2(props) {
  const [plan, setPlan] = useState(DEFAULT_PLAN);

  const [billingType, setBillingType] = useState(DEFAULT_BILLING_TYPE);

  const changePlan = (newPlan) => {
    setPlan(newPlan);
  };

  return (
    <Step {...props}>
      <S.Step2>
        <S.RadioGroup>
          {step2[billingType].map((item) => (
            <S.RadioLabel key={item.id} isSelected={item.id === plan}>
              <S.RadioInput
                name="plan-type"
                type="radio"
                onChange={() => changePlan(item.id)}
              />
              <S.Icon src={Icons[item.id]} />
              <S.Title>{item.title}</S.Title>
              <S.Subtitle>{item.price}</S.Subtitle>
            </S.RadioLabel>
          ))}
        </S.RadioGroup>
      </S.Step2>
    </Step>
  );
}

export default Step2;
