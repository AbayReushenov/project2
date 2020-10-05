<?php
class SimpleClass
{
    // объявление свойства
    public $var = 'значение по умолчанию';

    // объявление метода
    public function displayVar() {
        echo $this->var;
    }
}
$x = new SimpleClass;
echo $x->displayVar();
echo (new DateTime())->format('Y');

class Foo
{
    public $bar = 'свойство';
    
    public function bar() {
        return 'метод';
    }
}

$obj = new Foo();
echo $obj->bar, PHP_EOL, $obj->bar(), PHP_EOL;

class Foo4
{
    public $bar;
    
    public function __construct() {
        $this->bar = function() {
            return 42;
        };
    }
}

$obj = new Foo4();

// Начиная с PHP 5.3.0:
$func = $obj->bar;
echo $func(), PHP_EOL;

// Или так, начиная с PHP 7.0.0:
echo ($obj->bar)(), PHP_EOL;

class ExtendClass extends SimpleClass
{
    // Переопределение метода родителя
    function displayVar()
    {
        echo "Расширенный класс\n";
        parent::displayVar();
    }
}

$extended = new ExtendClass();
$extended->displayVar();
?>