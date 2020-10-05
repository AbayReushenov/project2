<?php
class C {}
class D extends C {}

// Это не является расширением класса C.
class E {}

function f(C $c) {
    echo get_class($c)."\n";
}

f(new C);
f(new D);
f(new E);
?>