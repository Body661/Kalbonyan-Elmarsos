// ** Fetch existing todos from localStorage

const getSavedTodo = function () {
  const todoJSON = localStorage.getItem("tasks");

  if (todoJSON !== null) {
    return JSON.parse(todoJSON);
  } else {
    return [];
  }
};

// ** Save todos to localStorage

const saveTodos = function (todo) {
  localStorage.setItem("tasks", JSON.stringify(todo));
};

//**remove todo */
const removeTodo = function (todoID) {
  const todoIndex = todoList.findIndex(function (todo) {
    return todo.id === todoID;
  });

  if (todoIndex > -1) {
    todoList.splice(todoIndex, 1);
  }
};

//**sat the completed value for a given todo */

const setCompleted = function (id) {
  const todo = todoList.find(function (todo) {
    return todo.id === id;
  });

  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
};

//? another solution /
// ! const setCompleted = function (task) {
// ! task.completed = !task.completed;
// ! };

// ** Get DOM element for individual note
const generateTodoDOM = function (task) {
  const todosDiv = document.createElement("div");
  const todoName = document.createElement("span");

  const todoCheck = document.createElement("input");
  todoCheck.setAttribute("type", "checkbox");
  todoCheck.checked = task.completed;
  todosDiv.appendChild(todoCheck);

  todoCheck.addEventListener("change", function (e) {
    //! setCompleted(task);

    setCompleted(task.id);
    saveTodos(todoList);
    renderTodos(todoList, filterTodo);
  });

  todoName.textContent = task.title;
  todosDiv.appendChild(todoName);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.onclick = function () {
    removeTodo(task.id);
    saveTodos(todoList);
    renderTodos(todoList, filterTodo);
  };

  todosDiv.appendChild(deleteBtn);
  return todosDiv;
};

// ** Render application todos based on filters
const renderTodos = function (todoList, filter) {
  let filteredTodo = todoList.filter(function (todo) {
    return todo.title.toLowerCase().includes(filter.search.toLowerCase());
  });

  filteredTodo = filteredTodo.filter(function (todo) {
    return !filter.check || !todo.completed;
  });
  todosHolder.innerHTML = "";

  todosHolder.appendChild(generateDomSummary(filteredTodo));

  filteredTodo.forEach((todo) => {
    const todoName = generateTodoDOM(todo);
    todosHolder.appendChild(todoName);
  });
};

// ** Get the DOM elements for the list summary
const generateDomSummary = function (left) {
  const tasksLeft = document.createElement("h2");
  tasksLeft.textContent = `You have ${left.length} tasks left`;
  return tasksLeft;
};
