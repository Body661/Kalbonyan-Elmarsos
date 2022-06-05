import { getTodos, setCompleted, removeTodo } from "./todos";
import { getFilters } from "./filters";

const renderTodos = () => {
    let todosHolder = document.querySelector(".tasks-holder");
    let filter = getFilters()
    // let { search, check } = getFilters()
    let filteredTodo = getTodos().filter((todo) =>
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
        renderTodos();
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
        renderTodos();
    };

    return todoEl;
};

const generateDomSummary = (left) => {
    const tasksLeft = document.createElement("h2");
    tasksLeft.classList.add('list-title')
    const plural = left.length === 1 ? '' : 's'
    tasksLeft.textContent = `You have ${left.length} task${plural} left`;
    return tasksLeft;
};

export { renderTodos, generateTodoDOM, generateDomSummary }