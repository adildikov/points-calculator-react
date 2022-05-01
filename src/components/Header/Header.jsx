import React from "react";
import logoColor from "@images/logo_color.svg";
import navBurger from "@images/navBurger.svg";
import useWindowResize from "@hooks/useWindowResize";
import { Viewport } from "@styles/media";
import * as S from "./Header.styled";
import AppLink from "@components/AppLink";

const Header = ({ onMenuClick, withBorder = false }) => {
  const { width: windowWidth } = useWindowResize();
  const isMobile = windowWidth <= Viewport.mobile;
  return (
    <S.Root withBorder={withBorder}>
      <S.Content>
        <AppLink to={"/"}>
          <S.Logo src={logoColor} />
        </AppLink>
        {!isMobile && (
          <S.InfoWrapper>
            <S.Phone>+7 (4822) 32-15-14</S.Phone>
            <S.Text>Приёмная комиссия</S.Text>
          </S.InfoWrapper>
        )}
        <S.Burger src={navBurger} onClick={onMenuClick} />
      </S.Content>
    </S.Root>
  );
};

export default Header;
