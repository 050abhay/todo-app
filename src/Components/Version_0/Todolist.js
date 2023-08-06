import React from "react";
import Tododisplay from "./Tododisplay";

export default function Todolist({ todoItems, setTodoItems }) {
  return (
    <div>
      {todoItems.map((item) => {
        return (
          <Tododisplay
            item={item}
            todoItems={todoItems}
            setTodoItems={setTodoItems}
          />
        );
      })}
    </div>
  );
}
