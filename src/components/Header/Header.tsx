import React from "react";
import LogoColor from "src/styles/icons/logo_color.svg";

import * as S from "./Header.styled";

const Header = () => {
  return (
    <S.Root>
      <S.Content
        margin={{
          m: "0 22px 0 22px",
          d: "0 120px 0 120px",
          bd: "0 305px 0 305px",
        }}
        pt={30}
        pb={104}
      >
        <LogoColor />
      </S.Content>
    </S.Root>
  );
};

export default Header;
