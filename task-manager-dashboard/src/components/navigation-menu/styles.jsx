import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
`;

export const NavigationItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: var(--space-l);
  color: var(--gray);
  padding: var(--space-l);
  border-radius: var(--border-radius-m);
  transition: color 200ms, background-color 200ms;

  &.active,
  &:hover {
    color: var(--white);
    background-color: var(--green-opaque);
  }
`;

export const IconWrapper = styled.div`
  display: inline-flex;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled.p``;
