// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component', () => {

  // Step 1: Initial Render Test
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    
    // Check if the initial todos are displayed correctly
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn Jest/i)).toBeInTheDocument();
  });

  // Step 2: Test Adding Todos
  test('adds a new todo item', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const button = screen.getByText(/Add Todo/i);

    // Simulate typing a new todo and clicking the "Add Todo" button
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    // Verify if the new todo has been added
    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  // Step 3: Test Toggling Todos
  test('toggles todo completion status', () => {
    render(<TodoList />);
    
    // Find the "Learn React" todo
    const todo = screen.getByText(/Learn React/i);

    // Toggle the todo (mark as completed)
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');

    // Toggle the todo again (mark as not completed)
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: none');
  });

  // Step 4: Test Deleting Todos
  test('deletes a todo item', () => {
    render(<TodoList />);
    
    // Find the delete button next to "Learn React" todo
    const deleteButton = screen.getByText(/Delete/i);

    // Click the delete button
    fireEvent.click(deleteButton);

    // Verify the todo has been deleted
    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });

});

