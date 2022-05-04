import React from "react";
import UserResult from "@components/UserResult";
import * as S from "./ResultsPage.styled";
import SearchBar from "@components/SearchBar";
import * as Yup from "yup";
import { Field, Formik } from "formik";
import SelectField from "@components/CustomDropdown";

const ResultsPage = ({
  exams,
  score,
  search,
  setSearch,
  filter,
  setFilter,
  options,
  onSelectChange,
}) => {
  return (
    <S.Root>
      <UserResult exams={exams} score={score} />
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
      </S.Content>
    </S.Root>
  );
};

export default ResultsPage;
