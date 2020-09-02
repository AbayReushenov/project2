// пример yield *
function * genB(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
  }
  
  function * genA(i) {
    yield i;
    yield* genB(i);
    yield i + 10;
  }
  
  var gen = genA(10);
  
  console.log(gen.next().value); // 10
  console.log(gen.next().value); // 11
  console.log(gen.next().value); // 12
  console.log(gen.next().value); // 13
  console.log(gen.next().value); // 20
  console.log(gen.next().value); // undefined
  console.log(gen.next().value); // undefined
  console.log(gen.next().value); // undefined
  console.log(gen.next().value); // undefined


  // пример возврата функции-генератора
function* yieldAndReturn() {
    yield "Y";
    return "R";
    yield "unreachable";
  }
  
  var gen = yieldAndReturn()
  console.log(gen.next().value); // { значение: "Y", завершено: false }
  console.log(gen.next().value); // { значение: "R", завершено: true }
  console.log(gen.next().value); // { значение: не определено, завершено: true }
  console.log(gen.next().value);
// Y
// R
// undefined