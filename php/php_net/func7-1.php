<?php
function makeyogurt2($flavour, $type = "ацидофил")
{
    return "Готовим чашку из бактерий $type со вкусом $flavour.\n";
}
 
echo makeyogurt2("малины");   // отрабатывает правильно
?>