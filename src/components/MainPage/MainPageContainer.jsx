import React, { useState } from "react";
import useToggle from "../../hooks/useToggle";
import MainPage from "./MainPage";

const MainPageContainer = () => {
  const [studyForm, setStudyForm] = useToggle(false);
  const [studyForm2, setStudyForm2] = useToggle(false);
  const [studyForm3, setStudyForm3] = useToggle(false);
  const [medal, setMedal] = useToggle(false);
  const [volunteering, setVolunteering] = useToggle(false);
  const [gto, setGto] = useState(null);
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
    />
  );
};

export default MainPageContainer;
