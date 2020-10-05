<?php
function small_numbers()
{
    return array (0, 1, 2);
}
list ($zero, $one, $two) = small_numbers();
echo $zero, $one, $two , small_numbers()[0], small_numbers()[1], small_numbers()[2];
?>