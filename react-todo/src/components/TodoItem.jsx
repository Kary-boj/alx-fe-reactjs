// src/components/TodoItem.jsx
import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.text}
      <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>Delete</button>
    </li>
  );
}

export default TodoItem;
