<?php
$juice = "apple";

echo "He drank some $juice juice.".PHP_EOL;

// Некорректно. 's' - верный символ для имени переменной, но переменная имеет имя $juice.
echo "He drank some juice made of $juices.";

// Корректно. Строго указан конец имени переменной с помощью скобок:
echo "He drank some juice made of ${juice}s.";
?>