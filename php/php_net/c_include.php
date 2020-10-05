<?php

function foo()
{
    global $color;

    include 'a_include.php';

    echo "Одно $color $fruit";
}

/* vars.php в той же области видимости, что и foo(),  *
* поэтому $fruit НЕ будет доступен за пределами этой области     *
* $color доступен, поскольку мы объявили переменную глобальной */

foo();                    // Одно зеленое яблоко
echo "Одно $color $fruit";   // Одно зеленое

?>