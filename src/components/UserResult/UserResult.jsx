import React from "react";
import * as S from "./UserResult.styled";
import useWindowResize from "@hooks/useWindowResize";
import { Viewport } from "@styles/media";
import getSubjectName from "@utils/getSubjectName";

const UserResult = ({ score, exams, passedDirectionas }) => {
  const { width: windowWidth } = useWindowResize();
  const isTablet = windowWidth <= Viewport.tablet;
  return (
    <S.Root>
      <S.Content>
        <S.MainResult>
          <S.TotalScore>
            <S.ScoreNumber>{score.totalScore}</S.ScoreNumber>
            <S.ScoreText>баллов</S.ScoreText>
          </S.TotalScore>
          {isTablet ? <S.DividerX /> : <S.DividerY />}
          <S.InfoBlock>
            <S.Text>
              Индивидуальные достижения —{" "}
              <S.NoWrap>
                <S.BoldText>{score.individual}</S.BoldText> баллов
              </S.NoWrap>
            </S.Text>
            <S.Text mt={30}>
              Экзамены —{" "}
              <S.NoWrap>
                <S.BoldText>{score.examsScore}</S.BoldText> баллов:
              </S.NoWrap>
            </S.Text>
            <S.ExamList mt={25}>
              <S.ExamCol mr={20}>
                {exams.map(
                  (exam, i) =>
                    i % 2 === 0 &&
                    exam.score !== 0 && (
                      <S.Text mb={10} key={i}>{`${
                        exam.score
                      } — ${getSubjectName(exam.title)}`}</S.Text>
                    )
                )}
              </S.ExamCol>
              <S.ExamCol>
                {exams.map(
                  (exam, i) =>
                    i % 2 === 1 &&
                    exam.score !== 0 && (
                      <S.Text mb={10} key={i}>{`${
                        exam.score
                      } — ${getSubjectName(exam.title)}`}</S.Text>
                    )
                )}
              </S.ExamCol>
            </S.ExamList>
            {passedDirectionas > 0 && (
              <S.GreenText mt={40}>
                {`Высокий шанс поступить на ${
                  passedDirectionas > 3 ? "3+" : passedDirectionas
                } ${passedDirectionas === 1 ? "направление" : "направления"}`}
              </S.GreenText>
            )}
            {/* <S.RedText mt={30}>
              Ваши баллы выше чем 70% поступивших в прошлом году
            </S.RedText> */}
          </S.InfoBlock>
        </S.MainResult>
      </S.Content>
    </S.Root>
  );
};

export default UserResult;
