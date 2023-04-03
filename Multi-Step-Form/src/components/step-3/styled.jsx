import styled, { css } from "styled-components";

export const Step3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Item = styled.label`
  display: flex;
  align-items: center;
  padding: 24px;
  gap: 16px;
  border: 1px solid var(--light-gray);
  border-radius: 8px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: var(--alabester);
      border-color: var(--purplish-blue);
    `}

  &:hover {
    border-color: var(--purplish-blue);
  }
`;

export const Input = styled.input``;

export const InputBody = styled.div`
  flex: 1;
`;

export const Title = styled.h4`
  font-weight: 500;
  margin-bottom: 4px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: var(--cool-gray);
`;

export const Price = styled.p`
  color: var(--purplish-blue);
  font-weight: 500;
`;
