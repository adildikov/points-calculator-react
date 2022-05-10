import React from "react";
import UserResult from "@components/UserResult";
import * as S from "./ResultsPage.styled";
import SearchBar from "@components/SearchBar";
import * as Yup from "yup";
import { Field, Formik } from "formik";
import SelectField from "@components/CustomDropdown";
import AppLink from "@components/AppLink";
import Faculty from "@components/Faculty/Faculty";

const options = [
  { value: "title", label: "Title " },
  { value: "created_at", label: "Date" },
];

const fac = {
  id: 0,
  name: "Экономика",
  numid: "38.03.01",
  type: "Бакалавриат",
  subjects: ["rus", "math", "social"],
  points: [
    {
      year: 2021,
      score: 274,
    },
    {
      year: 2020,
      score: 255,
    },
    {
      year: 2019,
      score: 252,
    },
    {
      year: 2018,
      score: 245,
    },
  ],
  number_of_places: [
    {
      year: 2021,
      score: 4,
    },
    {
      year: 2020,
      score: 5,
    },
    {
      year: 2019,
      score: 0,
    },
    {
      year: 2018,
      score: null,
    },
  ],
  cost: 108370,
};

const fac2 = {
  id: 1,
  name: "Фундаментальная информатика и информационные технологии",
  numid: "02.03.02",
  type: "Бакалавриат",
  subjects: ["rus", "math", "ikt/phys"],
  points: [
    {
      year: 2021,
      score: 184,
    },
    {
      year: 2020,
      score: 184,
    },
    {
      year: 2019,
      score: 201,
    },
    {
      year: 2018,
      score: 186,
    },
  ],
  number_of_places: [
    {
      year: 2021,
      score: 50,
    },
    {
      year: 2020,
      score: 50,
    },
    {
      year: 2019,
      score: 29,
    },
    {
      year: 2018,
      score: null,
    },
  ],
  cost: 108370,
};

const ResultsPage = ({
  subjects,
  score,
  search,
  setSearch,
  onSelectChange,
}) => {
  return (
    <S.Root>
      {subjects.length > 0 ? (
        <>
          <UserResult exams={subjects} score={score} />
          <S.Content>
            <S.Title>Предложенные направления</S.Title>
            <S.SearchFilterWrapper>
              <SearchBar
                value={search}
                onSet={setSearch}
                defaultValue=""
                placeholder=""
                margin="0px auto 0px auto"
              />
              <Formik
                onSubmit={() => {}}
                initialValues={{
                  filter: "title",
                }}
                validationSchema={Yup.object({
                  filter: Yup.string().required("Filter is required"),
                })}
              >
                <S.Form>
                  <Field
                    background="white"
                    noBorder
                    width="289px"
                    boxShadow="0px 10px 30px rgba(19, 23, 31, 0.1)"
                    borderRadius="50px"
                    name="filter"
                    component={SelectField}
                    options={options}
                    handleChange={onSelectChange}
                    placeholder="Sort by"
                    withLabel
                  />
                </S.Form>
              </Formik>
            </S.SearchFilterWrapper>
            <S.FacultyList>
              <Faculty
                faculty={fac}
                totalScore={score.totalScore}
                subjects={subjects}
              />
              <Faculty
                faculty={fac2}
                totalScore={score.totalScore}
                subjects={subjects}
              />
            </S.FacultyList>
          </S.Content>
        </>
      ) : (
        <S.EmptyPage>
          <S.ContentEmpty>
            <S.EmptyTitle>Недостаточно данных</S.EmptyTitle>
            <S.EmptySubTitle>
              Для корректной работы необходимо заполнить форму на главной
              странице
            </S.EmptySubTitle>
            <AppLink to="/">
              <S.Btn>На главную</S.Btn>
            </AppLink>
          </S.ContentEmpty>
        </S.EmptyPage>
      )}
    </S.Root>
  );
};

export default ResultsPage;
