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
  const todosDiv = document.createElement("div");
  const todoName = document.createElement("span");

  const todoCheck = document.createElement("input");
  todoCheck.setAttribute("type", "checkbox");
  todoCheck.checked = task.completed;
  todosDiv.appendChild(todoCheck);

  todoCheck.addEventListener("change", (e) => {
    setCompleted(task.id);
    saveTodos(todoList);
    renderTodos(todoList, filterTodo);
  });

  todoName.textContent = task.title;
  todosDiv.appendChild(todoName);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.onclick = () => {
    removeTodo(task.id);
    saveTodos(todoList);
    renderTodos(todoList, filterTodo);
  };

  todosDiv.appendChild(deleteBtn);
  return todosDiv;
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

  filteredTodo.forEach((todo) => {
    const todoName = generateTodoDOM(todo);
    todosHolder.appendChild(todoName);
  });
};

// ** Get the DOM elements for the list summary
const generateDomSummary = (left) => {
  const tasksLeft = document.createElement("h2");
  tasksLeft.textContent = `You have ${left.length} tasks left`;
  return tasksLeft;
};
