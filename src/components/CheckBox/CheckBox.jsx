import React, { memo } from "react";
import * as Styled from "./CheckBox.styled";

const CheckBox = ({ onChange, isActive, name, ...rest }) => {
  return (
    <>
      <Styled.Input
        type="checkbox"
        onChange={onChange}
        id={name}
        name={name}
        checked={isActive}
      />
      <Styled.Root htmlFor={name} isActive={isActive} {...rest}>
        <Styled.Circle isActive={isActive} />
      </Styled.Root>
    </>
  );
};

export default memo(CheckBox);
