import React from "react";
import logoColor from "@images/logo_color.svg";
import navBurger from "@images/navBurger.svg";

import * as S from "./Header.styled";

const Header = () => {
  return (
    <S.Root>
      <S.Content>
        <S.Logo src={logoColor} />
        <S.InfoWrapper>
          <S.Phone>+7 (4822) 32-15-14</S.Phone>
          <S.Text>Приёмная комиссия</S.Text>
        </S.InfoWrapper>
        <S.Burger src={navBurger} />
      </S.Content>
    </S.Root>
  );
};

export default Header;
