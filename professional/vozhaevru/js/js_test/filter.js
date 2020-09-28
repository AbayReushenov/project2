let base = [2, 4, 4, -4, 8, 8, 4, 12, 12, 14, -20, -100, 1205, 20, 13, 0, 1, 10 , 11, 9],
    newBase = base.filter(element => 0 < element &&  element < 10)

alert(`Дан массив: [${base}]\n Новый массив [${newBase}]`)