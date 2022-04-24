import styled from 'styled-components';
import { headerHeight } from "@styles/sizes"
import Colors from '@styles/colors';
import bgLight from "@images/bg_image_light.png";
import { media } from "@styles/media";

export const Root = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - ${headerHeight}px);
  background: url(${bgLight});
  background-size: cover;
  color: ${Colors.dark};
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  padding: 30px 22px 0 22px;

  ${media.desktop`
    padding: 60px 120px 0 120px;
  `}
  ${media.bigDesktop`
    padding: 60px 305px 0 305px;
  `}
`;

export const Title = styled.div`
  font-family: MontserratBold;
  color: ${Colors.dark};

  ${media.desktop`
    font-size: 52px;
    line-height: 63px;
  `}
`;

export const SubTitle = styled.div`
  font-family: MontserratRegular;
  margin-top: 20px;

  ${media.desktop`
    font-size: 24px;
    line-height: 29px;
  `}
`;

export const InputsBlock = styled.div`
  margin-top: 40px;
`;