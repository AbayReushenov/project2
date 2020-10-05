<!-- Edit Report a Bug
Операторы исполнения ¶
PHP поддерживает один оператор исполнения: обратные кавычки (``). Обратите внимание, что это не одинарные кавычки! PHP попытается выполнить строку, заключенную в обратные кавычки, как консольную команду, и вернет полученный вывод (то есть он не просто выводится на экран, а, например, может быть присвоен переменной). Использование обратных кавычек аналогично использованию функции shell_exec(). -->

<?php
$output = `ls -al`;
echo "<pre>$output</pre>";
?>
<!-- total 88
drwxr-xr-x  13 reushenov  staff   442 Oct  3 13:13 .
drwxr-xr-x   7 reushenov  staff   238 Oct  2 21:36 ..
-rw-r--r--   1 reushenov  staff  1028 Oct  2 18:05 test1.php
-rw-r--r--   1 reushenov  staff  2087 Oct  2 21:11 test10.php
-rw-r--r--   1 reushenov  staff  4062 Oct  3 13:01 test11.php
-rw-r--r--   1 reushenov  staff  1259 Oct  3 13:13 test12.php
-rw-r--r--   1 reushenov  staff   550 Oct  2 18:10 test2.php
-rw-r--r--   1 reushenov  staff  3271 Oct  2 20:23 test3.php
-rw-r--r--   1 reushenov  staff   485 Oct  2 20:24 test4.php
-rw-r--r--   1 reushenov  staff   440 Oct  2 20:29 test5.php
-rw-r--r--   1 reushenov  staff   780 Oct  2 20:36 test6.php
-rw-r--r--   1 reushenov  staff   258 Oct  2 20:39 test7.php
-rw-r--r--   1 reushenov  staff  2224 Oct  2 20:47 test8.php -->
<!-- Замечание:

Обратные кавычки недоступны, в случае, если включен безопасный режим или отключена функция shell_exec().

Замечание:

В отличие от некоторых других языков, обратные кавычки не будут работать внутри строк в двойных кавычках. -->