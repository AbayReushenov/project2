// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.

function twoNum(a, b){
    return (a + b > 10);
}
alert(twoNum(6, 5));
alert(twoNum(4, 3));

//Запросить у пользователя ввод числа и сохранить это число в переменную a.Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
let a = prompt("Введите число от 1 до 10: ");
      if(a == 10){
        alert(" Поздравляем! Число указано верно!");
      }else if(a !=10){
        alert("Число указано не верно!");
      }

    //   Тема: Ветвления. Циклы.
    //   Напишите фрагмент кода, в котором переменным а и b будут присваиваться числовые значения пользователем, с помощью команды (prompt()). Далее необходимо проверить, что число попадает в диапазон "однозначное положительное число". Затем следует присвоить переменной с значение, составленное следующим образом: значение переменной а является числом десятков, значение переменной b является числом единиц. Например, если переменной а присваивается значение 4, а переменной b – значение 7, то переменная с получает значение 47. Вывести результат на экран.

    let a = +prompt("Введите первое однозначное положительноечисло:");
    let b = +prompt("Введите второе однозначное положительноечисло:");
    if ((!(a>0 && a<10)) || (!(b>0 && b<10))){
      console.log("Ошибочное число!");
    }else{ 
      console.log(a*10+b);
    }   

