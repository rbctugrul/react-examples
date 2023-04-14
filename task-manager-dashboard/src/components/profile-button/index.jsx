import React from "react";
import * as S from "./styles";

function ProfileButton() {
  return (
    <S.ProfileButton>
      <S.Image
        src="https://avatars.githubusercontent.com/u/96288230?s=40&v=4"
        alt="TUGRUL ARABACI"
      />
      <S.Content>
        <S.Text>TUGRUL ARABACI</S.Text>
        <S.Subtitle>Admin</S.Subtitle>
      </S.Content>
    </S.ProfileButton>
  );
}

export { ProfileButton };
