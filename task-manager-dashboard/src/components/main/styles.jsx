import styled from "styled-components";

export const Main = styled.main`
  grid-area: main;
  padding: var(--space-xl);

  opacity: ${({ isLoading }) => (isLoading ? 0.2 : 1)};
`;
