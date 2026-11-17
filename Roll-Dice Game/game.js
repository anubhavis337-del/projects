const player1 = document.getElementById("Player1");
const player2 = document.getElementById("Player2");
const no1 = document.getElementById("no1");
const no2 = document.getElementById("no2");
const add = document.getElementById("add");
const add2 = document.getElementById("add2");
const msg=document.getElementById("msg");
const msg2=document.getElementById("msg2")

const winnerModal = document.getElementById("winnerModal");
const winnerText = document.getElementById("winnerText");
const restartBtn = document.getElementById("restartBtn");

function showWinner(player) {
  winnerText.textContent = player + " Wins!";
  winnerModal.style.display = "flex";
}

restartBtn.addEventListener("click", function () {
  location.reload();
});

let currentTurn=1

function updateTurn(){
  player1.disabled = currentTurn !==1;
  player2.disabled = currentTurn !==2;
}

// console.log(no1,no2,player1,player2)

let sum = 0;
player1.addEventListener("click", function () {
  currentTurn =2;
  let random1 = Math.floor(Math.random() * 6) + 1;
  updateTurn()
  if (sum + random1 > 20) {
    alert("Try again");
  } else if (sum + random1 <= 20) {
    sum = sum + random1;
    add.textContent = sum;
    let boxes = document.createElement("div");
    boxes.classList.add("boxes");
    boxes.textContent = random1;
    no1.appendChild(boxes);
  }
  if(sum===20){
  showWinner("Player 1");
  }

});

let sum2 = 0;
player2.addEventListener("click", function () {
  currentTurn=1;
  updateTurn()
  let random2 = Math.floor(Math.random() * 6) + 1;

  if (sum2 + random2 > 20) {
    alert("Try again");
  } else if (sum2 + random2 <= 20) {
    sum2 = sum2 + random2;
    add2.textContent = sum2;
    let num = document.createElement("div");
    num.classList.add("num");
    num.textContent = random2;
    no2.appendChild(num);
  }
  if(sum2===20){
  showWinner("Player 2");
  }
});
