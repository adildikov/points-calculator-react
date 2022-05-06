import styled from 'styled-components';
import { margin } from 'styled-system';
import Colors from '@styles/colors';

export const Root = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  width: 176px;
  height: 50px;
  align-items: center;
  background: ${Colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 14px 20px;
  z-index: 10;
  cursor: pointer;
  ${margin};
`;

export const Text = styled.div`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: ${Colors.dark};
`;

export const Status = styled.div`
  display: flex;
  width: 80px;
  height: 20px;
  justify-content: center;
  align-items: center;
  margin-left: 19px;
  font-size: 13px;
  line-height: 20px;  
  text-align: center;
  ${({hasValue}) => 
  hasValue ? `
    color: ${Colors.dark};
    background: ${Colors.white};
    border: 1px solid ${Colors.grey};
  `: `
    color: ${Colors.grey};
    background: ${Colors.lightgrey};
  `}
  border-radius: 5px;
`;

export const PopUpContainer = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')};
  position: absolute;
  top: 55px;
  right: 0px;
  flex-direction: column;
  padding: 5px 10px;
  background: ${Colors.white};
  box-shadow: 0px 10px 30px rgba(19, 23, 31, 0.1);
  border-radius: 15px;
  z-index: 10000;
`;

export const PopperBtn = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  background: ${Colors.white};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 0 10px;

  &:hover {
    background: ${Colors.bluewhite};
  }
`;
