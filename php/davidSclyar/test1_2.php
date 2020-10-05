<?php
// вывести на экран приветствие, если форма // передана на обработку
if ($_POST['user']) {
print "Hello,
// вывести на экран значение параметра 'user' из 
// переданной на обработку формы
print $_POST['user'];
print "!";
} else {
// иначе - вывести на экран саму форму
print <<<_HTML_
    <form method="post" action="$_SERVER[PHP_SELF]"> Your Name: <input type="text" name="user" /> <br/>
    <button type="submit">Say Hello</button>
    </form>
    _HTML_;
} 
?>