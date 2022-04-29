import React, { memo } from "react";
import * as Styled from "./CheckBox.styled";

const CheckBox = ({ onChange, isActive, ...rest }) => {
  return (
    <Styled.Root onClick={onChange} isActive={isActive} {...rest}>
      <Styled.Circle isActive={isActive} />
    </Styled.Root>
  );
};

export default memo(CheckBox);
