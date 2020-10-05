<?php
$a = 130;
$b = 22;

if ($a > $b) {
  echo "a больше b";
  $b = $a;
}
$b += 500;
echo '   $b = $a '.'<br>';
echo "   $b = $a "."<br>";
echo "   $b = $a ".'<br>';
echo "   $b = $a <br>";
echo '   $b = $a   <br> ';
if ($a > $b) {
    echo "a больше, чем b";
  } else {
    echo "a НЕ больше, чем b";
  }

echo '   $b = $a '.'<br>';

  if ($a > $b) {
    echo "a больше, чем b";
} elseif ($a == $b) {
    echo "a равен b";
} else {
    echo "a меньше, чем b";
}

echo '   $b = $a '.'<br>';

if($a > $b):
    echo $a." больше, чем ".$b;
elseif($a == $b): // Заметьте, тут одно слово.
    echo $a." равно ".$b;
else:
    echo $a." не больше и не равно ".$b;
endif;


echo '  <br> '.'<br>';

$i = 1;
while ($i <= 10) {
    echo '<br>' .$i++;  /* выводиться будет значение переменной
                   $i перед её увеличением
                   (post-increment) */
}

/* пример 2 */

$i = 1;
while ($i <= 10):
    echo '<br>' . $i ;
    $i++;
endwhile;


$i = 0;
do {
    echo '<br>' . $i .'<br>' ;
} while ($i > 0);

$i = 6;
$factor = -1.3;
$minimum_limit = -10;
do {
    if ($i < 5) {
        echo "i = $i еще недостаточно велико";
        break;
    }
    $i *= $factor;
    if ($i < $minimum_limit) {
        break;
    }
   echo "значение i $i уже подходит";

    /* обработка i */

} while (0);

/* пример 1 */

for ($i = 1; $i <= 10; $i++) {
    echo '<br>' . $i;
}

/* пример 2 */

for ($i = 1; ; $i++) {
    if ($i > 10) {
        break;
    }
    echo '<br>' . $i;
}

/* пример 3 */

$i = 1;
for (; ; ) {
    if ($i > 10) {
        break;
    }
    echo '<br>' . $i;
    $i++;
}

/* пример 4 */

for ($i = 1, $j = 0; $i <= 10; $j += $i, print '<br><br>' . $i, $i++);

/*
 * Это массив с некоторыми данными, которые мы хотим изменить
 * при работе цикла.
 */
$people = array(
    array('name' => 'Kalle', 'salt' => 856412),
    array('name' => 'Pierre', 'salt' => 215863)
);

for($i = 0; $i < count($people); ++$i) {
    $people[$i]['salt'] = mt_rand(0.00000, 99.9999);
    echo '<br>' .$people[$i]['salt'];
}


$arr = array(1, 2, 3, 4);
foreach ($arr as &$value) {
    $value = $value * 2003;
    echo '<br>' .$value;
}
// массив $arr сейчас таков: array(2, 4, 6, 8)
unset($value); // разорвать ссылку на последний элемент

$arr = array(1, 2, 3, 4);
foreach ($arr as &$value) {
    $value = $value * 2;
}
// $arr = array(2, 4, 6, 8)

// Без unset($value), $value все еще ссылается на последний элемент: $arr[3]

foreach ($arr as $key => $value) {
    // $arr[3] будет перезаписываться значениями $arr при каждой итерации цикла
    echo "{$key} => {$value} ";
    print_r($arr);
}
// ...И в конце концов предпоследнее значение определит окончательное содержимое $arr[3]

// вывод:
// 0 => 2 Array ( [0] => 2, [1] => 4, [2] => 6, [3] => 2 )
// 1 => 4 Array ( [0] => 2, [1] => 4, [2] => 6, [3] => 4 )
// 2 => 6 Array ( [0] => 2, [1] => 4, [2] => 6, [3] => 6 )
// 3 => 6 Array ( [0] => 2, [1] => 4, [2] => 6, [3] => 6 )
/* Пример 1: только значение */

$a = array(1, 2, 3, 17);

foreach ($a as $v) {
    echo '<br>' ."Текущее значение переменной \$a: $v.\n";
}

/* Пример 2: значение (для иллюстрации массив выводится в виде значения с ключем) */

$a = array(1, 2, 3, 17);

$i = 0; /* только для пояснения */

foreach ($a as $v) {
    echo '<br>' .'<br>' ."\$a[$i] => $v.\n";
    $i++;
}

/* Пример 3: ключ и значение */

$a = array(
    "one" => 1,
    "two" => 2,
    "three" => 3,
    "seventeen" => 17
);

foreach ($a as $k => $v) {
    echo '<br>' ."\$a[$k] => $v.\n";
}

/* Пример 4: многомерные массивы */
$a = array();
$a[0][0] = "a";
$a[0][1] = "b";
$a[1][0] = "y";
$a[1][1] = "z";

foreach ($a as $v1) {
    foreach ($v1 as $v2) {
        echo '<br>' ."$v2\n";
    }
}

/* Пример 5: динамические массивы */

foreach (array(1, 2, 3, 4, 5) as $v) {
    echo '<br>' ."$v\n";
}

echo  "<br> ".'break';
echo  "<br> ".'break';
echo  "<br> ".'break';

$arr = array('один', 'два', 'три', 'четыре', 'стоп', 'пять');
foreach ($arr as $val) {
    if ($val == 'стоп') {
        break;    /* Тут можно было написать 'break 1;'. */
    }
    echo "$val<br />\n";
}

echo  "<br> ".'break';
echo  "<br> ".'break';
/* Использование дополнительного аргумента. */

$i = 0;
while (++$i) {
    switch ($i) {
        case 5:
            echo "Итерация 5<br />\n";
            break 1;  /* Выйти только из конструкции switch. */
        case 10:
            echo "Итерация 10; выходим<br />\n";
            break 2;  /* Выходим из конструкции switch и из цикла while. */
        default:
            break;
    }
}
?>
