import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState(
    [
      {text: 'Learn to make a react to-do app'},
      {text: 'get takeout for dinner'},
      {text: 'shave and go to bed'}
    ]
  )

  return (
    <div className="App">
      <header className="App-header">
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

export default App;
