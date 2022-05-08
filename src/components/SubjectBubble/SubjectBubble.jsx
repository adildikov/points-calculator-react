import React from "react";
import * as S from "./SubjectBubble.styled";
import convertSubjName from "@utils/convertSubjName";

const SubjectBubble = ({ subject, ...rest }) => {
  return <S.Root {...rest}>{convertSubjName(subject)}</S.Root>;
};

export default SubjectBubble;
