import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import { DeleteTodo, GetAllTodos, GetSingleTodo } from "../actions/Todo";

const TodoDetails = () => {
  const { todo } = useSelector((state) => state.todo);

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleDeleteTodo = async () => {
    await dispatch(DeleteTodo(id));
    await dispatch(GetAllTodos());
    navigate("/");
  };

  useEffect(() => {
    dispatch(GetSingleTodo(id));
  }, [dispatch, id]);

  return (
    <div className="container">
      <div className="row flex justify-content-center my-5">
        <div className="col-lg-8 border shadow-lg px-5 py-4">
          <div className="d-flex justify-content-between mb-3">
            <div>
              <h5 className="mb-3 fw-bold">{todo && todo.title}</h5>
              <h6 className="fw-semibold">{todo && todo.description}</h6>
            </div>
            <div className="text-secondary">
              {todo && format(new Date(todo.createdAt), "MM/dd/yyyy")}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              {todo && todo.isCompleted ? (
                <div className="text-success fw-semibold">Completed</div>
              ) : (
                <div className="text-danger fw-semibold">Pending</div>
              )}
            </div>
            <div>
              <button
                onClick={handleDeleteTodo}
                className="btn btn-dark btn-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDetails;
