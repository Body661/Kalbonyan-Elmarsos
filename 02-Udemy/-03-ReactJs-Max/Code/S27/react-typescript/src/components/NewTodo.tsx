import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ addTodoHandler: (text: any) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = inputRef.current?.value;
    if (enteredText?.trim().length === 0) {
      return;
    }

    props.addTodoHandler(enteredText);
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
