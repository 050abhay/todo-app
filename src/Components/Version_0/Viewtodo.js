import React from "react";
import Todoform from "./Todoform";
import { useState } from "react";
import Todolist from "./Todolist";
export default function Viewtodo() {
  const [todoItem, setTodoItem] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  return (
    <div className="container">
      <Todoform
        todoItem={todoItem}
        setTodoItem={setTodoItem}
        todoItems={todoItems}
        setTodoItems={setTodoItems}
      />
      <Todolist todoItems={todoItems} setTodoItems={setTodoItems} />
    </div>
  );
}
