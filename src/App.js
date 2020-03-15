import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Todo = ({ todo }) => {
  return (
  <div className="todo">{todo.text}</div>
  )
}

function App() {
  const [todos, setTodos] = useState(
    [
      {text: 'Learn to make a react to-do app'},
      {text: 'Get takeout for dinner'},
      {text: 'Shave and go to bed'}
    ]
  )

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
