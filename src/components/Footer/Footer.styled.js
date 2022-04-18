import styled from "styled-components";
import bgBlack from "@images/bg_image_dark.png";
import { media } from "@styles/media";
import Colors from "@styles/colors"

export const Root = styled.div`
  width: 100%;
  height: 404px;
  background: url(${bgBlack});
  background-size: cover;
  padding: 50px 0 50px 0;
`;

export const MainBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 199px;
  height: 66px;
`;

export const LogoInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 201px;
`;

export const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 58px;
  color: ${Colors.white}
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
  margin-left: 239px;
`;

export const LinksCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 76px;
  width: 210px;

  &:last-child {
    margin-right: 0px;
  }
`;

export const LinksHeader = styled.div`
  width: 100%;
  margin-bottom: 30px;
  font-family: MontserratBold;
  font-size: 20px;
  line-height: 24px;
  color: ${Colors.white};
`;

export const LinkItem = styled.div`
  width: 100%;
  font-family: MontserratRegular;
  font-size: 16px;
  line-height: 20px;
  color: ${Colors.white};
  margin-bottom: 20px;
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