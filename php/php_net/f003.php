<?php
function &returns_reference()
{
    $someref =1;
    return $someref;
}

$newref =& returns_reference();

echo $newref;
$someref++;
echo $newref;
?>