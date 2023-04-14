import styled from "styled-components";

export const MainLayout = styled.div`
  position: relative;

  height: 100%;
  display: grid;
  grid-template-areas:
    "sidebar topbar"
    "sidebar main";
  grid-template-columns: 240px 1fr;
  grid-template-rows: 72px 1fr;
`;
