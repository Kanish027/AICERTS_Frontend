import axios from "axios";
import {
  AddTodoFailure,
  AddTodoRequest,
  AddTodoSuccess,
  DeleteTodoFailure,
  DeleteTodoRequest,
  DeleteTodoSuccess,
  EditTodoFailure,
  EditTodoRequest,
  EditTodoSuccess,
  GetSingleTodoFailure,
  GetSingleTodoRequest,
  GetSingleTodoSuccess,
  GetTodoFailure,
  GetTodoRequest,
  GetTodoSuccess,
  UpdateTodoFailure,
  UpdateTodoRequest,
  UpdateTodoSuccess,
} from "../features/todos/todoSlice";
import { toast } from "react-hot-toast";

export const AddNewTodo = (title, description) => async (dispatch) => {
  try {
    dispatch(AddTodoRequest());
    const { data } = await axios.post(
      "/api/api/v1/todo/new",
      {
        title: title,
        description: description,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch(AddTodoSuccess(data.message));
    toast.success(data.message);
  } catch (error) {
    dispatch(AddTodoFailure(error.response.data.message));
    toast.error(error.response.data.message);
  }
};

export const GetAllTodos = () => async (dispatch) => {
  try {
    dispatch(GetTodoRequest());
    const { data } = await axios.get("/api/api/v1/todo/todos");

    dispatch(GetTodoSuccess(data.todos));
  } catch (error) {
    dispatch(GetTodoFailure(error.response.data.message));
  }
};

export const GetSingleTodo = (id) => async (dispatch) => {
  try {
    dispatch(GetSingleTodoRequest());

    const { data } = await axios.get(`/api/api/v1/todo/todo/${id}`);

    dispatch(GetSingleTodoSuccess(data.todo));
  } catch (error) {
    dispatch(GetSingleTodoFailure(error.response.data.message));
  }
};

export const UpdateTodo = (id) => async (dispatch) => {
  try {
    dispatch(UpdateTodoRequest());

    const { data } = await axios.put(`/api/api/v1/todo/todo/${id}`);

    dispatch(UpdateTodoSuccess(data.message));
    toast.success(data.message);
  } catch (error) {
    dispatch(UpdateTodoFailure(error.response.data.message));
    toast.error(error.message);
  }
};

export const DeleteTodo = (id) => async (dispatch) => {
  try {
    dispatch(DeleteTodoRequest());
    const { data } = await axios.delete(`/api/api/v1/todo/todo/${id}`);
    dispatch(DeleteTodoSuccess(data.message));
    toast.success(data.message);
  } catch (error) {
    dispatch(DeleteTodoFailure(error.response.data.message));
    toast.error(error.response.data.message);
  }
};

export const EditTodos = (id, title, description) => async (dispatch) => {
  try {
    dispatch(EditTodoRequest());
    const { data } = await axios.put(
      `/api/api/v1/todo/tododetails/${id}`,
      {
        title: title,
        description: description,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);
    dispatch(EditTodoSuccess(data.message));
    toast.success(data.message);
  } catch (error) {
    dispatch(EditTodoFailure());
    toast.error(error.message);
  }
};
