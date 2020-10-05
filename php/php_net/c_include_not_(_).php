<?php
// не сработает, интерпретируется как include(('vars.php') == TRUE), то есть include('')
if (include('a_include.php') == TRUE) {
    echo 'OK';
    echo $fruit;
}

// сработает
if ((include 'a_include.php') == TRUE) {
    echo 'OK';
    echo $color;
    echo "<br>".'Так как include - это специальная языковая конструкция, круглые скобки не обязательны вокруг аргумента. Будьте внимательны при сравнении возвращаемого значения.';

}
?>