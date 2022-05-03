const sortAndConvertSubjectsValues = (values) => (
  Object.entries(values)
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
);

export default sortAndConvertSubjectsValues;