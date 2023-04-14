import styled from "styled-components";

export const Sidebar = styled.aside`
  grid-area: sidebar;
  padding: calc(var(--space-xl) * 2) var(--space-xl);
  border-right: 1px solid var(--border-color);

  display: flex;
  flex-direction: column;
  gap: calc(var(--space-xl) * 3);
`;
