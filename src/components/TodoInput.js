import React, { useState } from 'react'
import styled from 'styled-components'

const InputBox = styled.input`
  margin-top: 3%;
  width: 100%;
  height: 25px;
  padding: 3%;
  color: whitesmoke;
  background-color: #202020;
  border: 1px solid #202020;
  box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.4);
`;

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');

  //Adds a new todo 
  const handleNewTodo = e => {
    e.preventDefault();
    if (!text) {
      return null;
    } else {
      addTodo(text);
    }

    //Reset input box
    setText('');
  }

  return (
    <form onSubmit={handleNewTodo}>
      <InputBox type="text" value={text} onChange={e => setText(e.target.value)} placeholder="New todo item..."></InputBox>
    </form>
  );
}

export default TodoInput;