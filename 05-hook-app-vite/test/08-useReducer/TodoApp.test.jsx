import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/hooks/useTodo';

jest.mock('../../src/hooks/useTodo');

describe('Pruebas en el componente <TodoApp />', () => {

  useTodo.mockReturnValue({
    todos: [
      { id: 1, describe: 'Todo #1', done: false },
      { id: 2, describe: 'Todo #2', done: false },
      { id: 3, describe: 'Todo #3', done: true },
    ],
    onNewTodo: jest.fn,
    onDeleteTodo: jest.fn,
    onToggleTodo: jest.fn,
    todosCount: 3,
    pendingTodosCounter: 2
  });
  
  test('debe de mostrar el componente correctamente', () => {
    render( <TodoApp /> );

    expect( screen.getByText('Todo #1') ).toBeTruthy();
    expect( screen.getByText('Todo #2') ).toBeTruthy();
    expect( screen.getByText('Todo #3') ).toBeTruthy();
    expect( screen.getByLabelText('inputAdd') ).toBeTruthy();
  });
  
})