import styled from 'styled-components';
import { headerHeight } from "@styles/sizes"
import Colors from '@styles/colors';
import { media } from "@styles/media";
import { Form as FormikForm } from 'formik';

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