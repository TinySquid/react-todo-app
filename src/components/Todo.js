import React from 'react'
import styled from 'styled-components';

import { device } from '../breakpoints';

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.sm} {
    flex-flow: column wrap;

    p {
      margin-top: 3%;
    }
  }
  @media ${device.md} {
    flex-flow: row nowrap;

    p {
      margin-top: 0;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;

  @media ${device.md} {
    display: block;
    width: inherit;
  }
`;

const TodoButton = styled.button`
  color: whitesmoke;
  background-color: #135d8e;
  border: 1px solid black;
  height: 35px;
  margin-top: 3.5%;
  margin-right: 5px;

  :hover {
    border: 1px solid whitesmoke;
    background-color: #2f6f9f;
  }

  :active {
    border: 1px solid whitesmoke;
    background-color: #034d7e;
  }

  @media ${device.sm} {
    width: ${props => props.primary ? '90%' : '10%'};
    margin-top: 5%;
  }
  @media ${device.md} {
    width: inherit;
    margin-top: 3.5%;
  }
`;

const Todo = ({ todo, todoIndex, toggleTodoState, deleteTodo }) => {
  return (
    <TodoItem>
      <p style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>{todo.content}</p>
      <ButtonContainer>
        <TodoButton primary onClick={() => toggleTodoState(todoIndex)}>{todo.isDone ? 'Mark Incomplete' : 'Mark Complete'}</TodoButton>
        <TodoButton onClick={() => deleteTodo(todoIndex)}>X</TodoButton>
      </ButtonContainer>
    </TodoItem>
  );
}

export default Todo;

