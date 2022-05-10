import styled from 'styled-components';
import Colors from '@styles/colors';
import { media } from "@styles/media";
import {margin} from "styled-system";

export const Root = styled.div`
  position: relative;
  width: 100%;
  padding: 30px 29px 10px 40px;
  background: ${Colors.white};
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  margin-bottom: 30px;
`;

export const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  ${margin};
`;

export const OtherSection = styled.div`
  ${({isVisible}) => isVisible ? 'display: block;' : 'display: none;'};
`;

export const ToggleArrowToBottom = styled.img`
  display: flex;
  margin: 0 auto;
  cursor: pointer;
`;

export const ToggleArrowToTop = styled.img`
  display: flex;
  margin: 0 auto;
  cursor: pointer;
  transform: rotate(180deg);
`;

export const Title = styled.div`
  font-family: montserratBold;
  font-size: 18px;
  line-height: 22px;
  color: ${Colors.dark};
  ${margin};
`;

export const Text = styled.div`
  font-family: montserratRegular;
  font-size: 18px;
  line-height: 22px;
  color: ${Colors.dark};
  ${margin};
`;

export const BigNumber = styled.div`
  font-family: montserratBold;
  font-size: 96px;
  line-height: 117px;
  color: ${({currentColor}) => currentColor || Colors.dark};
  ${margin};
`;

export const ChanceText = styled.div`
  font-family: montserratRegular;
  font-size: 24px;
  line-height: 29px;
  text-align: right;
  color: ${({currentColor}) => currentColor || Colors.dark};
  ${margin};
`;

export const Divider = styled.div`
  width: ${({width}) => width || '100%'};
  height: 1px;
  background: ${Colors.alabaster};
  ${margin};
`;

export const SubjectsList = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const InfoBlock = styled.div``;

export const ChanceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  min-width: 350px;
  height: 8px;
  border-radius: 8px;
  background: ${Colors.alabaster};
  ${margin};
`;

export const Status = styled.div`
  position: absolute;
  width: ${({width}) => `${width}%` || '100%'};
  height: 8px;
  border-radius: 8px;
  background: ${({currentColor}) => currentColor || Colors.grey};
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  ${margin};
`;

export const RubbleIcon = styled.img`
`;