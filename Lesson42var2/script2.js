
function myFunction() {
    var elmnt = document.getElementById("myDIV");
    var txt = "";
    txt += "<b>Information about div1:</b><br>";
    txt += "Height including padding: " + elmnt.clientHeight + "px<br>";
    txt += "Height including padding, border and scrollbar: " + elmnt.offsetHeight + "px<br>";
    txt += "Width including padding: " + elmnt.clientWidth + "px<br>";
    txt += "Width including padding, border and scrollbar: " + elmnt.offsetWidth + "px";
    document.getElementById("content").innerHTML = txt;
  
    var elmnt2 = document.getElementById("myDIV2");
    var txt2 = "";
    txt2 += "<b>Information about div2:</b><br>";
    txt2 += "Height including padding: " + elmnt2.clientHeight + "px<br>";
    txt2 += "Height including padding and border: " + elmnt2.offsetHeight + "px<br>";
    txt2 += "Width including padding: " + elmnt2.clientWidth + "px<br>";
    txt2 += "Width including padding and border: " + elmnt2.offsetWidth + "px";
    document.getElementById("content2").innerHTML = txt2;
  }

 const elm = document.querySelector("#myDIV");
 const elm2 = document.querySelector("#myDIV2");
console.log(elm.clientWidth, elm2.clientWidth);