import styled from 'styled-components';
import Colors from '@styles/colors';
import {margin} from "styled-system";

export const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Graphic = styled.div`
  width: 70px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid ${Colors.dark};
`;

export const Column = styled.div`
  width: 20px;
  height: ${({height}) => height || '100%'};
  background: ${({color}) => color || Colors.blue};
  cursor: pointer;
  ${({isActive}) => isActive && `
    border: 2px solid ${Colors.black};
    border-bottom: none;
  `};
`;

export const Text = styled.div`
  font-family: montserratRegular;
  font-size: 18px;
  line-height: 22px;
  color: ${Colors.dark};
  ${margin};
`;

export const BoldText = styled.span`
  font-family: montserratBold;
`;

export const GreenText = styled.span`
  color: ${Colors.green};
`;

export const Block = styled.div`
  margin-left: 30px;
`;