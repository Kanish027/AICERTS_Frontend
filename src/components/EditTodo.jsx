import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { EditTodos, GetAllTodos, GetSingleTodo } from "../actions/Todo";

const EditTodo = () => {
  const { todo } = useSelector((state) => state.todo);

  // State variables for managing form input form
  const [title, setTitle] = useState(todo && todo.title);
  const [description, setDescription] = useState(todo && todo.description);

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleEditTodo = async (e) => {
    e.preventDefault();
    await dispatch(EditTodos(id, title, description));
    await dispatch(GetAllTodos());
    navigate("/");
  };

  useEffect(() => {
    dispatch(GetSingleTodo(id));
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row px-3 d-flex justify-content-center my-5">
        <div className="col-lg-7 border shadow-sm rounded-1 p-4">
          <h1 className="fw-bold text-center">Edit Todo</h1>
          {/* Form for adding a new todo */}
          <form onSubmit={handleEditTodo}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                className="form-control"
                rows={5}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>
            {/* Button for adding a new todo, with dynamic text based on loading state */}
            <div className="d-grid mb-3">
              <button className="btn btn-sm btn-dark">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
