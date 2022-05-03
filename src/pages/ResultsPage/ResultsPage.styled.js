import styled from 'styled-components';
import { headerHeight } from "@styles/sizes"
import Colors from '@styles/colors';
import bgLight from "@images/bg_image_light.png";
import { media } from "@styles/media";

export const Root = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - ${headerHeight}px);
  background: ${Colors.white};
  background-size: cover;
  color: ${Colors.dark};
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 22px 50px 22px;

  ${media.desktop`
    padding: 0px 120px 50px 120px;
  `}
  ${media.bigDesktop`
    padding: 0px 305px 50px 305px;
  `}
`;