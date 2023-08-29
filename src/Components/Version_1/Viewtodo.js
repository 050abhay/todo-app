import React, { useState } from "react";
import Todoform from "./Todoform";
import Todolist from "./Todolist";

export default function Viewtodo() {
  const [todoItem, setTodoItem] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const completedTasks = todoItems.filter((item) => item.completed).length;
  const remainingTasks = todoItems.filter((item) => !item.completed).length;
  const noTasksMessage = "No tasks to do today.";
  const allTasksCompletedMessage = "All tasks completed!";

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Todo App</h3>
              <Todoform
                todoItem={todoItem}
                setTodoItem={setTodoItem}
                todoItems={todoItems}
                setTodoItems={setTodoItems}
              />
              <Todolist todoItems={todoItems} setTodoItems={setTodoItems} />
              <div className="text-center mt-3">
                {todoItems.length === 0
                  ? noTasksMessage
                  : completedTasks === todoItems.length
                  ? allTasksCompletedMessage
                  : completedTasks === 0
                  ? "No tasks completed yet."
                  : `${completedTasks} task${
                      completedTasks === 1 ? "" : "s"
                    } completed.`}
                <br />
                {todoItems.length === 0
                  ? ""
                  : remainingTasks === 0 && completedTasks !== todoItems.length
                  ? allTasksCompletedMessage
                  : `${remainingTasks} task${
                      remainingTasks === 1 ? "" : "s"
                    } remaining.`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
