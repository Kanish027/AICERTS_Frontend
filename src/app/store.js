// Importing configureStore from Redux Toolkit for store creation.
import { configureStore } from "@reduxjs/toolkit";
// Importing the todoReducer for managing todos.
import todoReducer from "../features/todos/todoSlice";

// Creating the Redux store with todoReducer managing the 'todo' slice.
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

// Exporting the configured Redux store.
export default store;
