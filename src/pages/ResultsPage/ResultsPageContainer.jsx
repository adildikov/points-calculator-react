import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ResultsPage from "./ResultsPage";
import { subjectsaSelector, otherSelector } from "@models/form/selectors";
import getIndividual from "@utils/getIndividual";

const ResultsPageContainer = () => {
  const subjects = useSelector(subjectsaSelector);
  const otherResults = useSelector(otherSelector);
  const [score, setScore] = useState({
    totalScore: 0,
    individual: 0,
    examsScore: 0,
  });
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("title");

  useEffect(() => {
    const examsScore = subjects.reduce((sum, subj) => sum + +subj.score, 0);
    const individual = getIndividual(otherResults);
    setScore({
      totalScore: examsScore + individual,
      individual,
      examsScore,
    });
  }, [otherResults, subjects]);

  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, []);

  return (
    <ResultsPage
      exams={subjects}
      score={score}
      search={search}
      setSearch={setSearch}
      filter={filter}
      setFilter={setFilter}
    />
  );
};

export default ResultsPageContainer;
