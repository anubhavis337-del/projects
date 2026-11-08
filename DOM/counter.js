// const container = document.getElementById("container");
// const plus = document.getElementById("plus");
// const sub = document.getElementById("sub");
// const reset = document.getElementById("reset");

// const number = document.getElementById("number");
// plus.addEventListener("click", function () {
//   let value = Number(number.textContent);
//   value = value + 1;
//   number.textContent = value;
// });

// sub.addEventListener("click", function () {
//   let value = Number(number.textContent);
//   value = value - 1;
//   number.textContent = value;
// });

// reset.addEventListener("click", function () {
//   let value = Number(number.textContent);
//   value = value * 0;
//   number.textContent = value;
// });

let number = document.getElementById("number");
let mood = document.getElementById("mood");
let plus = document.getElementById("plus");
let sub = document.getElementById("sub");
let reset = document.getElementById("reset");

plus.addEventListener("click", function () {
  number.textContent = Number(number.textContent) + 1;
  mood.textContent = "😄";

  mood.style.animation = "none";
  void mood.offsetWidth;
  mood.style.animation = "moodPop 0.3s ease";
});

sub.addEventListener("click", function () {
  number.textContent = Number(number.textContent) - 1;

  if (Number(number.textContent) <= 0) {
    mood.textContent = "😭";
  } else {
    mood.textContent = "😢";
  }

  mood.style.animation = "none";
  void mood.offsetWidth;
  mood.style.animation = "moodPop 0.3s ease";
});

reset.addEventListener("click", function () {
  number.textContent = 0;
  mood.textContent = "😐";

  mood.style.animation = "none";
  void mood.offsetWidth;
  mood.style.animation = "moodPop 0.3s ease";
});