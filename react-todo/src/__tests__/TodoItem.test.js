// src/__tests__/TodoItem.test.js
import { render, fireEvent, screen } from '@testing-library/react';
import TodoItem from '../components/TodoItem';

describe('TodoItem', () => {
  const todo = { id: 1, text: 'Learn React', completed: false };
  const toggleTodoMock = jest.fn();
  const deleteTodoMock = jest.fn();

  test('renders todo item with correct text', () => {
    render(<TodoItem todo={todo} toggleTodo={toggleTodoMock} deleteTodo={deleteTodoMock} />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
  });

  test('toggles todo completion when clicked', () => {
    render(<TodoItem todo={todo} toggleTodo={toggleTodoMock} deleteTodo={deleteTodoMock} />);
    
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);
    expect(toggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test('does not toggle when clicked on delete button', () => {
    render(<TodoItem todo={todo} toggleTodo={toggleTodoMock} deleteTodo={deleteTodoMock} />);
    
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);
    expect(deleteTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test('calls deleteTodo function when delete button is clicked', () => {
    render(<TodoItem todo={todo} toggleTodo={toggleTodoMock} deleteTodo={deleteTodoMock} />);
    
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);
    expect(deleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
