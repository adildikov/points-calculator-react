import React from 'react';
import * as S from './SubjectInput.styled';
import pickImage from '@utils/pickImage';

const SubjectInput = ({ title, name, value, onChange }) => {


  return (
    <S.Root>
      <S.Title>{title}</S.Title>
      <S.Line>
        <S.Image src={pickImage(title)} />
        <S.Input name={name} value={value || ''} hasValue={!!value} onChange={onChange} placeholder="Ваш балл"/>
      </S.Line>
    </S.Root>
  );
};

export default SubjectInput;