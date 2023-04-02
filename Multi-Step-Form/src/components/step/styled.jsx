import styled from "styled-components";

export const Step = styled.form`
  flex: 1; 
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
`;

export const StepHeader = styled.div``;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
`;

export const Subtitle = styled.h3`
  color: var(--Cool-gray);
`;

export const Body = styled.div`
  flex: 1;
`;

export const StepFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GoBackButton = styled.button`
  color: var(--Cool-gray);

  &:hover {
    color: inherit;
  }
`;

export const GoNextButton = styled.button`
  margin-left: auto;
  background-color: var(--Marine-blue);
  color: var(--White);
  padding: 8px 24px;
  border-radius: 8px; 
`;