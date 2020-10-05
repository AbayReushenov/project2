
<p>
<img src='http://source.unsplash.com/random/150x150' alt="My Vacation" />
</p>
<?php
$specials = array( array('Chestnut Bun', 'Walnut Bun',
'Peanut Bun'), array('Chestnut Salad',
'Walnut Salad', 'Peanut Salad') );
// Переменная $num_specials содержит значение 2: количество
// элементов в первой размерности массива $specials
for ($i = 0, $num_specials = count($specials); $i < $num_specials;
$i++) {
// Переменная $num_sub содержит значение 3: количество // элементов в каждом подмассиве
for ($m = 0, $num_sub = count($specials[$i]);
$m < $num_sub; $m++) {
print '<br> '."Element [$i][$m] is " . $specials[$i][$m] . "\n";
} 
}

for ($i = 0, $num_specials = count($specials);
$i < $num_specials; $i++) {
// Переменная $num_sub содержит значение 3: количество // элементов в каждом подмассиве
for ($m = 0, $num_sub = count($specials[$i]);
$m < $num_sub; $m++) {
print '<br> '."Element [$i][$m] is {$specials[$i][$m]}\n";
} 
}
?>
