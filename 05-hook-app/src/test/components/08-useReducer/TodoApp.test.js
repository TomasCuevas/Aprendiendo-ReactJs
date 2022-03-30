import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";

import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoApp />', () => {

  Storage.prototype.setItem = jest.fn();
  
  const wrapper = shallow(
    <TodoApp />
  )
  
  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test(`debe de agregar ${demoTodos.length} TODO/s`, () => {
    const wrapper = mount( <TodoApp /> );

    act(() => {
      wrapper.find('AddTodo').prop('handleAddTodo')( demoTodos[0] );
      wrapper.find('AddTodo').prop('handleAddTodo')( demoTodos[1] );
    })

    expect(wrapper.find('h1').text()).toBe('ToDo App ( 2 )');
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test('debe de borrar un TODO', () => {
    act(() => {
      wrapper.find('AddTodo').prop('handleAddTodo')( demoTodos[0] );
      wrapper.find('TodoList').prop('handleRemoveTodo')( demoTodos[0].id );
    })

    expect(wrapper.find('h1').text()).toBe('ToDo App ( 0 )');
  });
})