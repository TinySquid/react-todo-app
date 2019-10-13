import React from 'react'
import styled from 'styled-components';

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Easier to just modify style at the div than to do this method */
  /* text-decoration: ${props => props.isDone ? "line-through" : "none"} */
`
const TodoButton = styled.button`
  color: whitesmoke;
  background-color: #135d8e;
  border: 1px solid black;
  height: 35px;
  margin-top: 5px;
  margin-right: 5px;

  :hover {
    border: 1px solid whitesmoke;
    background-color: #2f6f9f;
  }

  :active {
    border: 1px solid whitesmoke;
    background-color: #034d7e;
  }
`

export default function Todo({ todo, todoIndex, toggleTodoState, deleteTodo }) {
  return (
    <TodoItem style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>
      {todo.content}
      <div>
        <TodoButton onClick={() => toggleTodoState(todoIndex)}>{todo.isDone ? 'Mark Incomplete' : 'Mark Complete'}</TodoButton>
        <TodoButton onClick={() => deleteTodo(todoIndex)}>X</TodoButton>
      </div>
    </TodoItem>
  )
}


