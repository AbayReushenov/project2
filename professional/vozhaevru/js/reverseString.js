let str = '123456',
    arr = [...str],
    arrReverse = arr.reverse();

str = arrReverse.join('');
alert(str);