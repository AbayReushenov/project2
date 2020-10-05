<?php

$x = 1;
$fn = fn() => $x++; // Ничего не изменит
echo $fn();
var_export($x);  // Выведет 1

?>