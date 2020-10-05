<?php
$a_bool = TRUE;   // логический
$a_str  = "foo";  // строковый
$a_str2 = 'foo';  // строковый
$an_int = 12;     // целочисленный

echo gettype($a_bool);  // выводит: boolean
echo " ";
echo gettype($a_str);  // выводит: string

// Если это целое, увеличить на четыре
if (is_int($an_int)) {
    $an_int += 4;
}

// Если $a_bool - это строка, вывести ее
// (ничего не выводит)
if (is_string($a_bool)) {
    echo "Строка: $a_bool";
}
?>
<br><br>
<?php
$foo = "1";  // $foo - это строка (ASCII-код 49)
echo $foo;
echo " ";
$foo *= 2;   // $foo теперь целое число (2)
echo $foo;
echo " ";
$foo = $foo * 1.3;  // $foo теперь число с плавающей точкой (2.6)
echo $foo;
echo " ";
$foo = 5 * "10 Little Piggies"; // $foo - это целое число (50)
echo $foo;
echo " ";
$foo = 5 * "10 Small Pigs";     // $foo - это целое число (50)
echo $foo;
echo " ";
$foo = 10;   // $foo - это целое число
echo $foo1=true;
echo "\n";
$bar = (boolean) $foo1;   // $bar - это булев тип
echo $bar;
echo 'Однажды Арнольд сказал: "I\'ll be back"';
echo 'Также вы можете вставлять в строки
символ новой строки вот так,
это нормально';
?>
<br><br>
<?php
echo 'это простая строка';

echo 'Также вы можете вставлять в строки
символ новой строки вот так,
это нормально';

// Выводит: Однажды Арнольд сказал: "I'll be back"
echo 'Однажды Арнольд сказал: "I\'ll be back"';

// Выводит: Вы удалили C:\*.*?
echo 'Вы удалили C:\\*.*?';

// Выводит: Вы удалили C:\*.*?
echo 'Вы удалили C:\*.*?';
echo "<br>";
// Выводит: Это не будет развернуто: \n новая строка
echo 'Это не будет развернуто: \n новая строка';

// Выводит: Переменные $expand также $either не разворачиваются
echo 'Переменные $expand также $either не разворачиваются';
?>
<br><br><br>
<?php
$str = <<<EOD
Пример строки,
охватывающей несколько строк,
с использованием heredoc-синтаксиса.
EOD;

/* Более сложный пример с переменными. */
class foo
{
    var $foo;
    var $bar;

    function __construct()
    {
        $this->foo = 'Foo';
        $this->bar = array('Bar1', 'Bar2', 'Bar3');
    }
}

$foo = new foo();
$name = 'Имярек';

echo <<<EOT
Меня зовут "$name". Я печатаю $foo->foo.
Теперь я вывожу {$foo->bar[1]}.
Это должно вывести заглавную букву 'A': \x41
EOT;
?>
<br>
<?php
echo <<<'EOD'
Пример текста,
занимающего несколько строк,
с помощью синтаксиса nowdoc. Обратные слеши всегда обрабатываются буквально,
например, \\ и \'.
EOD;
?>