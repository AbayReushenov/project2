const str = String(prompt("Ввведите  2-х значное число: ")),
    arr = [...str],
    arrReverse = arr.reverse(),
    strReverse = arrReverse.join(''),
    numreverse = Number(strReverse),
    numPlus8 = numreverse + 8
alert(numPlus8);

