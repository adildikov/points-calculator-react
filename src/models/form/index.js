import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subjects: [],
  studyForm: {
    fullTime: false,
    partTime: false,
    fullPartTime: false,
  },
  other: {
    medal: false,
    volunteering: false,
    gto: false,
  }
};

const form = createSlice({
  name: "data",
  initialState,
  reducers: {
    setSubjects(state, {payload}) {
      state.subjects = payload;
    },
    setStudyForm(state, {payload}) {
      state.studyForm = payload;
    },
    setOther(state, {payload}) {
      state.other = payload;
    }
  },
});

export const { actions } = form;

export default form.reducer;
