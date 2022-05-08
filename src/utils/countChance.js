import Colors from '@styles/colors';

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
  } else {
    chance = 0;
  }
  if (totalScore > scoreLastYear && numberOfPlaces > 0) {
    chance += 60;
  } else if (totalScore + 20 > scoreLastYear && numberOfPlaces > 0) {
    chance += 40;
  } else if (totalScore + 10 > scoreLastYear && numberOfPlaces > 0) {
    chance += 30;
  } else if (totalScore + 5 > scoreLastYear && numberOfPlaces > 0) {
    chance += 20;
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
  return chance >= 100 
    ? Colors.green
    : chance < 100 && chance >= 60
    ? Colors.blue
    : chance < 60 && chance > 0
    ? Colors.red
    : Colors.grey;
};

export default countChance;