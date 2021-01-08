

const addBtn = document.getElementById('add');
const toDoContainer = document.getElementById('toDoContainer');
const input = document.getElementById('input');




addBtn.addEventListener('click', function() {
    const toDoTask = document.createElement('p');
    // toDoTask.classList.add('') 
    toDoTask.innerText = input.value;
    toDoContainer.append(toDoTask);
    input.value = '';
    toDoTask.addEventListener('click', function(){
        toDoTask.style.textDecoration = 'line-through';
    })
})
