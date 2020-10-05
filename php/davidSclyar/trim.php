<?php
$price = 5; $tax = 0.075;
printf('The dish costs $%.2f', $price * (1 + $tax));

// Пример 2.8. Заполнение нулями значения, выводимого на экран с помощью функции printf()
$zip = '6520'; $month = 2; $day = 6; $year = 2007;
echo '<br>'.'$zip = `6520`; $month = 2; $day = 6; $year = 2007;'.'<br>';
printf('<br>'."ZIP is %05d and the date is %02d/%02d/%d",
        $zip, $month, $day, $year);

echo '<br>'.'Пример 2.9. Отображение чисел со знаками с помощью функции printf()'.'<br>';

$min = -40;
$max = 40;
printf("The computer can operate between %+d and %+d degrees Celsius.",
$min, $max);

echo '<br>'.'<br>';
print strtolower('Beef, CHICKEN, Pork, duCK');
echo '<br>'.'<br>';
print strtoupper('Beef, CHICKEN, Pork, duCK');
print '<br>'.ucwords(strtolower('JOHN FRANKENHEIMER'));

// Извлечь первые 30 байтов из строкового значения // переменной $_POST['comments']
print '<br>'.substr('123comments', 0, 3);
// добавить многоточие
print '...';

print '<br>'.substr('comments123', 0, -3);
// добавить многоточие
print '...';

print '<br>'.'Card: XX';
print substr('4000-1234-5678-9101', -4,4);

print '<br>'.'Card: XX';
print substr('4000-1234-5678-9101', -4);

$html = '<span class="class">Fried Bean Curd<span>
<span class="class">Oil-Soaked Fish</span>'; 
print str_replace('class', $my_class, $html);

print '<br>'. 56;
print '<br>'. 56.3; print '<br>'. 56.30; print '<br>'. 0.774422; print '<br>'. 16777.216; print '<br>'. 0;
print '<br>'. -213; print '<br>'. 1298317; print '<br>'. -9912111; print '<br>'. -12.52222; print '<br>'. 0.00;
'<br>'.
print '<br>'. 2 + 2; print '<br>'. 17 - 3.5; print '<br>'. 10 / 3; print '<br>'. 6 * 9;
print '<br>'. 17 % 3;
$ = 2;
print '<br>'. $;
?>