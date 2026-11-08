const container = document.getElementById("container");
const StartBtn = document.getElementById("StartBtn");
const StopBtn = document.getElementById("StopBtn");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");
const color5 = document.getElementById("color5");

StartBtn.addEventListener("click", function (event) {
  container.style.backgroundColor = " rgb(110, 53, 28)";
});
StopBtn.addEventListener("click", function (event) {
  container.style.backgroundColor = "seagreen";
});
color3.addEventListener("click", function () {
  container.style.backgroundColor = " rgb(93, 151, 158)";
});
color4.addEventListener("click", function () {
  container.style.background = " rgb(53, 68, 31)";
});
color5.addEventListener("click", function () {
  container.style.backgroundColor = " rgb(98, 37, 109)";
});
