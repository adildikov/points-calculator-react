import styled from "styled-components";
import bgBlack from "@images/bg_image_dark.png";
import { media } from "@styles/media";
import Colors from "@styles/colors"

export const Root = styled.div`
  width: 100%;
  background: url(${bgBlack});
  background-size: cover;
  padding: 50px 0 50px 0;

  ${media.desktop`
    height: 404px;
  `}
`;

export const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.desktop`
    flex-direction: row;
  `}
`;

export const Logo = styled.img`
  width: 199px;
  height: 66px;
`;

export const LogoInfoWrapper = styled.div`
  width: 100%;    
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  ${media.tablet`
    margin-bottom: 50px;
    flex-direction: row;
    align-items: normal;
  `}

  ${media.desktop`
    justify-content: normal;
    flex-direction: column;
    width: 201px;
    margin-bottom: 0;
  `}
`;

export const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${Colors.white};
  justify-content: center;
  margin-top: 30px;
  width: 201px;

  ${media.tablet`
    margin: 0 0 0 90px;
  `}

  ${media.desktop`
    margin: 58px 0 0 0;
    justify-content: normal;
  `}
`;

export const Phone = styled.div`
  text-align: center;
  font-family: MontserratBold;
  font-size: 20px;
  line-height: 24px;
`;

export const Text = styled.div`
  font-family: MontserratLight;
  font-size: 12px;
  line-height: 15px;
  margin-top: 5px;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tablet`
    flex-direction: row;
    align-items: normal;
    justify-content: center;
  `}

  ${media.desktop`
    justify-content: normal;
    margin-left: 239px;
  `}
`;

export const LinksCol = styled.div`
  display: flex;
  flex-direction: column;
  
  ${media.tablet`
    margin-right: 76px;
    width: 210px;
  `}

  &:last-child {
    margin-right: 0px;
  }
`;

export const LinksHeader = styled.div`
  width: 100%;
  margin: 30px 0;
  font-family: MontserratBold;
  font-size: 20px;
  line-height: 24px;
  color: ${Colors.white};
  text-align: center;

  ${media.tablet`
    margin: 0 0 30px 0;
    text-align: left;
  `}
`;

export const LinkItem = styled.div`
  width: 100%;
  font-family: MontserratRegular;
  font-size: 16px;
  line-height: 20px;
  color: ${Colors.white};
  margin-bottom: 20px;
  text-align: center;

  ${media.tablet`
    text-align: left;
  `}
`;

export const LastBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Divider = styled.div`
  margin-top: 60px;
  width: 57%;
  height: 1px;
  background: ${Colors.grey};
`;

export const SubText = styled.div`
  margin-top: 30px;
  font-family: MontserratRegular;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${Colors.white};
`;