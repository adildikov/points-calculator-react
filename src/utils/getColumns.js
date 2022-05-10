import Colors from "@styles/colors";

const getColumns = (stats) => {
  const newStats = stats.slice(0, 3).reverse();
    const maxItem = newStats.slice().sort((a, b) => {
      if (a.score < b.score) {
        return 1;
      }
      if (a.score > b.score) {
        return -1;
      }
      return 0;
    })[0];
    const coef = maxItem.score / 100;
    newStats.forEach((item) => {
      item.score = Math.round(item.score / coef) * 0.9;
      item.color = item.score === maxItem.score ? Colors.red : Colors.blue;
    });
    return newStats;
};

export default getColumns;