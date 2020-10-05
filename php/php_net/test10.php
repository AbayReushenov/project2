<?php
class foo {
    var $bar = 'I am bar.';
}

$foo = new foo();
$bar = 'bar';
$baz = array('foo', 'bar', 'baz', 'quux');
echo "{$foo->$bar}\n";
echo "{$foo->{$baz[1]}}\n";
?>
<br>
<?php
$foo = 'Боб';              // Присваивает $foo значение 'Боб'
$bar = &$foo;              // Ссылка на $foo через $bar.
$bar = "Меня зовут $bar";  // Изменение $bar...
echo $bar;
echo $foo;                 // меняет и $foo.
?>
<br>
<?php
// Неустановленная И не имеющая ссылок (то есть без контекста использования) переменная; выведет NULL
var_dump($unset_var);
echo '<br>';
// Булевое применение; выведет 'false' (Подробнее по этому синтаксису смотрите раздел о тернарном операторе)
echo(!$unset_boolen ? "true\n" : "false\n");
echo '<br>';
echo '<br>';
// Строковое использование; выведет 'string(3) "abc"'
$unset_str .= 'abc';
var_dump($unset_str);
echo '<br>';
echo '<br>';
// Целочисленное использование; выведет 'int(25)'
$unset_int += 25; // 0 + 25 => 25
var_dump($unset_int);

// Использование в качестве числа с плавающей точкой (float/double); выведет 'float(1.25)'
$unset_float += 1.25;
var_dump($unset_float);

// Использование в качестве массива; выведет array(1) {  [3]=>  string(3) "def" }
$unset_arr[3] = "def"; // array() + array(3 => "def") => array(3 => "def")
var_dump($unset_arr);

// Использование в качестве объекта; создает новый объект stdClass (см. http://www.php.net/manual/ru/reserved.classes.php)
// Выведет: object(stdClass)#1 (1) {  ["foo"]=>  string(3) "bar" }
$unset_obj->foo = 'bar';
var_dump($unset_obj);
echo '<br>';
echo '<br>';
?>

<?php
$a = 1;
$b = 2;

function Sum()
{
    global $a, $b;

    $b = $a + $b;
} 

Sum();
echo $b;
?>