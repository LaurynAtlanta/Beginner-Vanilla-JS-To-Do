//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//EVENT LISTENERS
todoButton.addEventListener('click', addTodo);

//FUNCTIONS
function addTodo(event){
    //PREVENT FORM FROM SUBMITTING
    event.preventDefault();

    //TODO DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //CREATE LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);   //PUT LI IN DIV

    //COMPLETED BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class ="fas fa-trash"></i>';
    trashButton.classList.add('complete-btn');
    todoDiv.appendChild(trashButton);

    //APPEND TO UL LIST
    todoList.appendChild(todoDiv);
}
