// Давайте предположим, что нам нужно добавить студента с его оценками и посчитать средний балл. Не лучше ли сделать два параметра двумя разными значениями, а затем собрать массив из полученных данных для итерации? В этом нам и поможет оставшийся параметр.


function myFunc() {
    for (var i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  }
  
  myFunc("Nick", "Anderson", 10, 12, 6);
  // "Nick"
  // "Anderson"
  // 10
  // 12
  // 6

function createStudent(firstName, lastName, ...grades) {
  // firstName = "Nick"
  // lastName = "Anderson"
  // [10, 12, 6]: "..." собирает оставшиеся параметры и создаёт содержащее их значение массива grades

  const avgGrade = grades.reduce((acc, curr) => acc + curr, 0) / grades.length; // высчитывает средний балл из всех

  return {
    firstName: firstName,
    lastName: lastName,
    grades: grades,
    avgGrade: avgGrade
  }
}

const student = createStudent("Nick", "Anderson", 10, 12, 6);
console.log(student);
// {
//   firstName: "Nick",
//   lastName: "Anderson",
//   grades: [10, 12, 6],
//   avgGrade: 9,33
// }