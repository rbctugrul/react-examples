import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const TaskPageContainer = styled.section``;

export const TaskDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-s);
  margin-top: var(--space-xl);
`;

export const Name = styled.h2`
  font-size: var(--font-xxxl);
`;

export const Description = styled.p``;

export const Status = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--font-s);
  padding: var(--space-m);
  font-weight: 700;
  border-radius: var(--border-radius-s);
  cursor: pointer;

  ${({ completed }) => css`
    color: ${completed ? "var(--green)" : "var(--red)"};
    background-color: ${completed ? "var(--green-light)" : "var(--red-light)"};
  `}
`;

export const EditButton = styled(Link)`
  background-color: var(--dark-blue);
  padding: var(--space-m);
  border-radius: var(--border-radius-s);
`;
