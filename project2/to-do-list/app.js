

const addBtn = document.getElementById('add');
const toDoContainer = document.getElementById('toDoContainer');
const input = document.getElementById('input');




//adding function to + button
addBtn.addEventListener('click', function () {

    //creating elements 
    const toDoTask = document.createElement('div');
    const doneBtn = document.createElement('button');
    const rmBtn = document.createElement('button');

    //text of task     
    toDoTask.innerText = input.value;

    //adding task and remove button and done button    
    toDoContainer.append(toDoTask);
    toDoTask.appendChild(rmBtn);
    toDoTask.appendChild(doneBtn);

    //task added with input 
    input.value = '';

    //buttons style    
    doneBtn.innerHTML = '<i class="fas fa-check"></i>';
    rmBtn.innerHTML = '<i class="far fa-trash-alt"></i>';


    //adding function to done button action
    doneBtn.addEventListener('click', function () {
        toDoTask.style.textDecoration = 'line-through';
        //toDoTask.classlist.toggle('done');
    })
    //adding function to remove button action 
    rmBtn.addEventListener('click', function () {
        toDoContainer.removeChild(toDoTask);
    })
})

input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("add").click();
    }
});