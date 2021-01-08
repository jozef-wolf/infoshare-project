

const addBtn = document.getElementById('add');
const toDoContainer = document.getElementById('toDoContainer');
const input = document.getElementById('input');




//adding function to + button
addBtn.addEventListener('click', function () {

//creating elements 
    const toDoTask = document.createElement('p');
    const rmBtn = document.createElement('button');
    const doneBtn = document.createElement('button');

//text of task     
    toDoTask.innerText = input.value;

//adding task and remove button and done button    
    toDoContainer.append(toDoTask);
    toDoTask.appendChild(doneBtn);
    toDoTask.appendChild(rmBtn);
    

//task added with input 
    input.value = '';

//buttons style    
    doneBtn.innerHTML = '<i class="fas fa-check"></i>';
    rmBtn.innerHTML = '<i class="far fa-trash-alt"></i>';


//adding function to done button action
    doneBtn.addEventListener('click', function () {
        toDoTask.style.textDecoration = 'line-through';

    })
//adding function to remove button action 
    rmBtn.addEventListener('click', function () {
        toDoContainer.removeChild(toDoTask);
    })
})

