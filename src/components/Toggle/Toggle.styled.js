import styled from 'styled-components';
import Colors from '@styles/colors';
import { margin, width } from 'styled-system';

export const Root = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: ${Colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 14px 20px;
  ${margin};
  ${width};
`;

export const Text = styled.div`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: ${Colors.dark};
`;