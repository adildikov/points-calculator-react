import React from "react";
import * as S from "./SubjectInput.styled";
import pickImage from "@utils/pickImage";

const SubjectInput = ({ title, name, value, onChange, error }) => {
  return (
    <S.Root error={!!error}>
      <S.Title>{title}</S.Title>
      <S.Line>
        <S.Image src={pickImage(title)} />
        <S.Input
          name={name}
          value={value || ""}
          hasValue={!!value}
          onChange={onChange}
          error={!!error}
          placeholder="Ваш балл"
        />
      </S.Line>
    </S.Root>
  );
};

export default SubjectInput;
