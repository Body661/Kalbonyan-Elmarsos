"use strict";

let todoList = getSavedTodo();

// search for specific task & render tasks (start)
const filterTodo = {
  search: "",
  check: false,
};

let todosHolder = document.querySelector(".tasks-holder");

renderTodos(todoList, filterTodo);

let searchArea = document.querySelector(".search");
searchArea.addEventListener("input", () => {
  filterTodo.search = searchArea.value;
  renderTodos(todoList, filterTodo);
});
// search for specific task & render tasks (end)

let form = document.querySelector("#form");
let newTodoText = document.querySelector("#form input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  todoList.push({
    id: uuidv4(),
    title: newTodoText.value,
    completed: false,
  });
  saveTodos(todoList);
  renderTodos(todoList, filterTodo);
  newTodoText.value = "";
});

let hideCompleted = document.querySelector("#hide-compelted");
hideCompleted.addEventListener("change", function () {
  filterTodo.check = this.checked;
  renderTodos(todoList, filterTodo);
});

window.addEventListener("storage", (e) => {
  if (e.key === "tasks") {
    todoList = JSON.parse(e.newValue);
    renderTodos(todoList, filterTodo);
  }
});
