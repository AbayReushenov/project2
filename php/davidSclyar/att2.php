
<p>
<img src='http://source.unsplash.com/random/150x150' alt="My Vacation" />
</p>
<?php

$row_styles = array('even', 'odd');
$dinner = array('Sweet Corn and Asparagus',
'Lemon Chicken',
'Braised Bamboo Fungus'); 
print "<table>\n";
for ($i = 0, $num_dishes = count($dinner); $i < $num_dishes; $i++) {
print '<tr class="' . $row_styles[$i % 2] . '">';
print "<td>Element $i</td><td>$dinner[$i]</td></tr>\n"; }
print '</table>';


// Пример 4.21. Формирование символьной строки из элементов массива с помощью функции
// implode()
$dimsum = array('Chicken Bun','Stuffed Duck Web','Turnip Cake'); $menu = implode(', ', $dimsum);
print $menu;


$letters1 = array('А','В','С' ,'D'); 
print '<br> '.implode('', $letters1);

$fish = 'Bass, Carp, Pike, Flounder'; $fish_list = explode(', ', $fish);
print '<br> '."The second fish is $fish_list[1]";

?>
