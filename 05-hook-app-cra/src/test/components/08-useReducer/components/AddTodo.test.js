import { shallow } from "enzyme";
import { AddTodo } from "../../../../components/08-useReducer/components/AddTodo/AddTodo";

describe('Pruebas en <AddTodo />', () => {

  const handleAddTodo = jest.fn();
  
  const wrapper = shallow(
    <AddTodo 
      handleAddTodo={ handleAddTodo }
    />
  )
  
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('no debe de llamarse la funcion handleAddTodo', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault(){} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('debe de llamarse las funciones handleAddTodo y reset', () => {
    const value = 'Aprender NodeJs';
    const inputForm = wrapper.find('input');
    inputForm.simulate('change', { 
      target: {
          value: value,
          name: 'description'
        } 
      });

    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault(){} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      description: value,
      done: false
    })
    
    expect(inputForm.prop('value')).toBe('');
  });
})