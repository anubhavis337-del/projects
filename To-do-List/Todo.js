const myform = document.getElementById("myform");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");
const taskInput = document.getElementById("taskInput");
// const submit=document.getElementById("submit")

myform.addEventListener("submit", function (event) {
  event.preventDefault();

  let tasktext = taskInput.value;
  let task = document.createElement("li");
  task.textContent = tasktext;
  taskList.appendChild(task);
  taskInput.value=""

  let deletebtn = document.createElement("button");
  deletebtn.textContent="remove"
  task.appendChild(deletebtn)
//   btn.className = "btn btn-danger btn-sm float-right delete"
//   btn.appendChild(document.createTextNode("X"));
//   task.appendChild(btn);

//   taskList.appendChild(task)
//   document.getElementById("task").value=""

deletebtn.addEventListener("click", function(){
  taskList.removeChild(task)

})

});

