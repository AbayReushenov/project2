<?php

function tick_handler()
{
  echo "Вызывается tick_handler()\n";
}

$a = 1;
tick_handler();

if ($a > 0) {
    $a += 2;
    tick_handler();
    print($a);
    tick_handler();
}
tick_handler();

?>