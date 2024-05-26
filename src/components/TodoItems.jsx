// Importing React and necessary functions from date-fns for date formatting
import React from "react";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";

// Functional component for rendering individual todo items
const TodoItems = ({ todo, handleDeleteTodo, handleUpdateTodo }) => {
  return (
    <div className="container px-0">
      {/* Container for a single todo item */}
      <div className="row px-3 d-flex justify-content-center mb-4">
        <div className="col-lg-7 border shadow-sm rounded-1 p-3">
          {/* Main content of the todo item */}
          <div>
            {/* Displaying the todo title */}
            <Link
              className="text-dark text-decoration-none"
              to={`/todo/${todo && todo._id}`}
            >
              <h5 className="fw-bold">{todo.title}</h5>
            </Link>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                {/* Displaying the todo description */}
                <p className="mb-0">{todo.description}</p>
              </div>
              <div className="d-flex gap-3 justify-content-between align-items-center">
                {/* Checkbox for marking the todo as completed */}
                <div className="px-3">
                  <input
                    type="checkbox"
                    className="form-check-input border border-dark"
                    onChange={() => handleUpdateTodo(todo._id)}
                    checked={todo.isCompleted}
                  />
                </div>
                <div className="">
                  <Link
                    className="text-decoration-none text-dark"
                    to={`/edit/${todo._id}`}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                </div>
                {/* Button for deleting the todo */}
                <div className="">
                  <button
                    className="btn"
                    onClick={() => handleDeleteTodo(todo._id)}
                  >
                    {/* Displaying delete icon */}
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Displaying the relative creation time of the todo */}
            <small>
              {formatDistanceToNow(new Date(todo && todo.createdAt), {
                addSuffix: true,
              })}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the TodoItems component as the default export
export default TodoItems;
