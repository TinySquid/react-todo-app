import React, { useState } from 'react'
import styled from 'styled-components'

const InputBox = styled.input`
  margin-top: 3%;
  width: 100%;
  height: 25px;
`

export default function TodoInput({ addTodo }) {
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
  )
}
