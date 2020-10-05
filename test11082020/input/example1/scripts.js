function sampleFunction() {
    var textVal = document.getElementById("sampleText");
    var defaultVal = textVal.defaultValue;
    var currentVal = textVal.value;
    
    if (defaultVal == currentVal) {
    document.getElementById("sample").innerHTML = "Default value and current value is the same: "
    + textVal.defaultValue + " and " + textVal.value
    + "<br>Change the value of the text field to see the difference!";
    } else {
    document.getElementById("sample").innerHTML = "The default value was: " + defaultVal
    + "<br>The new, current value is: " + currentVal;
    }
   }