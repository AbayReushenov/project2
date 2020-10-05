<?php
// Правильно:
declare(ticks=1);

// Недопустимо:
const TICK_VALUE = 1;
//declare(ticks=TICK_VALUE);

// это то же самое:

// можно так:
declare(ticks=1) {
  // прочие действия
}

// или так:
declare(ticks=1);
// прочие действия

// Функция, исполняемая при каждом тике
function tick_handler()
{
    echo "Вызывается tick_handler()\n";
}

register_tick_function('tick_handler');

$a = 1;

if ($a > 0) {
    $a += 2;
    print($a);
}
?>