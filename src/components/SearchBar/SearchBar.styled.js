import Colors from '@styles/colors';
import styled from 'styled-components';
import { media } from '@styles/media';
import { margin, maxWidth } from 'styled-system';

export const SearchBar = styled.div`
  position: relative;
  width: 100%;
  height: 52px;
  ${margin};

  ${media.desktop`
    max-width: 1010px;
  `}
  ${maxWidth};
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 52px;
  padding: 12px 22px 12px 52px;
  font-family: montserratRegular;
  font-size: 16px;
  color: ${Colors.echoBlue};
  background: ${Colors.white};
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  -webkit-appearance: none;
  border: none;
  border-radius: 24px;

  &:focus {
    outline: none;
  }
`;

export const MySearchIcon = styled.img`
  position: absolute;
  width: 26px;
  height: 26px;
  left: 16px;
  top: 50%;
  transform: translate(0, -50%);
`;
