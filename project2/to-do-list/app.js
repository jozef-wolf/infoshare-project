const addBtn = document.querySelector(".container__bar--addBtn");
const toDoContainer = document.querySelector(".container__taskList");
const input = document.querySelector(".container__bar--input");

//adding function to + button
addBtn.addEventListener("click", function () {
  if (input.value.trim() === "") {
    alert("Cannot add empty task");
    return;
  }
  //creating elements
  const toDoTask = document.createElement("div");
  const toDoText = document.createElement("p");
  const buttons = document.createElement("div");
  const doneBtn = document.createElement("button");
  const rmBtn = document.createElement("button");

  //text of task
  toDoText.innerText = input.value;
  toDoTask.append(toDoText);

  //add class to task
  toDoTask.classList.add("task");

  //adding task and remove button and done button
  toDoContainer.append(toDoTask);
  buttons.appendChild(rmBtn);
  buttons.appendChild(doneBtn);
  toDoTask.appendChild(buttons);

  //task added with input
  input.value = "";

  //buttons style
  doneBtn.innerHTML = '<i class="fas fa-check"></i>';
  rmBtn.innerHTML = '<i class="far fa-trash-alt"></i>';

  //adding function to done button action

  doneBtn.addEventListener("click", function () {
    toDoTask.classList.toggle("task--done");
  });

  //adding function to remove button action
  rmBtn.addEventListener("click", function () {
    toDoContainer.removeChild(toDoTask);
  });
});

//input value required

function emptyValue() {
  if (input.value.trim() === "") {
    return;
  }
}

input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("add").click();
  }
});
