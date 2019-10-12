import React from 'react'
import styled from 'styled-components';

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const TodoButtons = styled.div`

`

export default function Todo({ todo, todoIndex, toggleTodoState, deleteTodo }) {
  return (
    <TodoItem>
      {todo.content}
      <TodoButtons>
        <button onClick={() => toggleTodoState(todoIndex)}>Mark Complete</button>
        <button onClick={() => deleteTodo(todoIndex)}>X</button>
      </TodoButtons>
    </TodoItem>
  )
}


