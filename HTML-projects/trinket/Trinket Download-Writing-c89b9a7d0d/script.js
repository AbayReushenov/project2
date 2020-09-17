function finishFunction() {
  alert("Thank you for completing the quiz.");
}

function rndm_colour(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
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
    ){

        document.getElementById("appear").style.display = 'block';
        document.getElementById("appear2").style.display = 'block';
        document.getElementById("appear3").style.display = 'block';
        document.getElementById("appear4").style.display = 'block';
        document.getElementById("appear5").style.display = 'block';
        document.getElementById("appear6").style.display = 'block';        
    
    }else{
    document.getElementById("appear").style.display = 'none';
    document.getElementById("appear2").style.display = 'none';
    document.getElementById("appear3").style.display = 'none';
    document.getElementById("appear4").style.display = 'none';
    document.getElementById("appear5").style.display = 'none';
    document.getElementById("appear6").style.display = 'none';   
   }
}

function validateQuestions() {
      if (
      validateForm() 
      && validateRadio_1() 
      && validateRadio_2()
      && validateNumber()
      && validateRadio_4()
      && validateRadio_5()
      ) 
      {
       return true;
      }else{
        return false;
      }
    }

function validateForm() {
  var name = document.forms.FormaW.name2.value;
  var sname = document.forms.FormaW.surname2.value;
  if (name == "" || sname == "") {
    alert("Your fullname must be filled out");
    return false;
  }else{
    return true;
  }
}

function validateRadio_1() {
  var x = document.forms.FormaW.elements.ans1.value;
  if (x === "") {
    alert("Is tweeting the same as writing? (One radio button must be selected )");
    return false;
  }else{
    return true;
  }
}

function validateRadio_2() {
  var x = document.forms.FormaW.elements.ans2.value;
  if (x === "") {
    alert("What genres are popular in India? (One radio button must be selected )");
    return false;
  }else{
    return true;
  }
}

function validateNumber() {
  var x, text;
  // Get the value of the input field with id="Royalty"
  x = document.getElementById("Royalty").value;
  // If x is not a number or less than one or greater than 5. || means OR in JavaScript
  if (isNaN(x) || x < 1 || x > 5) {
    alert("Estimate royalty income. Number entry invalid");
    return false;
  } else {
    return true;
  }
}

function validateRadio_4() {
  var x = document.forms.FormaW.elements.ans4.value;
  if (x === "") {
    alert("The Big Book Prize received: (One radio button must be selected )");
    return false;
  }else{
    return true;
  }
}

function validateRadio_5() {
  var x = document.forms.FormaW.elements.ans5.value;
  if (x === "") {
    alert("What to do before writing? (One radio button must be selected )");
    return false;
  }else{
    return true;
  }
}

function checkAnswers() {
  // grab all the elements from the quiz form, store them as quiz
  quiz = document.forms.FormaW.elements;
  var score = 0;
  if (validateQuestions(quiz)) {
      YourAnswer1 = quiz.ans1.value;
    if (YourAnswer1 == "Selling"){
      score = score + 27;
        }
        
      YourAnswer2 = quiz.ans2.value;
    if (YourAnswer2 == "5"){
      score = score + 27;
        }
        
      YourAnswer3 = quiz.rating.value;
    if (YourAnswer3 == 3.86){
      score = score + 27;
      }
      
        YourAnswer4 = quiz.ans4.value;
    if (YourAnswer4 == "G"){
      score = score + 27;
      }
        YourAnswer5 = quiz.ans5.value;
    if (YourAnswer5 == "4"){
      score = score + 28;
      }      
    
    }
    showFeedback(score);  
}

function showFeedback(score) {
  document.forms.FormaW.style.display = "none";
    body = document.getElementsByTagName("body")[0];
    var name = document.forms.FormaW.name2.value;
    var sname = document.forms.FormaW.surname2.value;
    var dearSirOrMadam = "Dear " + name + " " + sname + "! Thank you for your attention to this quiz! "
        if (score == "0"){
          body.innerHTML ='<h1>' + dearSirOrMadam + '</h1>' + '<br><h4>I am very sorry, it seems you have no interest in "Writing".  Your score was..... ' + score;
          body.innerHTML += '<div><img src="result0.jpg"/></div>';
      
          } else if (score < "28"){
              body.innerHTML ='<h1>' + dearSirOrMadam + '</h1>' + '<br><h4>Maybe you need to visit the home page again, your score was... ' + score;
              body.innerHTML += '<div><img src="result2.jpg"/></div>';
            
            } else if (score < "57"){
                body.innerHTML ='<h1>' + dearSirOrMadam + '</h1>' + '<br><h4>You did well but there is room for improvement, your score was... ' + score;
                body.innerHTML += '<div><img src="result4.jpg"/></div>';
      
              } else if (score < "85"){
                  body.innerHTML ='<h1>' + dearSirOrMadam + '</h1>' + '<br><h4>Great, your score was... ' + score;
                  body.innerHTML += '<div><img src="result6.jpg"/></div>';
                 }
                  else if (score < "115"){
                    body.innerHTML ='<h1>' + dearSirOrMadam + '</h1>' + '<br><h4>You almost got full marks! Great, your score was... ' + score;
                    body.innerHTML += '<div><img src="result8.jpg"/></div>';
                    }
                    else {
                        body.innerHTML ='<h1>' + dearSirOrMadam + '</h1>' + '<br><h4>Excellent, full marks to you! Your score was... ' + score;
                        body.innerHTML += '<div><img src="100.jpg"/></div>';
        }
  body.innerHTML += '<h2 class="normaZ" >To return to the main page click here <a href="index.html">"Writing"</a></h2>';
  body.innerHTML += '<blockquote>* The maximum possible number of points in this quiz is 136 points</blockquote>';
}

