import uuidv4 from 'uuid/v4'
import { setFilters } from "./filters";
import { createTodo, getSavedTodo } from './todos'
import { renderTodos } from './views';


// search for specific task & render tasks (start)
renderTodos();

let searchArea = document.querySelector(".search");
searchArea.addEventListener("input", () => {
    setFilters({
        search: searchArea.value
    })
    renderTodos();
});
// search for specific task & render tasks (end)

let form = document.querySelector("#form");
let newTodoText = document.querySelector("#form input");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = newTodoText.value.trim()
    if (text.length > 0) {
        createTodo(text)
        renderTodos();
        newTodoText.value = "";
    }
});

let hideCompleted = document.querySelector("#hide-compelted");
hideCompleted.addEventListener("change", function () {
    setFilters({
        check: this.checked
    })
    renderTodos();
});

window.addEventListener("storage", (e) => {
    if (e.key === "tasks") {
        getSavedTodo()
        renderTodos();
    }
});
