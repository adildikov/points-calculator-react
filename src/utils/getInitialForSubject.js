const getInitialForSubject = (data, subjectName) => 
  data.subjects.find((subj) => subj.title === subjectName)?.score || 0
;

export default getInitialForSubject;