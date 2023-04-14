import React from "react";

import * as S from "./styles";
import { Main } from "../../components/main";
import { TopBar } from "../../components/topbar";
import { Sidebar } from "../../components/sidebar";

function MainLayout() {
  return (
    <S.MainLayout>
      <Sidebar />
      <TopBar />
      <Main />
    </S.MainLayout>
  );
}

export { MainLayout };
