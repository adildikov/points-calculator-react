import styled from 'styled-components';
import { media } from '@styles/media';
import Colors from '@styles/colors';

export const Root = styled.div`
  width: 100%;
  height: 120px;
  background: ${Colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 15px 20px 0 20px;

  ${media.tablet`
    width: 224px;
  `}
`;

export const Title = styled.div`
  font-family: MontserratRegular;
  font-size: 18px;
  line-height: 22px;
`;

export const Image = styled.img`
  width: 42px;
  height: 42px;
`;

export const Input = styled.input`
  width: 106px;
  height: 35px;
  background: ${Colors.lightgray};
  color: ${Colors.dark};
  border-radius: 5px;
  border: ${({hasValue}) => hasValue ? `1px solid ${Colors.dark}` : `none`};
  margin-left: 16px;
  padding: 0 10px;
  font-size: 18px;
  line-height: 22px;
  text-align: center;

  &::placeholder {
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: ${Colors.alabaster};
  }
`;  

export const Line = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;