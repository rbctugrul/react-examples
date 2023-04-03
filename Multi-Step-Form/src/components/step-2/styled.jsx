import styled, { css } from "styled-components";

export const Step2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const RadioGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

export const RadioLabel = styled.label`
  flex: 1;
  border: 1px solid var(--Light-gray);
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 200ms ease;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: var(--Alabaster);
      border-color: var(--Purplish-blue);
    `}

  &:hover {
    border-color: var(--Purplish-color);
  }
`;

export const RadioInput = styled.input`
  display: none;
`;

export const Icon = styled.img`
  margin-bottom: 48px;
`;

export const Title = styled.h3`
  font-weight: 700;
`;

export const Subtitle = styled.h6`
  font-size: 14px;
  color: var(--Cool-gray);
`;

export const Description = styled.p`
  font-size: 12px;
  color: var(--Cool-gray);
`;

export const BillingGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const BillingButton = styled.button`
  background-color: var(--Alabaster);
  border: 1px solid var(--Light-gray);
  padding: 12px;
  border-radius: 8px;
  color: var(--Cool-gray);

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: var(--Purplish-blue);
      background-color: var(--Alabaster);
      border-color: var(--Purplish-blue);
    `};
`;
