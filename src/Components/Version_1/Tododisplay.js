import React from "react";

export default function Tododisplay({ item, handleToggleCompletion, handleDelete }) {
  return (
    <div
      className={`card mb-3 ${item.completed ? "border-success" : "border-info"}`}
    >
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={item.completed}
            onChange={handleToggleCompletion}
          />
          <label
            className={`form-check-label ${item.completed ? "text-muted text-decoration-line-through" : ""
              }`}
            onClick={handleToggleCompletion}
          >
            {item.name}
          </label>
        </div>
        <button
          className="btn btn-danger"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

