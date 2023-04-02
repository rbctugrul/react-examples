import styled from "styled-components";
import SidebarBg from "../../../assets/images/bg-sidebar-desktop.svg";

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-image: url(${SidebarBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--White);
  padding: 24px;
  width: 35%;
  border-radius: 8px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ItemNumber = styled.span`
  width: 36px;
  height: 36px;
  border: 1px solid var(--White);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemBody = styled.div``;

export const Subtitle = styled.h5`
  font-size: 13px;
  text-transform: uppercase;
  opacity: 0.75;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 500;
`;