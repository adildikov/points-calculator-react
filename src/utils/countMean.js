const countMean = (points) => {
  return Math.round(points.reduce((sum, item) => sum + +item.score, 0) / points.length);
};

export default countMean;