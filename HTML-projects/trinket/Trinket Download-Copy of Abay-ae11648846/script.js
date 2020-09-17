function finishFunction() {
  alert("Thank you for completing the quiz.");
}

function rndm_colour(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color
}

function change_heading() {
  color = rndm_colour();
  document.getElementById("heading").style.color = color;
  document.getElementById("heading").style.fontFamily = "Impact,Charcoal,sans-serif";

}
function show_hide(){
  if (document.getElementById("appear").style.display == 'none' 
       && document.getElementById("appear2").style.display == 'none'
       && document.getElementById("appear3").style.display == 'none' 
       && document.getElementById("appear4").style.display == 'none'
       && document.getElementById("appear5").style.display == 'none'
       && document.getElementById("appear6").style.display == 'none'
       && document.getElementById("appear7").style.display == 'none'
       && document.getElementById("appear8").style.display == 'none'
    ){
        document.getElementById("appear").style.display = 'block';
        document.getElementById("appear2").style.display = 'block';
        document.getElementById("appear3").style.display = 'block';
        document.getElementById("appear4").style.display = 'block';
        document.getElementById("appear5").style.display = 'block';
        document.getElementById("appear6").style.display = 'block';
        document.getElementById("appear7").style.display = 'block';
        document.getElementById("appear8").style.display = 'block';
    }else{
    document.getElementById("appear").style.display = 'none';
    document.getElementById("appear2").style.display = 'none';
    document.getElementById("appear3").style.display = 'none';
    document.getElementById("appear4").style.display = 'none';
    document.getElementById("appear5").style.display = 'none';
    document.getElementById("appear6").style.display = 'none';
    document.getElementById("appear7").style.display = 'none';
    document.getElementById("appear8").style.display = 'none';
   }
}

function validateQuestions() {
      if (
      validateForm() 
      && validateRadio_1() 
      && validateNumber() 
      && validateRadio_2() 
      ) 
      {
       return true;
      }else{
        return false;
      }
    }

function validateForm() {
  var name = document.forms.LastFormaForQuiza.name2.value;
  var sname = document.forms.LastFormaForQuiza.surname2.value;
  if (name == "" || sname == "") {
    alert("Your fullname must be filled out");
    return false;
  }else{
    return true;
  }
}

function validateNumber() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("TypeHere").value;

  // If x is not a number or less than one or greater than 10. || means OR in JavaScript
  if (isNaN(x) || x < 10 || x > 50) {
    alert("Estimate carbon emissions..Number entry invalid");
    return false;
  } else {
    return true;
  }
}
function validateRadio_1() {
  var x = document.forms.LastFormaForQuiza.elements.answerq1.value;
  if (x === "") {
    alert("What event led to a sharp change? (One radio button must be selected )");
    return false;
  }else{
    return true;
  }
}

function validateRadio_2() {
  var x = document.forms.LastFormaForQuiza.elements.radiobaton.value;
  if (x === "") {
    alert("Would be increase income in the coal industry? (One radio button must be selected )");
    return false;
  }else{
    return true;
  }
}
//
function checkAnswers() {
  // grab all the elements from the quiz form, store them as quiz
  quiz = document.forms.LastFormaForQuiza.elements;
  var score = 0
  if (validateQuestions(quiz)) {
      YourAnswer1 = quiz.answerq1.value;
    if (YourAnswer1 == "Industrial revolution"){
      score = score + 33;
        }
        YourAnswer2 = quiz.rating.value;
    if (YourAnswer2 == 36.5){
      score = score + 34;
      }
        YourAnswer3 = quiz.radiobaton.value;
    if (YourAnswer3 == "fall by 26 percent to 138 percent"){
      score = score + 33;
      }
    showFeedback(score);
}
}

//---------------
//function showFeedback(score){
//  document.getElementById("total")
//  total.innerHTML = 'Well done, your score was... ' + score
//}
//-------------
function showFeedback(score) {
  document.forms.LastFormaForQuiza.style.display = "none";
  body = document.getElementsByTagName("body")[0];
  //
  if (score == "0"){
    body.innerHTML = '<h1>Do better next time, your score was... ' + score;
    body.innerHTML += '<div><img src="help.jpg"/></div>';
} else if (score < "40"){
    body.innerHTML = '<h1>Maybe you need to visit the home page again, your score was... ' + score;
    body.innerHTML += '<div><img src="soso.jpg"/></div>';
} else if (score < "67"){
    body.innerHTML = '<h1>You did well but there is room for improvement, your score was... ' + score;
    body.innerHTML += '<div><img src="ok.jpg"/></div>';
} else if (score < "70"){
    body.innerHTML = '<h1>You almost got full marks! Great, your score was... ' + score;
    body.innerHTML += '<div><img src="2place.jpg"/></div>';
} else {
    body.innerHTML = '<h1>Excellent, full marks to you! Your score was... ' + score;
    body.innerHTML += '<div><img src="100.jpg"/></div>';
}
 // body.innerHTML = '<h1>Well done, your score was... ' + score
  
}

