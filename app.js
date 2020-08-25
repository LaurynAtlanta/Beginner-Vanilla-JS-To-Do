//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//EVENT LISTENERS
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', delComCheck);
filterOption.addEventListener('click', filterTodo);

//FUNCTIONS
function addTodo(event){
    //PREVENT FORM FROM SUBMITTING
    event.preventDefault();

    //TODO DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //CREATE LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);   //PUT LI IN DIV

    //ADD TODO TO LOCAL STORAGE
    saveLocalTodos(todoInput.value);

    //COMPLETED BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class ="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //APPEND TO UL LIST
    todoList.appendChild(todoDiv);
    //CLEAR TODO INPUT VALUE
    todoInput.value="";
}

function delComCheck(e){
    const item =e.target;
    //  DELETE TODO
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function (){
            todo.remove();
        })
    }
    //CHECK MARK
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all": 
            todo.style.display = 'flex';
            break;
            case "completed":
               if(todo.classList.contains('completed')){
                   todo.style.display = 'flex';
               } else{
                   todo.style.display ='none';
               }
               break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display= 'flex';
                }else{
                    todo.style.display ='none';
                }
                break;
        }
    });
}

function saveLocalTodos(todo){
    //CHECK HEY DO I ALREADY HAVE THINGS IN TODOS
    let todos;
    if(localStorage.getItem('todos')===null){
        todos= [];
    } else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}


