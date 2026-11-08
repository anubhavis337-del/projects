let boxes = document.getElementById("boxes");
let addBtn = document.getElementById("addBtn");

// let content=[
//   "Hello!!!!",
//   "Good to see u!!",
//   "Have a lovely Day",
//   "Stay Positive",
//   "now stop adding boxes ",
//   "mind your business",
//   "just stop it i said"
// ]
let count=0
addBtn.addEventListener("click", function () {

  if(count>=15){
    return;
  }
  let box = document.createElement("div");
  box.classList.add("box");
  box.innerText="aa gaye yha time pass krne padh lo beta jindagin sudhar jaegi bhkkkk"
  boxes.appendChild(box);
  count++
});
