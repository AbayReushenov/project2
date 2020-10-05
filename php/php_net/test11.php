<!-- Пример #1 Правильные и неправильные имена констант -->
<?php

// Правильные имена констант
define("FOO",     "что-то");
define("FOO2",    "что-то ещё");
define("FOO_BAR", "что-то большее");

print FOO;
echo '<br>';

print FOO2;
echo '<br>';

print FOO_BAR;
echo '<br>';

define('2FOO',    "что-то другое");
echo _2FOO;
// Неправильные имена констант
define('_2FOO',    "что-то другое");

echo '<br>';
// Это верное объявление, но лучше его не использовать:
// PHP однажды может зарегистрировать волшебную константу,
// которая нарушит работу скрипта
define("__FOO__", "что-то");
echo __FOO__;
echo '<br>';

define("CONSTANT", "Здравствуй, мир.");
echo CONSTANT; // выводит "Здравствуй, мир."

echo '<br>';
echo Constant; // выводит "Constant" и предупреждение.
echo '<br>';
// Работает, начиная с версии PHP 5.3.0
const CONSTANT = 'Здравствуй, мир.';

echo CONSTANT;
echo '<br>';
echo '<br>';
// Работает, начиная с версии PHP 5.6.0
const ANOTHER_CONST = CONSTANT.'; Прощай, мир.';
echo ANOTHER_CONST;
echo '<br>';
const ANIMALS = array('dog', 'cat', 'bird');
echo ANIMALS[1]; // выводит "cat"
echo '<br>';
// Работает в PHP 7
define('ANIMALS', array(
    'dog',
    'cat',
    'bird'
));
echo ANIMALS[1]; // выводит "cat"
echo '<br>';
echo '<br>';
echo __LINE__;
echo '<br>';
echo __FILE__;
echo '<br>';
echo __DIR__;
echo '<br>';
echo '<br>';
echo '---<br>';
function foo ()
{
    return 5;
}
echo foo()+202;
echo '<br>';
$c = foo();
echo "$c+500000";
echo '---- <br>';

echo `$c+5065456+10kl0`; // => nothing
echo '--- <br>';
echo '$c+100000'; // => $c

echo '---- <br>';
echo $c + 5000;
echo '---- <br>';
$b = ($a = 5); // the same $b = $a = 5'
echo '---- <br>';
$b--;
echo $b;
echo ' :-: <br>';
$a++;
echo $a;
$a += 100;
echo ' :-: <br>';
echo $a;
echo ' :-: <br>';
$b *= 7;
echo $b;
echo ' :-: <br>';
$b /= 10;
echo $b;
echo ' :-: <br>';
$first = 1;
$first ? $second = 2 : $third = 10;
echo $first;
echo ' :-: <br>';
echo $second;
echo ' :-: <br>';
echo $third;
echo ' :-: <br>';
$first = 0;
$first ? $second = 2 : $third = 10;
echo $first;
echo ' :-: <br>';
echo $second;
echo ' :-: <br>';
echo $third;
echo ' :-: <br>';

function double($i)
{
    return $i*2;
}
$b = $a = 5;        /* присвоить значение пять переменным $a и $b */
$c = $a++;          /* постфиксный инкремент, присвоить значение $a 
                       (5) переменной $c */
$e = $d = ++$b;     /* префиксный инкремент, присвоить увеличенное
                       значение $b (6) переменным $d и $e */

/* в этой точке и $d, и $e равны 6 */
echo $b;
echo ' :-: <br>';
echo $c;
echo ' :-: <br>';
echo $e;
echo ' :-: <br>';
echo $d;
echo ' :-: <br>';

$f = double($d++);  /* присвоить удвоенное значение $d перед
                       инкрементом (2*6 = 12) переменной $f */
$g = double(++$e);  /* присвоить удвоенное значение $e после
                       инкремента (2*7 = 14) переменной $g */
echo $g;
echo ' :-: <br>';
$h = $g += 10;      /* сначала переменная $g увеличивается на 10,
                       приобретая, в итоге, значение 24. Затем значение
                       присвоения (24) присваивается переменной $h,
                       которая в итоге также становится равной 24. */
echo $f;
echo ' :-: <br>';
echo $g;
echo ' :-: <br>';
echo $h;
echo ' :-: <br>';

?>