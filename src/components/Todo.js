import React from 'react'

export default function Todo({ todo, todoIndex, toggleTodoState, deleteTodo }) {
  return (
    <div className="todo">
      {todo.content}
      <div className="todo-buttons">
        <button>Mark Complete</button>
        <button>X</button>
      </div>
    </div>
  )
}
