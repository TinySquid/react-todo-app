import React, { useState } from 'react';
import styled from 'styled-components';

import Todo from './components/Todo';
import TodoInput from './components/TodoInput';

const TodoContainer = styled.div`
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
  width: 25%;
`

const TodoList = styled.div`
  width: 25%;
  padding: 1%;
  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.7);
  background-color: rgb(42, 42, 42);
`

const App = () => {
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

  //Add a new todo item to state
  const addTodo = content => {
    const newTodoState = [...todos, { content }];
    setTodos(newTodoState);
  }

  //Toggle todo state (done, not done) by getting todo state and flipping the isDone bool on todoIndex.
  const toggleTodoState = todoIndex => {
    const newTodoState = [...todos];
    newTodoState[todoIndex].isDone = !newTodoState[todoIndex].isDone;
    setTodos(newTodoState);
  }

  //Delete a todo by getting the todo list and splicing 1 item from todoIndex position.
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
        {/* Map over todos and add a todo for each entry in state */}
        {todos.map((todo, idx) => (
          <Todo key={idx} todoIndex={idx} todo={todo} toggleTodoState={toggleTodoState} deleteTodo={deleteTodo} />
        ))}
        <TodoInput addTodo={addTodo} />
      </TodoList>
    </TodoContainer>
  );
}

export default App;
