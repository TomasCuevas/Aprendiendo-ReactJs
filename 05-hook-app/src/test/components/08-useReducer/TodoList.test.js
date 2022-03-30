import { shallow } from "enzyme";

import { TodoList } from "../../../components/08-useReducer/components/TodoList/TodoList";
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas en <TodoList />', () => {
  const handleRemoveTodo = jest.fn();
  const handleToggleTodo = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={ demoTodos }
      handleRemoveTodo={ handleRemoveTodo }
      handleToggleTodo={ handleToggleTodo }
    />
  );
  
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test(`debe de tener ${demoTodos.length} <TodoListItem />`, () => {
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
  });

  test('las props de <TodoListItem /> deben ser las esperadas', () => {
    const TodoListItem = wrapper.find('TodoListItem').at(0);
    
    expect(TodoListItem.prop('todo')).toEqual(demoTodos[0]);
    expect(TodoListItem.prop('handleRemoveTodo')).toEqual(expect.any(Function));
    expect(TodoListItem.prop('handleToggleTodo')).toEqual(expect.any(Function));
  })
})