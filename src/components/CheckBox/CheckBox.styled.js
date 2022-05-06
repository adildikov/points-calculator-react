import styled from 'styled-components';
import Colors from '@styles/colors';
import { margin } from 'styled-system';

export const Input = styled.input`
  display: none;
`;

export const Root = styled.label`
  width: 35px;
  min-width: 35px;
  height: 6px;
  border-radius: 25px;
  background: ${({ isActive }) =>
    isActive
      ? Colors.blue
      : Colors.grey};
  position: relative;
  cursor: pointer;
  ${margin};
`;

export const Circle = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  ${({ isActive }) =>
    isActive
      ? `transform: translate(22px, -50%);
          background: ${Colors.red};
        `
      : `background: ${Colors.dark};
        transform: translate(-2px, -50%)`};
  border-radius: 25px;
  top: 50%;
  transition: transform 300ms ease;
`;
