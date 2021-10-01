import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./styles.css";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <h1>Simple Todo</h1>
      <TodoList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
