const { render, screen } = require("@testing-library/react");
const { TodoItem } = require("../../src/08-useReducer/TodoItem");

describe('Pruebas en el componente <TodoItem />', () => {

  const todo = {
    id: 1,
    describe: 'Recolectar gema del alma',
    done: false
  }

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach( () => jest.clearAllMocks() );
  
  test('debe de mostrar el ToDo pendiente de completar', () => {
    render( 
      <TodoItem 
        todo={ todo } 
        onDeleteTodo={ onDeleteTodoMock } 
        onToggleTodo={ onToggleTodoMock } 
      />
    );

    const liElement = screen.getByRole('listitem');
    expect( liElement.className ).toBe( 'list-group-item d-flex justify-content-between' )

    const spanElement = screen.getByLabelText('span');
    expect( spanElement.className ).toContain( 'align-self-center' ); 
    expect( spanElement.className ).not.toContain( 'text-decoration-line-through' ); 
  });
})