import React, { useState } from 'react';
import './App.css';

const Todo = ({ todo, index, toggleCompleteTodo, removeTodo }) => {
  return (
  <div 
    className="todo"
    style={ {textDecoration: todo.isCompleted && "line-through"} }
  >
    {todo.text}
    <div>
      <button onClick={() => toggleCompleteTodo(index)}>Complete</button>  
      <button onClick={() => removeTodo(index)}>X</button>
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

  const toggleCompleteTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
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
            toggleCompleteTodo={toggleCompleteTodo}
            removeTodo={removeTodo}
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
