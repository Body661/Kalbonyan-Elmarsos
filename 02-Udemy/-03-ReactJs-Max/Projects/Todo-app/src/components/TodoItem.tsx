import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  id: string;
  onRemoveTodo: (id: string) => void;
}> = (props) => {
  return (
    <li onClick={() => props.onRemoveTodo(props.id)} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;
