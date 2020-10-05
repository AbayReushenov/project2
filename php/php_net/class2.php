<?php
interface I { public function f(); }
class C implements I { public function f() {} }

// Это не реализует интерфейс I.
class E {}

function f(I $i) {
    echo get_class($i)."\n";
}

f(new C);
f(new E);
?>