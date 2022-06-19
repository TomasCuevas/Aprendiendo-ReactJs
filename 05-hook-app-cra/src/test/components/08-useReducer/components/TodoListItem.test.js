import { shallow } from "enzyme";

import { TodoListItem } from "../../../../components/08-useReducer/components/TodoListItem/TodoListItem";
import { demoTodos } from '../../../fixtures/demoTodos';

describe('Pruebas en <TodoListItem />', () => {

  const handleRemoveTodo = jest.fn();
  const handleToggleTodo = jest.fn();
  
  const wrapper = shallow(
    <TodoListItem 
      todo={ demoTodos[0] } 
      index={ demoTodos[0].id } 
      handleRemoveTodo={ handleRemoveTodo } 
      handleToggleTodo={ handleToggleTodo }
    />
  ) 

  test('debe de mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();  
  });

  test('debe de llamar la funcion handleRemove', () => {
    wrapper.find('button').simulate('click');
    expect(handleRemoveTodo).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('debe de llamar la funcion handleToggle', () => {
    wrapper.find('p').simulate('click');
    expect(handleToggleTodo).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('debe de mostrar el texto correctamente', () => {
    expect( wrapper.find('p').text() ).toBe(`${demoTodos[0].id + 1}. ${demoTodos[0].description}`);
  });

  test('debe de tener la clase "complete" si TODO.ID = true', () => {
    const todo = demoTodos[0];
    todo.done = true;
    
    const wrapper = shallow(
      <TodoListItem 
        todo={ todo } 
        index={ todo.id } 
        handleRemoveTodo={ handleRemoveTodo } 
        handleToggleTodo={ handleToggleTodo }
      />
    ) 
    
    expect( wrapper.find('p').hasClass('complete') ).toBe(true);
  });
})