import React from "react";
import SubjectInput from "@components/SubjectInput";
import * as S from "./MainPage.styled";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Toggle from "@components/Toggle";
import Popper from "../Popper/Popper";
import { PopperBtn } from "../Popper/Popper.styled";
import useWindowResize from "@hooks/useWindowResize";
import { Viewport } from "@styles/media";

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
  onSetSubjects,
}) => {
  const { width: windowWidth } = useWindowResize();
  const isMobile = windowWidth <= Viewport.mobile;
  return (
    <S.Root>
      <S.Content>
        <S.Title>Калькулятор баллов ЕГЭ</S.Title>
        <S.SubTitle mt={20}>
          Узнайте свои шансы поступить в Тверской государственный университет
        </S.SubTitle>
        <Formik
          onSubmit={onSetSubjects}
          initialValues={{
            rus: 0,
            math: 0,
            ikt: 0,
            social: 0,
            eng: 0,
            bio: 0,
            geo: 0,
            chem: 0,
            phys: 0,
            litr: 0,
            hist: 0,
          }}
          validationSchema={Yup.object({
            rus: Yup.number().required().min(1).max(100),
            math: Yup.number().required().min(1).max(100),
            ikt: Yup.number().max(100),
            social: Yup.number().max(100),
            eng: Yup.number().max(100),
            bio: Yup.number().max(100),
            geo: Yup.number().max(100),
            chem: Yup.number().max(100),
            phys: Yup.number().max(100),
            litr: Yup.number().max(100),
            hist: Yup.number().max(100),
          })}
        >
          {({ values, errors, isValid, handleChange }) => (
            <Form>
              <S.InputsBlock>
                <SubjectInput
                  name="rus"
                  title="Русский язык"
                  value={values.rus}
                  onChange={handleChange}
                  error={errors.rus}
                />
                <SubjectInput
                  title="Математика"
                  value={values.math}
                  name="math"
                  onChange={handleChange}
                  error={errors.math}
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
                  mr={isMobile ? 0 : 26}
                />
                <Toggle
                  text="Заочная"
                  width={173}
                  isActive={studyForm2}
                  setActive={setStudyForm2}
                  mr={isMobile ? 0 : 26}
                />
                <Toggle
                  text="Очно-заочная"
                  width={228}
                  isActive={studyForm3}
                  setActive={setStudyForm3}
                />
              </S.TogglesBlock>
              <S.SubTitle mt={30}>Укажите индивидуальные достижения</S.SubTitle>
              <S.TogglesBlock>
                <Toggle
                  text="Золотая медаль"
                  width={245}
                  isActive={medal}
                  setActive={setMedal}
                  mr={isMobile ? 0 : 26}
                />
                <Toggle
                  text="Волонтерство"
                  width={228}
                  isActive={volunteering}
                  setActive={setVolunteering}
                  mr={isMobile ? 0 : 26}
                />
                <Popper value={gto}>
                  <PopperBtn onClick={() => setGto(null)}>–––––––</PopperBtn>
                  <PopperBtn onClick={() => setGto("gold")}>Золото</PopperBtn>
                  <PopperBtn onClick={() => setGto("silver")}>
                    Серебро
                  </PopperBtn>
                  <PopperBtn onClick={() => setGto("bronze")}>Бронза</PopperBtn>
                </Popper>
                {/* <S.OtherBtnBody ml={26} width={240}>
                  <S.Text>Дополнительно</S.Text>
                </S.OtherBtnBody> */}
              </S.TogglesBlock>
              <S.SubmitBtn type="submit" disabled={!isValid} mt={60}>
                {" "}
                Рассчитать свои шансы
              </S.SubmitBtn>
            </Form>
          )}
        </Formik>
      </S.Content>
    </S.Root>
  );
};

export default React.memo(MainPage);
