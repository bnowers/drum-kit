var buttons = document.querySelectorAll(".drum");

function Instrument(name, key, imagePath, soundPath) {
  this.name = name;
  this.key = key;
  this.imagePath = imagePath;
  this.soundPath = soundPath;
  this.playSound = function() {
    var audio = new Audio(this.soundPath);
    audio.play();
  };
}

var crash = new Instrument("crash", "j", "images/crash.png", "sounds/crash.mp3");

function playLetterSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      crash.playSound();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:
      console.log("incorrect button pressed");
  }
}

buttons.forEach((item, i) => {
  item.addEventListener("click", function() {
    playLetterSound(this.textContent);
    buttonAnimation(this.textContent);
  });
});

document.addEventListener("keydown", function(event) {
  playLetterSound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
