import React, { useState } from "react";
import Step from "../step";
import FormJSON from "../../../form.json";

import * as S from "./styled";
import {
  Icons,
  DEFAULT_PLAN,
  DEFAULT_BILLING_TYPE,
  MONTHLY,
  YEARLY,
} from "./constants";

const { step2 } = FormJSON;

function Step2({ onStepSubmit, formData, ...props }) {
  const [plan, setPlan] = useState(formData.step2.plan ?? DEFAULT_PLAN);
  const [billingType, setBillingType] = useState(
    formData.step2.billingType ?? DEFAULT_BILLING_TYPE
  );

  const changePlan = (newPlan) => {
    setPlan(newPlan);
  };

  const changeBillingType = (newBillingType) => {
    setBillingType(newBillingType);
  };

  const onSubmit = () => {
    // Validation rules will be here

    onStepSubmit("step2", "step3", {
      billingType,
      plan,
    });
  };

  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step2>
        <S.RadioGroup>
          {step2[billingType].map((item) => (
            <S.RadioLabel key={item.id} isSelected={item.id === plan.id}>
              <S.RadioInput
                name="plan-type"
                type="radio"
                onChange={() => changePlan(item)}
              />
              <S.Icon src={Icons[item.id]} />
              <S.Title>{item.title}</S.Title>
              <S.Subtitle>{item.price}</S.Subtitle>
              {billingType === YEARLY && (
                <S.Description>{item.description}</S.Description>
              )}
            </S.RadioLabel>
          ))}
        </S.RadioGroup>
        <S.BillingGroup>
          <S.BillingButton
            type="button"
            onClick={() => changeBillingType(MONTHLY)}
            isSelected={billingType === MONTHLY}
          >
            Monthly
          </S.BillingButton>
          <S.BillingButton
            type="button"
            onClick={() => changeBillingType(YEARLY)}
            isSelected={billingType === YEARLY}
          >
            Yearly
          </S.BillingButton>
        </S.BillingGroup>
      </S.Step2>
    </Step>
  );
}

export default Step2;
