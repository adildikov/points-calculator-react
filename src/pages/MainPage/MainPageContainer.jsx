import React, { useCallback, useEffect } from "react";
import { useActionWithPayload, useAction } from "@hooks/useAction";
import useToggle from "@hooks/useToggle";
import MainPage from "./MainPage";
import { actions } from "@models/form";
import { rootSelector } from "@models/form/selectors";
import sortAndConvertSubjectsValues from "@utils/sortAndConvertSubjectsValues";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const MainPageContainer = () => {
  const history = useHistory();
  const data = useSelector(rootSelector);
  const [studyForm, setStudyForm] = useToggle(data.studyForm.fullTime || false);
  const [studyForm2, setStudyForm2] = useToggle(
    data.studyForm.partTime || false
  );
  const [studyForm3, setStudyForm3] = useToggle(
    data.studyForm.fullPartTime || false
  );
  const setSubjects = useActionWithPayload(actions.setSubjects);
  const setStudyFormAction = useActionWithPayload(actions.setStudyForm);
  const setOther = useActionWithPayload(actions.setOther);
  const resetData = useAction(actions.resetData);

  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, []);

  const handleSetSubjects = useCallback(
    (values) => {
      setSubjects(sortAndConvertSubjectsValues(values));
      setStudyFormAction({
        fullTime: values.fullTime,
        partTime: values.partTime,
        fullPartTime: values.fullPartTime,
      });
      setOther({ name: "medal", value: values.medal });
      setOther({ name: "volunteering", value: values.volunteering });
      history.push("/results");
    },
    [setSubjects, history, setOther, setStudyFormAction]
  );

  const handleSetOther = useCallback(
    (payload) => {
      console.info(payload);
      setOther(payload);
    },
    [setOther]
  );

  const handleResetData = useCallback(() => {
    resetData();
    window.scrollTo(0, 0);
    document.location.reload();
  }, [resetData]);

  return (
    <MainPage
      data={data}
      onSetOther={handleSetOther}
      studyForm={studyForm}
      setStudyForm={setStudyForm}
      studyForm2={studyForm2}
      setStudyForm2={setStudyForm2}
      studyForm3={studyForm3}
      setStudyForm3={setStudyForm3}
      medal={data.other.medal}
      volunteering={data.other.volunteering}
      gto={data.other.gto}
      onSetSubjects={handleSetSubjects}
      resetData={handleResetData}
    />
  );
};

export default MainPageContainer;
