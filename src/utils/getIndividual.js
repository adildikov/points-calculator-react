const getIndividual = (values) => {
  let res = 0;
  if (values.medal) {
    res += 10
  }
  if (values.gto === "gold") {
    res += 3;
  } else if (values.gto === "silver") {
    res += 2;
  } else if (values.gto === "bronze") {
    res += 1;
  }
  if (values.volunteering) {
    res += 4;
  }
  return res > 10 ? 10 : res;
};

export default getIndividual;