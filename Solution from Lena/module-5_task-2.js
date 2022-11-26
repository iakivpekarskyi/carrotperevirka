// -----------------------------------------TASK 1------------------------------------------//
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків

const hogvarts = {
  griffindor: [
    {
      name: 'Harry',
      points: 17,
    },
    {
      name: 'Hermiona',
      points: 19,
    },
    {
      name: 'Ron',
      points: 14,
    },
  ],
  sliserin: [
    {
      name: 'Draco',
      points: 47,
    },
    {
      name: 'Goyl',
      points: 14,
    },
    {
      name: 'Crabbe',
      points: 5,
    },
  ],
  getFaculty(faculty) {
    if (Object.keys(this).includes(faculty)) {
      let studentList = [];
      for (const student of this[faculty]) {
        studentList.push(student.name);
      }
      return studentList;
    }

    return `ERROR! ${faculty} is not found!`;
  },

  facultyTotalScore(faculty) {
    if (Object.keys(this).includes(faculty)) {
      const facultyList = this[faculty];
      //   console.log(this[faculty]);
      return facultyList.reduce((total, student) => {
        total += student.points;
        return total;
      }, 0);
    }
    return `ERROR! ${faculty} is not found!`;
  },
  //WinnerHogvarts isn`t an universal method
  winnerHogvarts() {
    const totalScoreGriffindor = this.griffindor.reduce((total, faculty) => {
      total += faculty.points;
      return total;
    }, 0);
    const totalScoreSliserin = this.sliserin.reduce((total, faculty) => {
      total += faculty.points;
      return total;
    }, 0);
    return totalScoreGriffindor > totalScoreSliserin ? `Winner Griffindor!` : `Winner Sliserin!`;
  },
};

// TEST!!!

// console.log(hogvarts.getFaculty('griffindor'));
// console.log(hogvarts.facultyTotalScore('sliserin'));
// console.log(hogvarts.winnerHogvarts());




//   getBestScore(faculty1, faculty2) {
//       const score1 = this[faculty1].reduce((totalScore, student) => {
//           totalScore += student.points;
//           return totalScore;
//       }, 0);
//       this.totalScore = score1;

//       const score2 = this[faculty2].reduce((totalScore, student) => {
//           totalScore += student.points;
//           return totalScore;
//       }, 0);

//       if (score1 > score2) {
//           return ` best faculty - ${faculty1}, Score - ${score1} `;
//       }
//       return ` best faculty - ${faculty2} Score - ${score2}   `;
//   }



// console.log(hogvarts.getBestScore('sliserin', 'griffindor'));

