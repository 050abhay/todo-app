import React from "react";

export default function Todoform({
  todoItem,
  setTodoItem,
  todoItems,
  setTodoItems,
}) {
  const handleChange = (e) => {
    setTodoItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoItem.trim() === "") return; // Prevent adding empty todo
    setTodoItems([
      ...todoItems,
      { id: Math.floor(Math.random() * 1000), name: todoItem, completed: false },
    ]);
    setTodoItem("");
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          value={todoItem}
          className="form-control"
          type="text"
          onChange={handleChange}
          placeholder="Enter your task..."
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
