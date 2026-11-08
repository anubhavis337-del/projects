const currentWord = document.getElementById("currentWord");
const message = document.getElementById("message");
const textInput = document.getElementById("textInput");
const scoreDisplay = document.getElementById("score");
let timeDisplay = document.getElementById("time");

// console.log(time,score,message,textInput,currentWord)

let score = 0;
let time = 6;
let timer;

const words = [
  "cat",
  "sun",
  "language",
  "football",
  "book",
  "tree",
  "car",
  "apple",
  "dog",
  "code",
  "moon",
  "star",
  "water",
  "house",
  "phone",
  "school",
  "computer",
  "elephant",
  "keyboard",
  "building",
  "code",
  "moon",
  "mountain",
  "language",
  "football",
  "birthday",
  "internet",
  "tree",
  "car",
  "developer",
  "function",
  "variable",
  "program",
  "gaming",
  "robot",
  "mountain",
  "apple",
  "dog",
  "language",
  "coffee",
  "friend",
  "family",
  "dream",
  "happy",
  "quick",
  "strong",
  "beautiful",
  "awesome",
  "creative",
  "learning",
];

//game start
window.addEventListener("DOMContentLoaded", init);

function init() {
  showWord();
  textInput.addEventListener("input", startMatch);
  message.textContent = "";
  timer = setInterval(countDown, 1000);
}

function showWord() {
  let randomword = words[Math.floor(Math.random() * words.length)];
  currentWord.textContent = randomword;
}

function startMatch(event) {
  let word = currentWord.textContent.toLowerCase();
  let input = event.target.value.toLowerCase();

  if (input.length !== 0) {
    message.textContent = "";
  }

  if (input.length === word.length) {
    if (word === input) {
      message.textContent = "Correct!!!";
      score++;
      scoreDisplay.textContent = score;
      if (score === 30
        
      ) {
        textInput.disabled = true;
        clearInterval(timer);
        message.textContent = "You Win!!!";
  
      }
      textInput.value = "";
      showWord();

      //reset timer
      clearInterval(timer);
      time = 6;
      document.getElementById("time").textContent = time;
      timer = setInterval(countDown, 1000);
    } else {
      message.textContent = "Incorrect!!!";
    }
  }
}

function countDown() {
  console.log("countdown is running", time);

  time--;
  if (time > 0) {
  }
  document.getElementById("time").textContent = time;
  if (time <= 0 ) {
    clearInterval(timer);

    textInput.disabled = true;
    message.textContent = "Time Over!!";

    
  }
}
