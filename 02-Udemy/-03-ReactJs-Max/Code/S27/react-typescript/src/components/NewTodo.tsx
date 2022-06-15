import React, { useRef } from "react";

const NewTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = inputRef.current?.value;
    if (enteredText?.trim() !== "") {
      console.log(enteredText);
    }
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="text">Todo title</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
