import uuidv4 from 'uuid/v4'

let todoList = []

// ** Fetch existing todos from localStorage
const getSavedTodo = () => {
    const todoJSON = localStorage.getItem("tasks");
    try {
        todoList = todoJSON ? JSON.parse(todoJSON) : [];
    } catch (e) {
        todoList = [];
    }
};

// ** Save todos to localStorage
const saveTodos = () => {
    localStorage.setItem("tasks", JSON.stringify(todoList));
};

const getTodos = () => todoList

// createTodo
// Arguments: todo text
// Return value: none

const createTodo = (todoText) => {
    todoList.push({
        id: uuidv4(),
        title: todoText,
        completed: false,
    });
    saveTodos();
}

//**remove todo */
const removeTodo = (todoID) => {
    const todoIndex = todoList.findIndex((todo) => todo.id === todoID);

    if (todoIndex > -1) {
        todoList.splice(todoIndex, 1);
        saveTodos()
    }
};

//**set the completed value for a given todo */
const setCompleted = (id) => {
    const todo = todoList.find((todo) => todo.id === id);

    if (todo) {
        todo.completed = !todo.completed;
        saveTodos()
    }
};

getSavedTodo()
export { getSavedTodo, getTodos, createTodo, removeTodo, setCompleted }
// Make sure to call loadTodos and setup the exports