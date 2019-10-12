import React, { useState } from 'react';
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
    console.log('add todo:', content);
  }

  const toggleTodoState = todoIndex => {

  }

  const deleteTodo = todoIndex => {

  }

  return (
    <div>
    </div>
  );
}

export default App;
