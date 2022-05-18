import Colors from "@styles/colors";

const countChance = (scoreLastYear, averageScore, numberOfPlaces, averageNumberOfPlaces, subjectsinit, userSubjects) => {
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
      subjects.push(item.split("/"));
    }
  })
  let correct = 0;
  let count1 = 0;
  subjects.forEach(subject => {
    if (!Array.isArray(subject)) {
      userSubjects.forEach(userSubject => {
        if (userSubject.title === subject && userSubject.score !== 0) {
          correct += 1;
          count1 += +userSubject.score;
          // count2 += +userSubject.score;
        }
      })
    } else {
      const subj1 = userSubjects.find(userSubject => userSubject.title === subject[0] && userSubject.score !== 0);
      const subj2 = userSubjects.find(userSubject => userSubject.title === subject[1] && userSubject.score !== 0);
      if (subj1 && subj2 && subj1.score > subj2.score) {
        count1 += subj1.score;
        correct += 1;
      } else if (subj1 && subj2 && subj1.score <= subj2.score) {
        count1 += subj2.score;
        correct += 1;
      } else if (subj1 && subj2 === undefined) {
        count1 += subj1.score;
        correct += 1;
      } else if (subj2 && subj1 === undefined) {
        count1 += subj2.score;
        correct += 1;
      }
    }
  })
  if (correct >= 3) {
    chance += 10;
    if (count1 > scoreLastYear && numberOfPlaces > 0) {
      chance *= 6;
    } else if (count1 + 5 > scoreLastYear && numberOfPlaces > 0) {
      chance *= 4;
    } else if (count1 + 10 > scoreLastYear && numberOfPlaces > 0) {
      chance *= 3;
    } else if (count1 + 15 > scoreLastYear && numberOfPlaces > 0) {
      chance *= 2;
    }
    if (count1 > averageScore) {
      chance *= 1.3
    }
    if (numberOfPlaces > 30) {
      chance *= 1.3
    } else if (numberOfPlaces > 20) {
      chance *= 1.2
    } else if (numberOfPlaces > 10) {
      chance *= 1.1
    } else if (numberOfPlaces < 3) {
      chance *= 0.8
    } 
    if (averageNumberOfPlaces > 5) {
      chance *= 1.2
    } else if (averageNumberOfPlaces > 2) {
      chance *= 1.05
    } else {
      chance *= 0.8
    }
  }
  // console.info(subjectsinit, 'count1', count1, 'correct', correct, 'chance', chance);
  return {
    chance: chance > 120 ? 100 : chance > 100 ? 95 : chance,
    chancecolor: chance >= 92 
      ? Colors.green
      : chance < 92 && chance >= 60
      ? Colors.blue
      : chance < 60 && chance > 10
      ? Colors.red
      : Colors.grey,
    chanceText: chance >= 92 
      ? "Очень высокий шанс поступления"
      : chance < 92 && chance >= 60
      ? "Средний шанс поступления"
      : chance < 60 && chance > 10
      ? "Низкий шанс поступления"
      : "Недостаточно баллов для поступления"
  };
};

export default countChance;