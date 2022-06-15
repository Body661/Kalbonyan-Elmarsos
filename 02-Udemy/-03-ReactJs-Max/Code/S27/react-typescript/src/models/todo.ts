import { v4 as uuidv4 } from "uuid";

class Todo {
  text: string;
  id: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = uuidv4();
  }
}

export default Todo;
