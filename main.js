const form = document.getElementById('form');
const listContainer = document.getElementById('list-container');
const removeAll = document.getElementById('btn-remove');

// Add event listener to the "Add" button //
form.addEventListener('submit', addtaskDiv);

//  Add event listener to the "RemoveAll" button //
removeAll.addEventListener ('click', removeAllTasks);


// Add Tasks to the task list funktion //
function addtaskDiv(e){
    e.preventDefault();

   // Create <div> for task elements //
   let taskDiv = document.createElement('div');
   taskDiv.className = 'task-div flex';

   // Create paragraph tag for task text //
   let taskInput = document.createElement('p')
   taskInput.addEventListener('click', checkAsDone);
   taskInput.appendChild(document.createTextNode(document.getElementById('title').value));


   // Create icons //
   let iconDelete = document.createElement('i');
   iconDelete.className = 'far fa-trash-alt';
   iconDelete.addEventListener('click', removetaskDiv)
   
   let iconCheck = document.createElement('i');
   iconCheck.className = 'fas fa-check';

   // Add task parts one <div> //
   taskDiv.appendChild(iconCheck);
   taskDiv.appendChild(taskInput);
   taskDiv.appendChild(iconDelete);

   // Add task <div> to the list container //
   listContainer.appendChild(taskDiv);

   // Clear and focus on the input line //
   document.getElementById('title').value = '';
   document.getElementById('title').focus();

}

// Remove single task funktion //
function removetaskDiv(e){

    let taskDiv = e.target.parentElement;
    listContainer.removeChild(taskDiv);

}

// Mark task as done //
function checkAsDone(e){

    let taskDiv = e.target.parentElement;
    if (taskDiv.className === 'task-div flex checked') {
        taskDiv.className = 'task-div flex';
       
    } else {
        taskDiv.className = 'task-div flex checked';
    
    }

}

// Remove all tasks //
function removeAllTasks(e){

    let tasks = document.querySelector('#list-container');

    while (tasks.firstElementChild){
    tasks.firstElementChild.remove();
    }   
}
