import React, { useState } from 'react';
import styled from 'styled-components';

import Todo from './components/Todo';
import TodoInput from './components/TodoInput';

import { device } from './breakpoints';

const TodoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  width: 100%;
`;

const TodoHeader = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: whitesmoke;
  letter-spacing: 0.1rem;
	background-color: rgb(17, 109, 170, 0.8);
  box-shadow: 0px -2px 3px 0px rgba(0,0,0,0.7);
  margin-top: 5%;
  padding-left: .8%;

  @media ${device.sm} {
    width: 98%;
  }
  @media ${device.md} {
    width: 75%;
  }
  @media ${device.lg} {
    width: 60%;
  }
  @media ${device.xl} {
    width: 25%;
  }
`;

const TodoList = styled.section`
  padding: 1%;
  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.7);
  background-color: rgb(42, 42, 42);

  @media ${device.sm} {
    width: 98%;
  }
  @media ${device.md} {
    width: 75%;
  }
  @media ${device.lg} {
    width: 60%;
  }
  @media ${device.xl} {
    width: 25%;
  }
`;

const App = () => {
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

  //Allow for adding new todos to state
  const addTodo = content => {
    const newTodoState = [...todos, { content }];
    setTodos(newTodoState);
  }

  //Toggle todo state (done, not done)
  const toggleTodoState = todoIndex => {
    const newTodoState = [...todos];
    newTodoState[todoIndex].isDone = !newTodoState[todoIndex].isDone;
    setTodos(newTodoState);
  }

  //Delete a todo by ID
  const deleteTodo = todoIndex => {
    const newTodoState = [...todos];
    newTodoState.splice(todoIndex, 1);
    setTodos(newTodoState);
  }

  return (
    <TodoContainer>
      <TodoHeader>
        TodoList
      </TodoHeader>
      <TodoList>
        {todos.map((todo, idx) => (
          <Todo key={idx} todoIndex={idx} todo={todo} toggleTodoState={toggleTodoState} deleteTodo={deleteTodo} />
        ))}
        <TodoInput addTodo={addTodo} />
      </TodoList>
    </TodoContainer>
  );
}

export default App;
