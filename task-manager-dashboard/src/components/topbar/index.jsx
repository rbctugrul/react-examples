import React from "react";
import * as S from "./styles";

import { ProfileButton } from "../profile-button";

function TopBar() {
  return (
    <S.Topbar>
      <ProfileButton />
    </S.Topbar>
  );
}

export { TopBar };
