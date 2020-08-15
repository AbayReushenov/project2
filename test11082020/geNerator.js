// пример yield *
//Функция next() выполняется до ключевого слова yield, которое возвращает значение во внешний код. 
function * idMaker() {
    var index = 0;
    while (index < 2) {
      yield index;
      index = index + 1;
    }
  }
  
  var gen = idMaker();
  
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // не определено
// 0
// 1
// undefined

function * downToOne(n) {
    for (let i = n; i > 0; --i) {
      yield i;
    }
  }
  
 console.log([...downToOne(5)]) // [ 5, 4, 3, 2, 1 ]
 var gen2 = downToOne(5);
  console.log(gen2.next().value); // 5
  console.log(gen2.next().value); // 4
  console.log(gen2.next().value); // 3
  console.log(gen2.next().value); // 2
  console.log(gen2.next().value); // 1
  console.log(gen2.next().value); // undefined
  console.log(gen2.next().value); // undefined