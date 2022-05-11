import { createSelector } from "reselect";

export const rootSelector = (state) => state.form;

export const subjectsaSelector = createSelector(
  rootSelector,
  (state) => state.subjects
);

export const otherSelector = createSelector(
  rootSelector,
  (state) => state.other
);

export const directionsSelector = createSelector(
  rootSelector,
  state => state.directions
)