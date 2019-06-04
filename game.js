var userClickedPattern = [];
var gamePattern = [];
var randomnumber = [];
var randomChoosenColor = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

$("#start").click(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
  if (started) {
    refreshPage();
  }



});





function refreshPage() {
  $("#start").html("refresh");
  $("#start").click(function() {

    window.location.reload();
  });
}

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  // setTimeout(function() {
  randomnumber = [];
  randomChoosenColor = [];
  userClickedPattern.length = 0;
  gamePattern.length = 0;

  // for(gamePattern.length = 0;  )

  for (var i = 0; i < level; i++) {
    // setTimeout(function() {

    // randomnumber.push(Math.floor(Math.random() * 4));
    // }, 3000);
    randomnumber.push(Math.floor(Math.random() * 4));
    console.log(randomnumber[i]);

    randomChoosenColor.push(buttonColors[randomnumber[i]]);


    console.log(randomChoosenColor[i]);
    // randomnumber = Math.floor(Math.random() * 4);
    //   setTimeout(function(){
    //   randomChoosenColor = buttonColors[3];
    //   $("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    // },500);

    gamePattern.push(randomChoosenColor[i]);
    Loop(i);

    // playSound(randomChoosenColor[i]);








    //
    //
    //
    //
    //
    // // .ready( function(){

    //} // $("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  }
}

// },100);
// }
function Loop(i) { //  create a loop function
  setTimeout(function() { //  call a 3s setTimeout when the loop is called
    $("#" + gamePattern[i]).fadeIn(0).fadeOut(100).fadeIn(100);
    // if{
    playSound(randomChoosenColor[i]);
    //  pyour code here
    // i++;
    // }
    //  increment the counter

    // if (i < level) { //  if the counter < 10, call the loop function
    //   myLoop(i); //  ..  again which will trigger another
    // } //  ..  setTimeout()
  }, i * 1000);
}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");

  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 200);

}

//
// //

$(".btn").click(function() {
      var userChosenColour = this.id;

      userClickedPattern.push(userChosenColour);
      // console.log(userChosenColour);
      // playSound("sounds/" + userChosenColour + ".mp3")
      // var audio = new Audio("sounds/"+ userChosenColour + ".mp3");
      // audio.play();
      if (userClickedPattern[userClickedPattern.length - 1] === gamePattern[userClickedPattern.length - 1]) {
          playSound(userChosenColour);
        } else {
          playSound("wrong");
        }
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length - 1);



      });

    function checkAnswer(currentLevel) {


      if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {


        if (userClickedPattern.length === gamePattern.length) {

          $("#level-title").html("Great !");
          setTimeout(function() {
            nextSequence();
          }, 1000);
        }


      } else {
        $("#level-title").html("wrong* your brain memorable level is " + "&quot;" + level + "&quot;" + "press Refresh");
        $("body").addClass("game-over");
        setTimeout(function() {
          $("body").removeClass("game-over");
        }, 500);
        // playSound("wrong");
      }
    }
