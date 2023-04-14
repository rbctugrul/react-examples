import React from "react";
import { ProfileButton } from "../profile-button";

import * as S from "./styles";

function Topbar() {
  return (
    <S.Topbar>
      <ProfileButton />
    </S.Topbar>
  );
}

export { Topbar };
