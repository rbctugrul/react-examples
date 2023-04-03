import React, { useState } from "react";
import FormJSON from "../../../form.json";
import Step from "../step";
import * as S from "./styled";

const { step3 } = FormJSON;

function Step3(props) {
  const [selectedAddons, setSelectedAddons] = useState([]);

  const billingType = "monthly";

  const changeSelectedAddons = (checked, selectedAddon) => {
    if (checked) {
      setSelectedAddons([...selectedAddons, selectedAddon]);
    } else {
      setSelectedAddons(
        selectedAddons.filter((addon) => addon.id !== selectedAddon.id)
      );
    }
  };

  return (
    <Step {...props}>
      <S.Step3>
        {step3[billingType].map((item) => (
          <S.Item
            key={item.id}
            isSelected={selectedAddons.some((i) => i.id === item.id)}
          >
            <S.Input
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
