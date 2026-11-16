const player1 = document.getElementById("Player1");
const player2 = document.getElementById("Player2");
const no1 =document.getElementById("no1")
const no2 =document.getElementById("no2")
// console.log(no1,no2,player1,player2)

player1.addEventListener("click" ,function(){

 let random1=Math.floor(Math.random()*6)+1;
 console.log(random1)  
  let boxes = document.createElement("div");
  boxes.classList.add("boxes");
  boxes.textContent=random1
  no1.appendChild(boxes);
     
})

player2.addEventListener("click", function(){
  let random2=Math.floor(Math.random()*6)+1;
  let num=document.createElement("div")
  num.classList.add("num");
  num.textContent=random2;
  no2.appendChild(num)
})