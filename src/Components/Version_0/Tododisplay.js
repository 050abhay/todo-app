import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
export default function Tododisplay({ item, todoItems, setTodoItems }) {
  const handleDelete = () => {
    setTodoItems(
      todoItems.filter((obj) => {
        return obj.id !== item.id;
      })
    );
    console.log(todoItems);
  };
  return (
    <div className="container-fluid">
      <div className="row bg-info border border-5 mt-3 justify-content-between">
        <div className="col-sm-10">
          <h5>{item.name}</h5>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-danger" onClick={handleDelete}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
