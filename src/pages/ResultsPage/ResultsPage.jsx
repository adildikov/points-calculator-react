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
  { value: "asc", label: "По названию (А-Я)" },
  { value: "desc", label: "По названию (Я-А)" },
];

const ResultsPage = ({
  directions,
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
                  filter: "asc",
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
                    placeholder="Сортировка"
                    withLabel
                  />
                </S.Form>
              </Formik>
            </S.SearchFilterWrapper>
            <S.FacultyList>
              {directions &&
                directions.map((direction) => (
                  <Faculty
                    faculty={direction}
                    totalScore={score.totalScore}
                    subjects={subjects}
                    key={direction.id}
                  />
                ))}
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
