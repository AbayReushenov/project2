<?php
print 'bread' . 'fruit';
echo "It's a beautiful day " . 'in the neighborhood.'; 
print "The price is; " . '$3.95';
print 'Inky' . 'Pinky' . 'Blinky' . 'Clyde';

$ZiPcodE ='1234 ';
if (strlen(trim($_POST['zipcode'])) != 5) {
  print "Please enter a zip code that is 5 characters long.";
  }
  
  
if ($_POST['email'] == 'president@whitehouse.gov') { print "Welcome, US President.";
  }

?>