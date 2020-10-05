Five plus five is: <?php print 5 + 5; ?> <p>
Four plus four is: <?php
print 4 + 4; ?>
<p>
<img src='http://source.unsplash.com/random/150x150' alt="My Vacation" />

<?php
$user = 'Ivan';
echo 'Hi $user ';
echo "Hello $user";

echo <<<HTMLBLOCK
<html>
<head><title>Menu</title></head>
<body bgcolor="#fffed9">
<h1>Dinner</h1>
<ul>
  <li> Beef Chow-Fun
  <li> Sauteed Pea Shoots
  <li> Soy Sauce Noodles </ul>
</body>
</html>
HTMLBLOCK


?>