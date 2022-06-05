const todo = [
  {
    title: "Task 1",
    completed: false,
  },
  {
    title: "Task 2",
    completed: true,
  },
  {
    title: "Task 3",
    completed: false,
  },
  {
    title: "Task 4",
    completed: false,
  },
];

// search for specific task & render tasks (start)
const filterTodo = {
  search: "",
  check: false,
};

let todoHolder = document.querySelector(".tasks-holder");

const renderTodos = function (todoList, filter) {
  let filteredTodo = todoList.filter(function (todo) {
    return todo.title.toLowerCase().includes(filter.search.toLowerCase());

    // ### Other Solution for filtering completed tasks ###

    // if (filter.check) {
    //   return (
    //     todo.title.toLowerCase().includes(filter.search.toLowerCase()) &&
    //     !todo.completed
    //   );
    // } else {
    //   return todo.title.toLowerCase().includes(filter.search.toLowerCase());
    // }
  });

  // filtering completed tasks (start)

  filteredTodo = filteredTodo.filter(function (todo) {
    return !filter.check || !todo.completed;

    // ### Other Solution for filtering completed tasks ###

    // if (filter.check) {
    //   return !todo.completed;
    // } else {
    //   return true;
    // }
  });

  // filtering completed tasks (end)

  // count how many tasks left (Start)
  let left = filteredTodo.filter(function (ele) {
    return !ele.completed;
  });

  todoHolder.innerHTML = "";

  const tasksLeft = document.createElement("h2");
  tasksLeft.textContent = `You have ${left.length} tasks left`;
  todoHolder.appendChild(tasksLeft);
  // count how many tasks left (end)

  filteredTodo.forEach((todo) => {
    let todoName = document.createElement("p");
    todoName.textContent = todo.title;
    todoHolder.appendChild(todoName);
  });
};

renderTodos(todo, filterTodo);

let searchArea = document.querySelector(".search");
searchArea.addEventListener("input", function () {
  filterTodo.search = searchArea.value;
  renderTodos(todo, filterTodo);
});
// search for specific task & render tasks (end)

let form = document.querySelector("#form");
let newTodoText = document.querySelector("#form input");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  todo.push({
    title: newTodoText.value,
    completed: false,
  });
  renderTodos(todo, filterTodo);
  newTodoText.value = "";
});

let hideCompleted = document.querySelector("#hide-compelted");
hideCompleted.addEventListener("change", function () {
  filterTodo.check = this.checked;
  renderTodos(todo, filterTodo);
});