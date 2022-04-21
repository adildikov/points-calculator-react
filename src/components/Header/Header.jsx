import React from "react";
import logoColor from "@images/logo_color.svg";
import navBurger from "@images/navBurger.svg";
import useWindowResize from "@hooks/useWindowResize";
import { Viewport } from "@styles/media";
import * as S from "./Header.styled";

const Header = () => {
  const { width: windowWidth } = useWindowResize();
  const isMobile = windowWidth <= Viewport.mobile;
  return (
    <S.Root>
      <S.Content>
        <S.Logo src={logoColor} />
        {!isMobile && (
          <S.InfoWrapper>
            <S.Phone>+7 (4822) 32-15-14</S.Phone>
            <S.Text>Приёмная комиссия</S.Text>
          </S.InfoWrapper>
        )}
        <S.Burger src={navBurger} />
      </S.Content>
    </S.Root>
  );
};

export default Header;
