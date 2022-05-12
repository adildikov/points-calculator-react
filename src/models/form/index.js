import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('data')
  ? JSON.parse(localStorage.getItem('data'))
  : {
      directions: [],
      subjects: [],
      studyForm: {
        fullTime: false,
        partTime: false,
        fullPartTime: false,
      },
      other: {
        medal: false,
        volunteering: false,
        gto: null,
    }
  };

const form = createSlice({
  name: "data",
  initialState,
  reducers: {
    setSubjects(state, {payload}) {
      state.subjects = payload;
      localStorage.setItem('data', JSON.stringify(state));
    },
    setStudyForm(state, {payload}) {
      state.studyForm = payload;
      localStorage.setItem('data', JSON.stringify(state));
    },
    setOther(state, {payload}) {
      state.other[payload.name] = payload.value;
      localStorage.setItem('data', JSON.stringify(state));
    },
    resetData(state) {
      localStorage.removeItem('data');
      state.subjects = [];
      state.studyForm = {
        fullTime: false,
        partTime: false,
        fullPartTime: false,
      };
      state.other = {
        medal: false,
        volunteering: false,
        gto: false,
      };
    },
    getDirections: (state, { payload }) => state,
    getDirectionsSuccess(state, {payload}) {
      state.directions = payload;
    },
    getFilteredFacultiesChance: (state, {payload}) => state,
  },
});

export const { actions } = form;

export default form.reducer;
