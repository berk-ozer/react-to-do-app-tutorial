import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Todo = ({ todo, index, completeTodo }) => {
  return (
  <div 
    className="todo"
    style={ {textDecoration: todo.isCompleted && "line-through"} }
  >
    {todo.text}
    <div>
      <button onClick={() => completeTodo(index)}>Complete</button>  
    </div>  
  </div>
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
      {
        text: 'Learn to make a react to-do app',
        isCompleted: false
      },
      {
        text: 'Get takeout for dinner',
        isCompleted: false
      },
      {
        text: 'Shave and go to bed',
        isCompleted: false
      }
    ]
  )

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoForm
          addTodo={addTodo}
        />
      </div>
    </div>
  );
}

export default App;
