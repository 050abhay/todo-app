import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
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
    //let temp = todoItems;
    //temp.push(todoItem);
    setTodoItems([...todoItems,{ id: Math.floor(Math.random() * 1000),name: todoItem,},]);
    setTodoItem("");
    console.log(todoItems);
  };
  return (
    <div>
      <div className="container mt-3">
        <form className="container-fluid d-flex" onSubmit={handleSubmit}>
          <input value={todoItem} className="form-control" type="text" onChange={handleChange}/>
          <button className="btn btn-primary ms-2" type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}
