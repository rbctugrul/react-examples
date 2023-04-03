import React, { useState } from "react";

import FormJSON from "../../../form.json";
import Step from "../step";

import * as S from "./styled";

const { step3 } = FormJSON;

function Step3({ onStepSubmit, formData, ...props }) {
  const [selectedAddons, setSelectedAddons] = useState(
    formData.step3.selectedAddons ?? []
  );

  const { billingType } = formData.step2;

  const changeSelectedAddons = (checked, selectedAddon) => {
    if (checked) {
      setSelectedAddons([...selectedAddons, selectedAddon]);
    } else {
      setSelectedAddons(
        selectedAddons.filter((addon) => addon.id !== selectedAddon.id)
      );
    }
  };

  const checkSelected = (id) => selectedAddons.some((i) => i.id === id);

  const onSubmit = () => {
    onStepSubmit("step3", "step4", {
      selectedAddons,
    });
  };

  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step3>
        {step3[billingType].map((item) => (
          <S.Item key={item.id} isSelected={checkSelected(item.id)}>
            <S.Input
              defaultChecked={checkSelected(item.id)}
              type="checkbox"
              onChange={(e) => changeSelectedAddons(e.target.checked, item)}
            />
            <S.InputBody>
              <S.Title>{item.title}</S.Title>
              <S.Subtitle>{item.description}</S.Subtitle>
            </S.InputBody>
            <S.Price>{item.price}</S.Price>
          </S.Item>
        ))}
      </S.Step3>
    </Step>
  );
}

export default Step3;
