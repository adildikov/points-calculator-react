import React from "react";

import * as S from "./MainPage.styled";

const MainPage = () => {
  return (
    <S.Root>
      <S.Content>
        <S.Title>Калькулятор баллов ЕГЭ</S.Title>
        <S.SubTitle>
          Узнайте свои шансы поступить в Тверской государственный университет
        </S.SubTitle>
        <S.InputsBlock></S.InputsBlock>
      </S.Content>
    </S.Root>
  );
};

export default MainPage;
