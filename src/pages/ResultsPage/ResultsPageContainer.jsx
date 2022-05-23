import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import ResultsPage from "./ResultsPage";
import { subjectsaSelector, otherSelector } from "@models/form/selectors";
import getIndividual from "@utils/getIndividual";
import { actions } from "@models/form";
import { directionsSelector } from "@models/form/selectors";
import { useActionWithPayload } from "@hooks/useAction";

const ResultsPageContainer = () => {
  const subjects = useSelector(subjectsaSelector);
  const directions = useSelector(directionsSelector);
  const otherResults = useSelector(otherSelector);
  const getDirections = useActionWithPayload(actions.getDirections);
  const getFilteredFacultiesChance = useActionWithPayload(
    actions.getFilteredFacultiesChance
  );
  const [passedDirectionas, setPassedDirections] = useState(0);
  const [score, setScore] = useState({
    totalScore: 0,
    individual: 0,
    examsScore: 0,
  });
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("chanceAsc");

  useEffect(() => {
    if (filter === "chanceAsc" || filter === "chanceDesc") {
      getFilteredFacultiesChance({
        search,
        filter,
        totalScore: score.totalScore,
      });
    } else {
      getDirections({ search, filter });
    }
  }, [getDirections, search, filter, getFilteredFacultiesChance, score]);

  useEffect(() => {
    const examsScore = [...subjects]
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .reduce((sum, subj) => sum + +subj.score, 0);
    const individual = getIndividual(otherResults);
    setScore({
      totalScore: examsScore + individual,
      individual,
      examsScore,
    });
  }, [otherResults, subjects]);

  useEffect(() => {
    let counter = 0;
    directions.forEach((direction) => {
      if (direction.chance >= 95) {
        counter += 1;
      }
    });
    setPassedDirections(counter);
  }, [setPassedDirections, directions]);

  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, []);

  const handleSelectChange = useCallback(
    (value) => {
      setFilter(value);
    },
    [setFilter]
  );
  return (
    <ResultsPage
      directions={directions}
      subjects={subjects}
      score={score}
      search={search}
      setSearch={setSearch}
      onSelectChange={handleSelectChange}
      passedDirectionas={passedDirectionas}
    />
  );
};

export default ResultsPageContainer;
