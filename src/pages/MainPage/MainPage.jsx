import React from "react";
import SubjectInput from "@components/SubjectInput";
import * as S from "./MainPage.styled";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Toggle from "@components/Toggle";
import Popper from "@components/Popper/Popper";
import { PopperBtn } from "@components/Popper/Popper.styled";
import useWindowResize from "@hooks/useWindowResize";
import { Viewport } from "@styles/media";
import getInitialForSubject from "@utils/getInitialForSubject";

const MainPage = ({ data, onSetOther, gto, onSetSubjects, resetData }) => {
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
          onReset={resetData}
          initialValues={{
            rus: getInitialForSubject(data, "rus"),
            math: getInitialForSubject(data, "math"),
            ikt: getInitialForSubject(data, "ikt"),
            social: getInitialForSubject(data, "social"),
            eng: getInitialForSubject(data, "eng"),
            bio: getInitialForSubject(data, "bio"),
            geo: getInitialForSubject(data, "geo"),
            chem: getInitialForSubject(data, "chem"),
            phys: getInitialForSubject(data, "phys"),
            litr: getInitialForSubject(data, "litr"),
            hist: getInitialForSubject(data, "hist"),
            creative: getInitialForSubject(data, "creative"),
            fullTime: data.studyForm.fullTime || false,
            partTime: data.studyForm.partTime || false,
            fullPartTime: data.studyForm.fullPartTime || false,
            medal: data.other.medal || false,
            volunteering: data.other.volunteering || false,
          }}
          validationSchema={Yup.object({
            rus: Yup.number().max(100),
            math: Yup.number().max(100),
            ikt: Yup.number().max(100),
            social: Yup.number().max(100),
            eng: Yup.number().max(100),
            bio: Yup.number().max(100),
            geo: Yup.number().max(100),
            chem: Yup.number().max(100),
            phys: Yup.number().max(100),
            litr: Yup.number().max(100),
            hist: Yup.number().max(100),
            creative: Yup.number().max(100),
            fullTime: Yup.boolean(),
            partTime: Yup.boolean(),
            fullPartTime: Yup.boolean(),
            medal: Yup.boolean(),
            volunteering: Yup.boolean(),
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
                <SubjectInput
                  title="Испытание"
                  value={values.creative}
                  name="creative"
                  onChange={handleChange}
                />
              </S.InputsBlock>
              {/* <S.SubTitle mt={40}>Форма обучения</S.SubTitle> */}
              {/* <S.TogglesBlock>
                <Toggle
                  name="fullTime"
                  text="Очная"
                  width={155}
                  isActive={values.fullTime}
                  setActive={handleChange}
                  mr={isMobile ? 0 : 26}
                />
                <Toggle
                  name="partTime"
                  text="Заочная"
                  width={173}
                  isActive={values.partTime}
                  setActive={handleChange}
                  mr={isMobile ? 0 : 26}
                />
                <Toggle
                  name="fullPartTime"
                  text="Очно-заочная"
                  width={228}
                  isActive={values.fullPartTime}
                  setActive={handleChange}
                />
              </S.TogglesBlock> */}
              <S.SubTitle mt={30}>Укажите индивидуальные достижения</S.SubTitle>
              <S.TogglesBlock>
                <Toggle
                  name="medal"
                  text="Золотая медаль"
                  width={245}
                  isActive={values.medal}
                  setActive={handleChange}
                  mr={isMobile ? 0 : 26}
                />
                <Toggle
                  name="volunteering"
                  text="Волонтерство"
                  width={228}
                  isActive={values.volunteering}
                  setActive={handleChange}
                  mr={isMobile ? 0 : 26}
                />
                <Popper value={data.other.gto}>
                  <PopperBtn
                    onClick={() => onSetOther({ name: "gto", value: null })}
                  >
                    –––––––
                  </PopperBtn>
                  <PopperBtn
                    onClick={() => onSetOther({ name: "gto", value: "gold" })}
                  >
                    Золото
                  </PopperBtn>
                  <PopperBtn
                    onClick={() => onSetOther({ name: "gto", value: "silver" })}
                  >
                    Серебро
                  </PopperBtn>
                  <PopperBtn
                    onClick={() => onSetOther({ name: "gto", value: "bronze" })}
                  >
                    Бронза
                  </PopperBtn>
                </Popper>
                {/* <S.OtherBtnBody ml={26} width={240}>
                  <S.Text>Дополнительно</S.Text>
                </S.OtherBtnBody> */}
              </S.TogglesBlock>
              <S.SubmitBtn type="submit" disabled={!isValid} mt={60}>
                Рассчитать свои шансы
              </S.SubmitBtn>
              <S.ResetBtn type="reset" mt={20}>
                Очистить
              </S.ResetBtn>
            </Form>
          )}
        </Formik>
      </S.Content>
    </S.Root>
  );
};

export default React.memo(MainPage);
