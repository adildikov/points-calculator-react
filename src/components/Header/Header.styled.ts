import { Colors } from "../../types";
import styled from "styled-components";
import {
  display,
  DisplayProps,
  margin,
  MarginProps,
  maxWidth,
  MaxWidthProps,
  padding,
  PaddingProps,
} from "styled-system";

export const Root = styled.div`
  width: 100%;
  height: 108px;
  background: ${Colors.white};
`;

export const Content = styled.div<
  MarginProps & DisplayProps & MaxWidthProps & PaddingProps
>`
  position: relative;
  ${margin};
  ${padding};
  ${display};
  ${maxWidth};
`;
