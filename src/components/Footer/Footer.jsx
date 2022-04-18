import React from "react";
import * as S from "./Footer.styled";
import logoWhite from "@images/logo_white.svg";

const Footer = () => {
  return (
    <S.Root>
      <S.MainBlock>
        <S.LogoInfoWrapper>
          <S.Logo src={logoWhite} />
          <S.InfoWrapper>
            <S.Phone>+7 (4822) 34-24-52</S.Phone>
            <S.Text>170100, г. Тверь, ул. Желябова, 33</S.Text>
          </S.InfoWrapper>
        </S.LogoInfoWrapper>
        <S.LinksWrapper>
          <S.LinksCol>
            <S.LinksHeader>О вузе</S.LinksHeader>
            <S.LinkItem>История</S.LinkItem>
            <S.LinkItem>ТвГУ в рейтингах</S.LinkItem>
            <S.LinkItem>Контакты</S.LinkItem>
            <S.LinkItem>Сайт ТвГУ</S.LinkItem>
          </S.LinksCol>
          <S.LinksCol>
            <S.LinksHeader>Образование</S.LinksHeader>
            <S.LinkItem>Абитуриенту</S.LinkItem>
            <S.LinkItem>Сведения об образовательной организации</S.LinkItem>
            <S.LinkItem>Приемная коммисия</S.LinkItem>
          </S.LinksCol>
        </S.LinksWrapper>
      </S.MainBlock>
      <S.LastBlock>
        <S.Divider />
        <S.SubText>
          © Тверской государственный университет, 1870 - 2022
        </S.SubText>
      </S.LastBlock>
    </S.Root>
  );
};

export default Footer;
