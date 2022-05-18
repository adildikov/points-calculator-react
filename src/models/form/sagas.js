import { takeEvery, all, call, put, select } from "redux-saga/effects";
import { getDirectionsApi } from "@api";
import countMean from "@utils/countMean";
import countChance from "@utils/countChance";

import { actions } from "./index";
import { subjectsaSelector } from "./selectors";

function* getDirections({payload}) {
  try {
    const response = yield call(getDirectionsApi, payload);
    yield put(actions.getDirectionsSuccess(response));
  } catch (err) {
    yield console.error(err);
  }
}

function* getFilteredFacultiesChance({payload}) {
  try {
    const subjects = yield select(subjectsaSelector);
    const response = yield call(getDirectionsApi, payload);
    const faculties = [];
    response.forEach(faculty => {
      const { chance } = countChance(
        faculty.points[0].score,
        countMean(faculty.points),
        faculty.number_of_places[0].score,
        countMean(faculty.number_of_places),
        faculty.subjects,
        subjects
      );
      faculties.push({...faculty, chance })
    })
    faculties.sort((faculty1, faculty2) => (
      payload.filter === "chanceAsc"
      ? faculty2.chance - faculty1.chance
      : faculty1.chance - faculty2.chance
    ));
    yield put(actions.getDirectionsSuccess(faculties));
  } catch (err) {
    yield console.error(err);
  }
}

function* mainSagas () {
  yield all([takeEvery(actions.getDirections.type, getDirections)]);
  yield all([takeEvery(actions.getFilteredFacultiesChance.type, getFilteredFacultiesChance)]);
}

export default mainSagas
