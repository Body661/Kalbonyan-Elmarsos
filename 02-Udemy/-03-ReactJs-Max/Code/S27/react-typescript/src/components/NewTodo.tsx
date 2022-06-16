import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todosContex";

const NewTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todosCtx = useContext(TodosContext);

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = inputRef.current!.value;
    if (enteredText?.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <label htmlFor="text">Todo title</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
