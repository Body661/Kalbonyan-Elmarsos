import Todo from "./models/todo";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    setTodos((prevTodo) => {
      return [new Todo(todoText), ...prevTodo];
    });
  };
  return (
    <div>
      <NewTodo addTodoHandler={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
