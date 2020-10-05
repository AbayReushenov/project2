<?php
// Пример 3.17. Вывод на экран списка, размечаемого дескриптором <select>, в цикле, организу- емом с помощью конструкции while()
$i = 1;
print '<select name="people">'; for ($i = 1; $i <= 10; $i++) {
print "<option>\n{$i}</option>\n"; }
print '</select>';

print '<select name="doughnuts">';
for ($min = 1, $max = 10; $min < 50; $min += 10, $max +=10) {
print "<option>\n{$min} - \n{$max}</option>\n"; }
print '</select>';
// На каждом шаге приведенного выше цикла переменные $min и $mах инкрементируются на 10.
// Ниже приведен результат выполнения кода из примера 3.19.
// <select name="doughnuts"><option>1 - 10</option>
// <option>11 - 20</option>
// <option>21 - 30</option>
// <option>31 - 40</option>
// <option>41 - 50</option>
//</select>
?>