import React, { Component } from 'react';
import './App.css';
import TodoList from "./components/TodoList";

class App extends Component {

  render() {
    return (
      <div className="todo-app">
        <h1 className="text-center">Basic React Application: To Do List</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;