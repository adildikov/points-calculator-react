const subjNames = ["rus", "math", "ikt", "social", "eng", "bio", "geo", "chem", "phys", "litr", "hist"];

const sortAndConvertSubjectsValues = (values) => {
  return Object.entries(values)
    .filter(item => subjNames.includes(item[0]))
    .map((item) => ({
      title: item[0],
      score: item[1],
    }))
    .sort((a, b) => {
      if (a.score < b.score) {
        return 1;
      }
      if (a.score > b.score) {
        return -1;
      }
      return 0;
    })
  };

export default sortAndConvertSubjectsValues;