import styled from "styled-components";
import { headerHeight } from "@styles/sizes"
import { media } from "@styles/media";

export const Root = styled.div`
  width: 100%;
  height: ${headerHeight}px;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 22px 0 22px;

  ${media.desktop`
    padding: 0 120px 0 120px;
  `}
  ${media.bigDesktop`
    padding: 0 305px 0 305px;
  `}
`;

export const Logo = styled.img`
  width: 199px;
  height: 66px;
`;

export const Burger = styled.img`
  width: 23px;
  height: 17px;
  margin: 0 0 0 auto;
  cursor: pointer;

  ${media.tablet`
    margin: 0 0 0 86px;
  `}
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 auto;
`;

export const Phone = styled.div`
  text-align: end;
  font-family: MontserratBold;
  font-size: 18px;
  line-height: 22px;
`;

export const Text = styled.div`
  font-family: MontserratLight;
  font-size: 18px;
  line-height: 22px;
`;