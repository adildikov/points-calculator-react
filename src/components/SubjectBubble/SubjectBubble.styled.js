import styled from 'styled-components';
import Colors from '@styles/colors';
import {margin} from "styled-system";

export const Root = styled.div`
  min-width: 50px;
  min-height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 12px;
  background: ${Colors.bluewhite};
  border: 1px solid ${Colors.dark};
  border-radius: 100px;
  font-family: montserratRegular;
  font-size: 18px;
  line-height: 22px;
  color: ${Colors.dark};
  ${margin};
`;