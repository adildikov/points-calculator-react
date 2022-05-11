import { takeEvery, all, call, put } from "redux-saga/effects";
import { getDirectionsRequest } from "@api";

import { actions } from "./index";

function* getDirections({payload}) {
  try {
    const response = yield call(getDirectionsRequest, payload);
    yield put(actions.getDirectionsSuccess(response));
  } catch (err) {
    yield console.error(err);
  }
}

export default function* () {
  yield all([takeEvery(actions.getDirections.type, getDirections)]);
}
