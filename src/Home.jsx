import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../src/App";
import EditTodo from "./components/EditTodo";
import TodoDetails from "./components/TodoDetails";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/edit/:id" element={<EditTodo />} />
        <Route path="/todo/:id" element={<TodoDetails />} />
      </Routes>
    </div>
  );
};

export default Home;
