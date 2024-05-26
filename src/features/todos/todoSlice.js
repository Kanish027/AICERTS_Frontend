// Importing createSlice from Redux Toolkit to create a slice for todo operations
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

// Initial state of the todo slice, attempting to read from local storage or defaulting to an empty array
const initialState = {
  isLoading: false,
};

// Creating a slice for todo operations with name 'todos', initial state, and reducers for handling actions
export const todoSlice = createSlice({
  name: "todos", // Name of this slice used in action types
  initialState, // The initial state for the slice
  reducers: {
    AddTodoRequest: (state) => {
      state.isLoading = true;
    },
    AddTodoSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    AddTodoFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    GetTodoRequest: (state) => {
      state.isLoading = true;
    },
    GetTodoSuccess: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    GetTodoFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    GetSingleTodoRequest: (state) => {
      state.isLoading = true;
    },
    GetSingleTodoSuccess: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    },
    GetSingleTodoFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    UpdateTodoRequest: (state) => {
      state.isLoading = true;
    },
    UpdateTodoSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    UpdateTodoFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    DeleteTodoRequest: (state) => {
      state.isLoading = true;
    },
    DeleteTodoSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    DeleteTodoFailure: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },

    EditTodoRequest: (state) => {
      state.isLoading = true;
    },
    EditTodoSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    EditTodoFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  AddTodoRequest,
  AddTodoSuccess,
  AddTodoFailure,
  GetTodoRequest,
  GetTodoSuccess,
  GetTodoFailure,
  GetSingleTodoRequest,
  GetSingleTodoSuccess,
  GetSingleTodoFailure,
  UpdateTodoRequest,
  UpdateTodoSuccess,
  UpdateTodoFailure,
  DeleteTodoRequest,
  DeleteTodoSuccess,
  DeleteTodoFailure,
  EditTodoRequest,
  EditTodoSuccess,
  EditTodoFailure,
} = todoSlice.actions;

// Exporting the reducer for incorporation into the store
export default todoSlice.reducer;
