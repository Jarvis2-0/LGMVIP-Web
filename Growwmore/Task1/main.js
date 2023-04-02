
const data = new Date();
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue;

todoForm.addEventListener("submit", (e) => {    
    e.preventDefault();    
    const inputValue = todoInput.value;    
    if(inputValue)        
        saveTodo(inputValue); //Save Function
})
const saveTodo = (text) => {    
    const todo = document.createElement("div");    
    todo.classList.add("todo");    
    const todoTitle = document.createElement("h3");   
    todoTitle.innerText = text;    
    todo.appendChild(todoTitle);    
    
    const doneBtn = document.createElement("button");    
    doneBtn.classList.add("finish-todo");    
    doneBtn.innerHTML = '<i class="fa fa-check-circle-o"></i>';    
    todo.appendChild(doneBtn);    
    
    const editBtn = document.createElement("button");    
    editBtn.classList.add("edit-todo");    
    editBtn.innerHTML = '<i class="fa fa-pencil-square-o"></i>';    
    todo.appendChild(editBtn);    
    
    const removeBtn = document.createElement("button");    
    removeBtn.classList.add("remove-todo");    
    removeBtn.innerHTML = '<i class="fa fa-trash-o"></i>';    
    todo.appendChild(removeBtn);    
    todoList.appendChild(todo);    
    
    todoInput.value = "";    
    todoInput.focus();}


    document.addEventListener("click", (e) => {    
        const targetEl = e.target;    
        const parentEl = targetEl.closest("div");    
        
        let todoTitle;    
        if(parentEl && parentEl.querySelector("h3"))        
        todoTitle = parentEl.querySelector("h3").innerText;        
        
        if(targetEl.classList.contains("finish-todo"))        
        parentEl.classList.toggle("done");        
        
        if(targetEl.classList.contains("remove-todo"))        
        parentEl.remove();    
        if(targetEl.classList.contains("edit-todo")){        
            toggleForms();        
            editInput.value = todoTitle;        
            oldInputValue = todoTitle;    
        }
    })

    const toggleForms = () => {    
        editForm.classList.toggle("hide");    
        todoForm.classList.toggle("hide");    
        todoList.classList.toggle("hide");
    }

    cancelEditBtn.addEventListener("click", (e) => {    
        e.preventDefault();    
        toggleForms();
    })

    editForm.addEventListener("submit", (e) => {    
        e.preventDefault();    
        const editInputValue = editInput.value;    
        if(editInputValue)        
            updateTodo(editInputValue) //Update value function    <!-- This app is Created By Akshay Pawar -->
            toggleForms();
        })
        const updateTodo = (text) => {    
            const todos = document.querySelectorAll(".todo");    
            todos.forEach((todo) => {        
                let todoTitle = todo.querySelector("h3");        
                
                if(todoTitle.innerText === oldInputValue)            
                todoTitle.innerText = text;    
            })
        }