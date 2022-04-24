import React from "react";
import * as S from "./Footer.styled";
import logoWhite from "@images/logo_white.svg";
import AppLink from "@components/AppLink";

const Footer = () => {
  return (
    <S.Root>
      <S.MainBlock>
        <S.LogoInfoWrapper>
          <S.Logo src={logoWhite} />
          <S.InfoWrapper>
            <S.Phone to="tel:+7 (4822) 34-24-52">+7 (4822) 34-24-52</S.Phone>
            <S.Text>170100, г. Тверь, ул. Желябова, 33</S.Text>
          </S.InfoWrapper>
        </S.LogoInfoWrapper>
        <S.LinksWrapper>
          <S.LinksCol>
            <S.LinksHeader>О вузе</S.LinksHeader>
            <S.LinkItem>
              <AppLink to="https://tversu.ru/pages/2112">История</AppLink>
            </S.LinkItem>
            <S.LinkItem>
              <AppLink to="https://tversu.ru/pages/2183">
                ТвГУ в рейтингах
              </AppLink>
            </S.LinkItem>
            <S.LinkItem>
              <AppLink to="https://tversu.ru/pages/2107">Контакты</AppLink>
            </S.LinkItem>
            <S.LinkItem>
              <AppLink to="https://tversu.ru/">Сайт ТвГУ</AppLink>
            </S.LinkItem>
          </S.LinksCol>
          <S.LinksCol>
            <S.LinksHeader>Образование</S.LinksHeader>
            <S.LinkItem>
              <AppLink to="https://tversu.ru/abitur/">Абитуриенту</AppLink>
            </S.LinkItem>
            <S.LinkItem>
              <AppLink to="https://tversu.ru/sveden/">
                Сведения об образовательной организации
              </AppLink>
            </S.LinkItem>
            <S.LinkItem>
              <AppLink to="https://priem.tversu.ru/">Приемная коммисия</AppLink>
            </S.LinkItem>
          </S.LinksCol>
        </S.LinksWrapper>
      </S.MainBlock>
      <S.LastBlock>
        <S.Divider />
        <S.SubText>
          {`© Тверской государственный университет, 1870 - ${new Date().getFullYear()}`}
        </S.SubText>
      </S.LastBlock>
    </S.Root>
  );
};

export default Footer;
