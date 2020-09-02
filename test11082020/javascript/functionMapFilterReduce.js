const students = [
    { name: "Nick", grade: 10 },
    { name: "John", grade: 15 },
    { name: "Julia", grade: 19 },
    { name: "Nathalie", grade: 9 },
  ];
  
  const aboveTenSum = students
    .map(student => student.grade) // сравниваем массив студентов с массивом их оценок
    .filter(grade => grade >= 10) // отбираем оценки выше 10
    .reduce((prev, next) => prev + next, 0); // суммируем каждую оценку выше 10
  
  console.log(aboveTenSum) // 44 -- 10 (Nick) + 15 (John) + 19 (Julia), Nathalie игнорируется, поскольку её оценка ниже 10