// Importing React and ReactDOM from the appropriate modules
import React from "react";
// Importing ReactDOM to render our React application into the DOM.
import ReactDOM from "react-dom/client";
// Importing the main App component from the "./App" file
// Importing the Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";
// Importing Provider from react-redux to make the Redux store available
import { Provider } from "react-redux";
// Importing the Redux store configuration to be used with the Provider component.
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import store from "./app/store";

// Creating a root for ReactDOM to render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
// Rendering the main App component inside the root
root.render(
  // Added Provider from react-redux
  <Provider store={store}>
    {/* App Component */}
    <Router>
      <Home />
    </Router>
  </Provider>
);
