var gamePattern=[];
var userClickedPattern=[];
var randomChosenColor;
var buttonColors=["red", "blue", "green", "yellow"];
var level=0;


$(document).keydown(function(){
  randomChosenColor= buttonColors[nextSequence()];
  gamePattern.push(randomChosenColor);
  $("h1").text("Level " + (++level));
});


function nextSequence(){
  var randomNumber=  Math.floor(Math.random() * 4);
  return randomNumber;
}


$("#" + randomChosenColor).click(function(){
  animatePress(randomChosenColor);

  var audio=playSound(randomChosenColor);
  audio.play();

});


$(".btn").click(handler);

function handler(){
  var userChosenColor= this.getAttribute("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);

  animatePress(userChosenColor);

  var audio=playSound(userChosenColor);
  audio.play();
}


function playSound(colorClicked){
  switch(colorClicked){
  case "red": return new Audio("sounds\\red.mp3");
  break;
  case "green": return new Audio("sounds\\green.mp3");
  break;
  case "blue": return new Audio("sounds\\blue.mp3");
  break;
  case "yellow": return new Audio("sounds\\yellow.mp3");
  break;
  default: return new Audio("sounds\\wrong.mp3");
  }
}


function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");                   //  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  }, 70);
}
