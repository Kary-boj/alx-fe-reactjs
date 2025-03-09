// src/__tests__/AddTodoForm.test.js
import { render, fireEvent, screen } from '@testing-library/react';
import AddTodoForm from '../components/AddTodoForm';

describe('AddTodoForm', () => {
  test('renders input and button', () => {
    render(<AddTodoForm addTodo={() => {}} />);
    expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  test('adds a todo item when the form is submitted', () => {
    const addTodoMock = jest.fn();
    render(<AddTodoForm addTodo={addTodoMock} />);
    
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
      target: { value: 'New Todo' },
    });
    fireEvent.click(screen.getByText('Add Todo'));
    
    expect(addTodoMock).toHaveBeenCalledWith('New Todo');
  });

  test('does not add a todo item if input is empty', () => {
    const addTodoMock = jest.fn();
    render(<AddTodoForm addTodo={addTodoMock} />);
    
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByText('Add Todo'));
    
    expect(addTodoMock).not.toHaveBeenCalled();
  });
});
