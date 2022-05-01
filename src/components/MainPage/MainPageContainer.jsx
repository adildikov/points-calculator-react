import React, { useCallback, useEffect, useState } from "react";
import { useActionWithPayload } from "@hooks/useAction";
import useToggle from "../../hooks/useToggle";
import MainPage from "./MainPage";
import { actions } from "@models/form";

const MainPageContainer = () => {
  const [studyForm, setStudyForm] = useToggle(false);
  const [studyForm2, setStudyForm2] = useToggle(false);
  const [studyForm3, setStudyForm3] = useToggle(false);
  const [medal, setMedal] = useToggle(false);
  const [volunteering, setVolunteering] = useToggle(false);
  const [gto, setGto] = useState(null);

  const setSubjects = useActionWithPayload(actions.setSubjects);
  const setStudyFormAction = useActionWithPayload(actions.setStudyForm);
  const setOther = useActionWithPayload(actions.setOther);

  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, []);

  const handleSetSubjects = useCallback(
    (values) => {
      setSubjects(values);
    },
    [setSubjects]
  );

  useEffect(() => {
    setStudyFormAction({
      fullTime: studyForm,
      partTime: studyForm2,
      fullPartTime: studyForm3,
    });
  }, [studyForm, studyForm2, studyForm3, setStudyFormAction]);

  useEffect(() => {
    setOther({ medal, volunteering, gto });
  }, [medal, volunteering, gto, setOther]);

  return (
    <MainPage
      studyForm={studyForm}
      setStudyForm={setStudyForm}
      studyForm2={studyForm2}
      setStudyForm2={setStudyForm2}
      studyForm3={studyForm3}
      setStudyForm3={setStudyForm3}
      medal={medal}
      setMedal={setMedal}
      volunteering={volunteering}
      setVolunteering={setVolunteering}
      gto={gto}
      setGto={setGto}
      onSetSubjects={handleSetSubjects}
    />
  );
};

export default MainPageContainer;
