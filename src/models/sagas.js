import { all } from "redux-saga/effects";
import formSagas from "./form/sagas";

export const rootSaga = function* rootSaga() {
  yield all([formSagas()]);
};