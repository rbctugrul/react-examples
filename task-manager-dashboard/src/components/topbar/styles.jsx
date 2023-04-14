import styled from "styled-components";

export const Topbar = styled.div`
  grid-area: topbar;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: flex-end;

  & > * {
    border-left: 1px solid var(--border-color);
    padding-left: var(--space-xl);
    padding-right: var(--space-xl);
  }
`;
