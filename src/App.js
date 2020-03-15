import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Todo = ({ todo }) => {
  return (
  <div className="todo">{todo.text}</div>
  )
}

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) {
      return;
    }

    addTodo(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </form>
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
