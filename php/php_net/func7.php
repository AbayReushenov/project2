<?php
function makeyogurt($type = "ацидофил", $flavour)
{
    return "Готовим чашку из бактерий $type со вкусом $flavour.\n";
}
 
echo '<br>'.makeyogurt("ooo","малины");  
echo '<br>'.makeyogurt(null, "малины");
echo '<br>'.makeyogurt("малины");// Не будет работать так, как мы могли бы ожидать
?>