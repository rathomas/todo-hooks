import React, { Component } from 'react';
import TodoList from './TodoList';
import Test from './Test';
import logo from './logo.svg';
import './App.css';

const todoItems = {
  todos: [
    {
      id: 1,
      name: "item 1",
      done: true
    },
    {
      id: 2,
      name: "Item 2",
      done: false
    }
  ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodoList data={todoItems} />
          <Test data={{name: 'dog'}}/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
