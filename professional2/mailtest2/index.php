<?php
$to = "webdevelop301020@gmail.com";
$subject = "Письмо с вашего сайта!";
$charset = "utf-8";
$headerss ="Content-type: text/html; charset=$charset\r\n";
$headerss.="Date: ".date('D, d M Y h:i:s')."\r\n";
$headerss.="From: Тест <no-reply@hostingaba.beget.tech>\r\n";
$headerss.="Reply-To: " . $to . "\r\n";


$msg = "Сообщение";
if(mail($to, $subject, $msg, $headerss)) echo "message send";
    else echo "message not send";
?>

<!-- 
if(mail("webdevelop301020@gmail.com", "My Subject", "Line 1\nLine 2\nLine 3")) echo "message send";
else echo "message not send";
 -->