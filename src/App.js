import React, { useState } from 'react';
import Todo from './components/Todo';
// import styled from 'styled-components';

function App() {
  //Todo state & initial todos
  const [todos, setTodos] = useState([
    {
      content: 'Example todo #1',
      isDone: false
    },
    {
      content: 'Example todo #2',
      isDone: false
    },
    {
      content: 'Example todo #3',
      isDone: false
    },
  ]);

  const addTodo = content => {

  }

  const toggleTodoState = todoIndex => {

  }

  const deleteTodo = todoIndex => {

  }

  return (
    <div>
      <div className="todo-list">
        {todos.map((todo, idx) => (
          <Todo key={idx} todoIndex={idx} todo={todo} toggleTodoState={toggleTodoState} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
