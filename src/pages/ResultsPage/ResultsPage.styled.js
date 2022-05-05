import styled from 'styled-components';
import { headerHeight } from "@styles/sizes"
import Colors from '@styles/colors';
import { media } from "@styles/media";
import { Form as FormikForm } from 'formik';
import bgLight from "@images/bg_image_light.png";
import {margin} from "styled-system";

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
    padding: 0px 200px 50px 200px;
  `}
`;

export const Title = styled.div`
  margin-top: 60px;
  font-family: montserratBold;
  font-size: 36px;
  line-height: 42px;
  color: ${Colors.dark};

  ${media.desktop`
  font-size: 48px;
  line-height: 56px;
  `}
`;

export const SearchFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 20px 0;

  ${media.tablet`
    flex-direction: row;
    align-items: center;
  `}
`;

export const Form = styled(FormikForm)`
  width: 100%;
  margin-top: 20px;

  ${media.tablet`
    width: 289px;
    margin: 0px 0 0 35px;
  `}
`;

export const EmptyPage = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - ${headerHeight}px);
  background: url(${bgLight});
  background-size: cover;
  color: ${Colors.dark};
`;

export const EmptyTitle = styled.div`
  font-family: MontserratBold;
  text-align: center;
  color: ${Colors.dark};
  padding-top: 60px;

  ${media.desktop`
    padding-top: 150px;
    font-size: 52px;
    line-height: 63px;
  `}
`;

export const EmptySubTitle = styled.div`
  font-family: MontserratRegular;
  text-align: center;
  margin-top: 20px;
  ${margin};

  ${media.desktop`
    font-size: 24px;
    line-height: 29px;
  `}
`;

export const ContentEmpty = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 22px 50px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.desktop`
    padding: 0px 120px 50px 120px;
  `}
  ${media.bigDesktop`
    padding: 0px 200px 50px 200px;
  `}
`;

export const Btn = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  background: ${Colors.blue};
  color: ${Colors.white};
  font-size: 24px;
  line-height: 29px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.1));

  &:hover {
    background: ${Colors.lightBlue};
  }

  ${margin};

  ${media.desktop`
    width: 300px;
  `}
`;