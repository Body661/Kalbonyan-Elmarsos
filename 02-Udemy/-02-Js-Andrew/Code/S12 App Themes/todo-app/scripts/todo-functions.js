"use strict";

// ** Fetch existing todos from localStorage
const getSavedTodo = () => {
    const todoJSON = localStorage.getItem("tasks");
    try {
        return todoJSON ? JSON.parse(todoJSON) : [];
    } catch (e) {
        return [];
    }
};

// ** Save todos to localStorage

const saveTodos = (todo) => {
    localStorage.setItem("tasks", JSON.stringify(todo));
};

//**remove todo */
const removeTodo = (todoID) => {
    const todoIndex = todoList.findIndex((todo) => todo.id === todoID);

    if (todoIndex > -1) {
        todoList.splice(todoIndex, 1);
    }
};

//**sat the completed value for a given todo */

const setCompleted = (id) => {
    const todo = todoList.find((todo) => todo.id === id);

    if (todo) {
        todo.completed = !todo.completed;
    }
};

// ** Get DOM element for individual note
const generateTodoDOM = (task) => {
    const todoEl = document.createElement("label");
    const todoName = document.createElement("span");
    const containerEl = document.createElement('div')
    const todoCheck = document.createElement("input");
    todoCheck.setAttribute("type", "checkbox");
    todoCheck.checked = task.completed;
    containerEl.appendChild(todoCheck);

    todoCheck.addEventListener("change", (e) => {
        setCompleted(task.id);
        saveTodos(todoList);
        renderTodos(todoList, filterTodo);
    });

    todoName.textContent = task.title;
    containerEl.appendChild(todoName);

    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "remove";
    deleteBtn.classList.add('button', 'button--text')
    todoEl.appendChild(deleteBtn);

    deleteBtn.onclick = () => {
        removeTodo(task.id);
        saveTodos(todoList);
        renderTodos(todoList, filterTodo);
    };

    return todoEl;
};

// ** Render application todos based on filters
const renderTodos = (todoList, filter) => {
    let filteredTodo = todoList.filter((todo) =>
        todo.title.toLowerCase().includes(filter.search.toLowerCase())
    );

    filteredTodo = filteredTodo.filter(
        (todo) => !filter.check || !todo.completed
    );
    todosHolder.innerHTML = "";

    todosHolder.appendChild(generateDomSummary(filteredTodo));

    if (filteredTodo.length > 0) {
        filteredTodo.forEach((todo) => {
            const todoName = generateTodoDOM(todo);
            todosHolder.appendChild(todoName);
        });
    } else {
        const noTasks = document.createElement('p')
        noTasks.classList.add('empty-message')
        noTasks.textContent = 'No tasks to show!'
        todosHolder.appendChild(noTasks)
    }
};

// ** Get the DOM elements for the list summary
const generateDomSummary = (left) => {
    const tasksLeft = document.createElement("h2");
    tasksLeft.classList.add('list-title')
    const plural = left.length === 1 ? '' : 's'
    tasksLeft.textContent = `You have ${left.length} task${plural} left`;
    return tasksLeft;
};
