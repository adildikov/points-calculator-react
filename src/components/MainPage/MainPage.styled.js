import styled from 'styled-components';
import { headerHeight } from "@styles/sizes"
import Colors from '@styles/colors';

export const Root = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - ${headerHeight}px);
  background: ${Colors.white};
  color: ${Colors.dark};
`;