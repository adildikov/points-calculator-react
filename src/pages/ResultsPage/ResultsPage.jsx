import React from "react";
import UserResult from "@components/UserResult";
import * as S from "./ResultsPage.styled";

const ResultsPage = ({ exams, score }) => {
  return (
    <S.Root>
      <UserResult exams={exams} score={score} />
      <S.Content>
        <h2>asf</h2>
      </S.Content>
    </S.Root>
  );
};

export default ResultsPage;
