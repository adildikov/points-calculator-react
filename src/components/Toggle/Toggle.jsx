import React from "react";
import CheckBox from "../CheckBox/CheckBox";
import * as S from "./Toggle.styled";

const Toggle = ({ isActive, setActive, text, ...rest }) => {
  return (
    <S.Root {...rest}>
      <S.Text>{text}</S.Text>
      <CheckBox ml={19} onChange={setActive} isActive={isActive} />
    </S.Root>
  );
};

export default Toggle;
