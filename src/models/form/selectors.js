import { createSelector } from "reselect";

const rootSelector = (state) => state.form;

export const subjectsaSelector = createSelector(
  rootSelector,
  (state) => state.subjects
);
