<?php
function foo($arg_1, $arg_2, /* ..., */ $arg_n)
{
    echo "Пример функции.\n" . "$arg_1 + $arg_2+ $arg_n";
    
    return $retval;
}
foo(1,2,23);
?>