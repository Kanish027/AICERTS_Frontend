// Importing the AddTodo component to manage the application's todo functionality
import AddTodo from "./components/AddTodo";
// Importing the Toaster component from "react-hot-toast" for displaying user notifications
import { Toaster } from "react-hot-toast";

// Main App component responsible for rendering the entire application
function App() {
  return (
    <div>
      {/* Render the AddTodo component to allow users to manage and track their todos */}
      <AddTodo />
      {/* Render the Toaster component for providing user-friendly notifications */}
      <Toaster />
    </div>
  );
}

export default App;
