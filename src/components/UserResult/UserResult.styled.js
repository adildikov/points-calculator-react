import styled from 'styled-components';
import Colors from '@styles/colors';
import bgLight from "@images/bg_image_light.png";
import { media } from "@styles/media";
import { margin } from'styled-system';

export const Root = styled.div`
  position: relative;
  width: 100%;
  background: url(${bgLight});
  background-size: cover;
  color: ${Colors.dark};
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 22px 90px 22px;

  ${media.desktop`
    padding: 20px 120px 90px 120px;
  `}
`;

export const MainResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 75px 60px 85px;
  background: ${Colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  ${media.desktop`
    flex-direction: row;
  `}
`;

export const TotalScore = styled.div`
  max-width: 275px;
  color: ${Colors.blue};
`;

export const ScoreNumber = styled.div`
  font-family: montserratBold;
  font-size: 144px;
  line-height: 176px;
  text-align: center;
`;

export const ScoreText = styled.div`
  margin-top: -11px;
  font-family: montserratBold;
  font-size: 48px;
  line-height: 59px;
  text-align: center;
`;

export const DividerY = styled.div`
  width: 1px;
  height: 350px;
  background: ${Colors.alabaster};
  margin-left: 50px;
`;
export const DividerX = styled.div`
  width: 90%;
  height: 1px;
  margin: 50px 0px;
  background: ${Colors.alabaster};
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  
  ${media.desktop`
    margin-left: 50px;
  `}
`;

export const BoldText = styled.span`
  font-family: montserratBold;
`;

export const Text = styled.div`
  font-family: montserratRegular;
  font-size: 24px;
  line-height: 29px;
  color: ${Colors.dark};
  ${margin};
`;

export const ExamList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 540px;
  ${margin};
`;

export const ExamCol = styled.div`
  display: flex;
  flex-direction: column;
  ${margin};
`;

export const BlueText = styled(Text)`
  color: ${Colors.blue};
`;

export const RedText = styled(Text)`
  color: ${Colors.red};
`;

export const NoWrap = styled.span`
  white-space: nowrap
`;