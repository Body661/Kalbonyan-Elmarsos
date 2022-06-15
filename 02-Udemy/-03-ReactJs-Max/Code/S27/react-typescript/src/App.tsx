import Todo from "./models/todo";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

const todos = [
  new Todo("Learn React"),
  new Todo("Learn TypeScript"),
  new Todo("Learn Nodejs"),
];

function App() {
  return (
    <div>
      <NewTodo />
      <Todos items={todos} />
    </div>
  );
}

export default App;
