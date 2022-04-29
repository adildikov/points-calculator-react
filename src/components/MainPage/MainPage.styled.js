import styled from 'styled-components';
import { headerHeight } from "@styles/sizes"
import Colors from '@styles/colors';
import bgLight from "@images/bg_image_light.png";
import { media } from "@styles/media";
import { Form } from 'formik';
import { margin } from 'styled-system';
import { width } from 'styled-system';
import otherBtn from '@images/otherBtn.svg'

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
  padding: 30px 22px 50px 22px;

  ${media.desktop`
    padding: 60px 120px 50px 120px;
  `}
  ${media.bigDesktop`
    padding: 60px 305px 50px 305px;
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
  ${margin};

  ${media.desktop`
    font-size: 24px;
    line-height: 29px;
  `}
`;

export const InputsBlock = styled(Form)`
    position: relative;
    margin-top: 40px;
    align-items: start;
    display: grid;
    grid-template-columns: repeat(auto-fill, 224px);
    justify-content: center;
    grid-gap: 20px;

    ${media.desktop`
      justify-content: start;
    `}
`;

export const TogglesBlock = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const OtherBtnBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background: ${Colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 14px 20px;
  cursor: pointer;

  &::before {
    content: url(${otherBtn});
    margin-left: 19px;
  }
  ${margin};
  ${width};
`;

export const Text = styled.div`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: ${Colors.dark};
`;