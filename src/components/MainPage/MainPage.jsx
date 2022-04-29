import React from "react";
import SubjectInput from "@components/SubjectInput";
import * as S from "./MainPage.styled";
import { Formik } from "formik";
import * as Yup from "yup";
import Toggle from "@components/Toggle";
import Popper from "../Popper/Popper";
import { PopperBtn } from "../Popper/Popper.styled";

const MainPage = ({
  studyForm,
  setStudyForm,
  studyForm2,
  setStudyForm2,
  studyForm3,
  setStudyForm3,
  medal,
  setMedal,
  volunteering,
  setVolunteering,
  gto,
  setGto,
}) => {
  return (
    <S.Root>
      <S.Content>
        <S.Title>Калькулятор баллов ЕГЭ</S.Title>
        <S.SubTitle mt={20}>
          Узнайте свои шансы поступить в Тверской государственный университет
        </S.SubTitle>
        <Formik
          onSubmit={() => {}}
          initialValues={{
            rus: null,
            math: null,
            ikt: null,
            social: null,
            eng: null,
            bio: null,
            geo: null,
            chem: null,
            phys: null,
            litr: null,
            hist: null,
          }}
          validationSchema={Yup.object({
            rus: Yup.number().required("Required"),
            math: Yup.number().required("Required"),
            ikt: Yup.number(),
            social: Yup.number(),
            eng: Yup.number(),
            bio: Yup.number(),
            geo: Yup.number(),
            chem: Yup.number(),
            phys: Yup.number(),
            litr: Yup.number(),
            hist: Yup.number(),
          })}
        >
          {({ values, errors, isValid, handleBlur, handleChange }) => (
            <>
              <S.InputsBlock>
                {console.info(errors)}
                <SubjectInput
                  name="rus"
                  title="Русский язык"
                  value={values.rus}
                  onChange={handleChange}
                />
                <SubjectInput
                  title="Математика"
                  value={values.math}
                  name="math"
                  onChange={handleChange}
                />
                <SubjectInput
                  title="Обществознание"
                  value={values.social}
                  name="social"
                  onChange={handleChange}
                />
                <SubjectInput
                  title="Иностранный язык"
                  value={values.eng}
                  name="eng"
                  onChange={handleChange}
                />
                <SubjectInput
                  title="ИКТ"
                  value={values.ikt}
                  name="ikt"
                  onChange={handleChange}
                />
                <SubjectInput
                  title="Биология"
                  value={values.bio}
                  name="bio"
                  onChange={handleChange}
                />
                <SubjectInput
                  title="География"
                  value={values.geo}
                  name="geo"
                  onChange={handleChange}
                />
                <SubjectInput
                  title="Химия"
                  value={values.chem}
                  name="chem"
                  onChange={handleChange}
                />
                <SubjectInput
                  title="Физика"
                  value={values.phys}
                  name="phys"
                  onChange={handleChange}
                />
                <SubjectInput
                  title="Литература"
                  value={values.litr}
                  name="litr"
                  onChange={handleChange}
                />
                <SubjectInput
                  title="История"
                  value={values.hist}
                  name="hist"
                  onChange={handleChange}
                />
              </S.InputsBlock>
              <S.SubTitle mt={40}>Форма обучения</S.SubTitle>
              <S.TogglesBlock>
                <Toggle
                  text="Очная"
                  width={155}
                  isActive={studyForm}
                  setActive={setStudyForm}
                />
                <Toggle
                  text="Заочная"
                  width={173}
                  isActive={studyForm2}
                  setActive={setStudyForm2}
                  ml={26}
                />
                <Toggle
                  text="Очно-заочная"
                  width={228}
                  isActive={studyForm3}
                  setActive={setStudyForm3}
                  ml={26}
                />
              </S.TogglesBlock>
              <S.SubTitle mt={30}>Укажите индивидуальные достижения</S.SubTitle>
              <S.TogglesBlock>
                <Toggle
                  text="Золотая медаль"
                  width={245}
                  isActive={medal}
                  setActive={setMedal}
                />
                <Toggle
                  text="Волонтерство"
                  width={228}
                  isActive={volunteering}
                  setActive={setVolunteering}
                  ml={26}
                />
                <Popper ml={26} value={gto}>
                  <PopperBtn onClick={() => setGto(null)}>–––––––</PopperBtn>
                  <PopperBtn onClick={() => setGto("gold")}>Золото</PopperBtn>
                  <PopperBtn onClick={() => setGto("silver")}>
                    Серебро
                  </PopperBtn>
                  <PopperBtn onClick={() => setGto("bronze")}>Бронза</PopperBtn>
                </Popper>
              </S.TogglesBlock>
            </>
          )}
        </Formik>
      </S.Content>
    </S.Root>
  );
};

export default React.memo(MainPage);
