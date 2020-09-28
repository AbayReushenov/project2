// id задания: 22 Не сдано
// Задание: Напишите программу, которая принимает с клавиатуры два числа, образующих ответ на вопрос «который час?» (первое – часы, второе минуты, например, 15 и 42) и выводит на экран следующие значения (каждое – в отдельной строке): сколько секунд прошло с полуночи да «данного момента» и сколько минут прошло за это же время, а также сколько минут осталось до полуночи.

// const hours = +prompt("Который час? Введите часы: "),
//       minutes = +prompt("Введите минуты: ");

// let dateCustom = new Date(),
//     timeTodayNight = new Date(),
//     timeLastNight = new Date();

// dateCustom.setHours(hours);
// dateCustom.setMinutes(minutes);
// timeLastNight.setHours(0);
// timeLastNight.setMinutes(0);
// timeTodayNight.setHours(24);
// timeTodayNight.setMinutes(0);

// const sec1 = Math.floor((dateCustom.getTime() - timeLastNight.getTime()) / 1000),
//       minutes1 = Math.floor(sec1 / 60),
//       minutes2 = Math.floor((timeTodayNight.getTime() - dateCustom.getTime() ) / 1000 / 60);
// // console.log(dateCustom);
// // console.log(timeTodayNight)
// // console.log(timeLastNight)

// alert(`C полуночи до «данного момента» прошло ${sec1}секунд
//       \nC полуночи до «данного момента» прошло ${minutes1} минут.
//       \nДо полуночи c «данного момента» осталось ${minutes2} минут.`)


// dateCustom = new Date();
// console.log(dateCustom)
// dateCustom.setHours(0);
// dateCustom.setMinutes(0);
// console.log(dateCustom)

// Задание: Напишите код, который принимает от пользователя целое положительное двузначное число. Затем следует построить новое значение, составленное из цифр числа, введенного с клавиатуры, но в обратном порядке. После этого новое значение следует увеличить на 8 и окончательный результат вывести на экран. То есть для числа 37 следует построить число 73 и вывести на экран 81.

const str = String(prompt("Ввведите  2-х значное число: ")),
    arr = [...str],
    arrReverse = arr.reverse(),
    strReverse = arrReverse.join(''),
    numreverse = Number(strReverse),
    numPlus8 = numreverse + 8
alert(numPlus8);


