import React from "react";
import SubjectBubble from "@components/SubjectBubble";
import * as S from "./Faculty.styled";
import useToggle from "@hooks/useToggle";
import toggleArrowIcon from "@images/toggleArrow.svg";
import countMean from "@utils/countMean";
import countChance from "@utils/countChance";

const Faculty = ({ faculty, totalScore, subjects }) => {
  const [isVisible, setVisible] = useToggle(false);
  const { chance, chancecolor, chanceText } = countChance(
    totalScore,
    faculty.points[0].score,
    countMean(faculty.points),
    faculty.number_of_places[0].score,
    countMean(faculty.number_of_places),
    faculty.subjects,
    subjects
  );

  return (
    <S.Root>
      <S.MainSection mb={20}>
        <S.InfoBlock>
          <S.Title>{faculty.name}</S.Title>
          <S.Text mt={9}>
            {faculty.numid} | {faculty.type}
          </S.Text>
          <S.Divider width="230px" mt={20} />
          <S.Text mt={20}>Набор предметов:</S.Text>
          <S.SubjectsList>
            {faculty.subjects.map((subject) => (
              <SubjectBubble subject={subject} mr={10} key={subject} />
            ))}
          </S.SubjectsList>
        </S.InfoBlock>
        <S.ChanceBlock>
          <S.BigNumber currentColor={chancecolor}>
            {faculty.points[0].score}
          </S.BigNumber>
          <S.ChanceText mt={10} currentColor={chancecolor}>
            {chanceText}
          </S.ChanceText>
          <S.ProgressBar mt={16}>
            <S.Status currentColor={chancecolor} width={chance} />
          </S.ProgressBar>
        </S.ChanceBlock>
      </S.MainSection>
      {!isVisible && (
        <S.ToggleArrowToBottom src={toggleArrowIcon} onClick={setVisible} />
      )}
      <S.OtherSection isVisible={isVisible}>
        <h2>asfasfasf</h2>
      </S.OtherSection>
      {isVisible && (
        <S.ToggleArrowToTop src={toggleArrowIcon} onClick={setVisible} />
      )}
    </S.Root>
  );
};

export default React.memo(Faculty);
