import React from "react";
import Tododisplay from "./Tododisplay";

export default function Todolist({ todoItems, setTodoItems }) {
  const handleToggleCompletion = (itemId) => {
    setTodoItems(
      todoItems.map((obj) => {
        if (obj.id === itemId) {
          return { ...obj, completed: !obj.completed };
        }
        return obj;
      })
    );
  };

  const handleDelete = (itemId) => {
    setTodoItems(todoItems.filter((obj) => obj.id !== itemId));
  };

  return (
    <div>
      {todoItems.map((item) => (
        <Tododisplay
          key={item.id}
          item={item}
          handleToggleCompletion={() => handleToggleCompletion(item.id)}
          handleDelete={() => handleDelete(item.id)}
        />
      ))}
    </div>
  );
}
