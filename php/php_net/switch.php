<?php
$i = 'пирог';
switch ($i) {
    case "яблоко":
        echo "i это яблоко";
        break;
    case "шоколадка":
        echo "i это шоколадка";
        break;
    case "пирог":
        echo "i это пирог";
        break;
}

$d = 0;

switch ($d) {
    case 0:
    case 1:
    case 2:
        echo "i меньше чем 3, но неотрицательный";
        break;
    case 3:
        echo "i равно 3";
}
?>