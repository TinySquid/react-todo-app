import React from 'react'
import styled from 'styled-components';

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Easier to just modify style at the div than to do this method */
  /* text-decoration: ${props => props.isDone ? "line-through" : "none"} */
`
const TodoButtons = styled.div`

`

export default function Todo({ todo, todoIndex, toggleTodoState, deleteTodo }) {
  return (
    <TodoItem style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>
      {todo.content}
      <TodoButtons>
        <button onClick={() => toggleTodoState(todoIndex)}>{todo.isDone ? 'Mark Incomplete' : 'Mark Complete'}</button>
        <button onClick={() => deleteTodo(todoIndex)}>X</button>
      </TodoButtons>
    </TodoItem>
  )
}


