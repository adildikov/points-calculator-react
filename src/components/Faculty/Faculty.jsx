import React from "react";
import SubjectBubble from "@components/SubjectBubble";
import * as S from "./Faculty.styled";
import useToggle from "@hooks/useToggle";
import toggleArrowIcon from "@images/toggleArrow.svg";

const Faculty = ({ faculty }) => {
  const [isVisible, setVisible] = useToggle(false);

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
          <S.BigNumber>{faculty.points[0].score}</S.BigNumber>
          <S.ChanceText mt={10}>Очень высокий шанс поступления</S.ChanceText>
          <S.ProgressBar mt={16}>
            <S.Status />
          </S.ProgressBar>
        </S.ChanceBlock>
      </S.MainSection>
      <S.ToggleArrow
        src={toggleArrowIcon}
        isVisible={isVisible}
        onClick={setVisible}
      />
      <S.OtherSection isVisible={isVisible}>
        <h2>asfasfasf</h2>
      </S.OtherSection>
    </S.Root>
  );
};

export default Faculty;
