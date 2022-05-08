import Colors from "@styles/colors";

const countChance = (totalScore, scoreLastYear, averageScore, numberOfPlaces, averageNumberOfPlaces, subjectsinit, userSubjects) => {
  // console.info("totalScore", totalScore);
  // console.info("lastYearScore", scoreLastYear);
  // console.info("meanPoints", averageScore);
  // console.info("lastYearPlaces", numberOfPlaces);
  // console.info("meanPlaces", averageNumberOfPlaces);
  // console.info("subjects", subjectsinit);
  // console.info("userSubjects", userSubjects);
  let chance = 0;
  const subjects = [];
  subjectsinit.forEach(item => {
    if (!item.includes("/")) {
      subjects.push(item);
    } else {
      item.split("/").forEach(splitItem => subjects.push(splitItem));
    }
  })
  let correct = 0;
  subjects.forEach(subject => {
      if (!!userSubjects.find(userSubject => userSubject.title === subject && userSubject.score !== 0)) {
        correct += 1;
      }
    })
  if (correct >= 3) {
    chance += 10;
    if (totalScore > scoreLastYear && numberOfPlaces > 0) {
      chance *= 6;
    } else if (totalScore + 20 > scoreLastYear && numberOfPlaces > 0) {
      chance *= 4;
    } else if (totalScore + 10 > scoreLastYear && numberOfPlaces > 0) {
      chance *= 3;
    } else if (totalScore + 5 > scoreLastYear && numberOfPlaces > 0) {
      chance *= 2;
    }
    if (totalScore > averageScore) {
      chance *= 1.2
    }
    if (numberOfPlaces > 30) {
      chance *= 1.5
    } else if (numberOfPlaces > 15) {
      chance *= 1.2
    } else if (numberOfPlaces < 3) {
      chance *= 0.8
    } 
    if (averageNumberOfPlaces > 5) {
      chance *= 1.2
    } else {
      chance *= 0.8
    }
  }
  return {
    chance: chance > 120 ? 100 : chance > 100 ? 95 : chance,
    chancecolor: chance >= 100 
      ? Colors.green
      : chance < 100 && chance >= 60
      ? Colors.blue
      : chance < 60 && chance > 0
      ? Colors.red
      : Colors.grey,
    chanceText: chance >= 100 
      ? "Очень высокий шанс поступления"
      : chance < 100 && chance >= 60
      ? "Средний шанс поступления"
      : chance < 60 && chance > 0
      ? "Низкий шанс поступления"
      : "Недостаточно баллов для поступления"
  };
};

export default countChance;