import React, { useState } from 'react';
import styled from 'styled-components';
import Todo from './components/Todo';

const AppRoot = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
`

const TodoHeader = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: whitesmoke;
  letter-spacing: 0.1rem;
	background-color: rgb(17, 109, 170, 0.8);
  box-shadow: 0px -2px 3px 0px rgba(0,0,0,0.7);
  margin-top: 5%;
  padding-left: .8%;
  width: 40%;
`

const TodoList = styled.div`
  width: 40%;
  padding: 1%;
  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.7);
  background-color: rgb(42, 42, 42);
`

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
    <AppRoot>
      <TodoHeader>
        TodoList
      </TodoHeader>
      <TodoList>
        {/* Map over todos and add a todo for each entry in state */}
        {todos.map((todo, idx) => (
          <Todo key={idx} todoIndex={idx} todo={todo} toggleTodoState={toggleTodoState} deleteTodo={deleteTodo} />
        ))}
      </TodoList>
    </AppRoot>
  );
}

export default App;
