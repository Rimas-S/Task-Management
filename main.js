const form = document.getElementById('form');
const listContainer = document.getElementById('list-container');
const removeAll = document.getElementById('btn-remove');

form.addEventListener('submit', addtaskDiv);

removeAll.addEventListener ('click', removeAllTasks);



function addtaskDiv(e){
    e.preventDefault();

   let taskInput = document.createElement('p')
   taskInput.addEventListener('click', checkAsDone);
   taskInput.appendChild(document.createTextNode(document.getElementById('title').value));

   let taskDiv = document.createElement('div');
   taskDiv.className = 'task-div flex';

  
   let iconDelete = document.createElement('i');
   iconDelete.className = 'far fa-trash-alt';
   iconDelete.addEventListener('click', removetaskDiv)
   
   let iconCheck = document.createElement('i');
   iconCheck.className = 'fas fa-check';

   taskDiv.appendChild(iconCheck);
   taskDiv.appendChild(taskInput);
   taskDiv.appendChild(iconDelete);

   listContainer.appendChild(taskDiv);

   document.getElementById('title').value = '';
   document.getElementById('title').focus();

}

function removetaskDiv(e){

    let taskDiv = e.target.parentElement;
    listContainer.removeChild(taskDiv);

}

function checkAsDone(e){

    let taskDiv = e.target.parentElement;
    if (taskDiv.className === 'task-div flex checked') {
        taskDiv.className = 'task-div flex';
       
    } else {
        taskDiv.className = 'task-div flex checked';
    
    }

}

function removeAllTasks(e){

    let tasks = document.querySelector('#list-container');

    while (tasks.firstElementChild){
    tasks.firstElementChild.remove();
    }   
}
