import React from "react";
import SubjectInput from "@components/SubjectInput";
import * as S from "./MainPage.styled";
import { Formik } from "formik";
import * as Yup from "yup";

const MainPage = () => {
  return (
    <S.Root>
      <S.Content>
        <S.Title>Калькулятор баллов ЕГЭ</S.Title>
        <S.SubTitle>
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
          )}
        </Formik>
      </S.Content>
    </S.Root>
  );
};

export default MainPage;
