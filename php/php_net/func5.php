<?php
function add_some_extra(&$string)
{
    $string .= 'и кое-что еще.';
}
$str = 'Это строка, ';
add_some_extra($str);
echo $str;    // выведет 'Это строка, и кое-что еще.'

function makecoffee($type = "капучино")
{
    return "Готовим чашку $type.\n";
}
echo '<br>'.makecoffee();
echo '<br>'.makecoffee(null);
echo '<br>'.makecoffee("эспрессо");

function makecoffee33($types = array("капучино"), $coffeeMaker = NULL)
{
    $device = is_null($coffeeMaker) ? "вручную" : $coffeeMaker;
    return "Готовлю чашку ".join(", ", $types)." $device.\n";
}
echo '<br>'.makecoffee33();
echo '<br>'.makecoffee33(array("капучино", "лавацца"), "в чайнике");

?>