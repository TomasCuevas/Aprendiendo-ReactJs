import { mount } from "enzyme"

import { UserContext } from "../../../../components/09-useContext/context/UserContext";
import { LoginScreen } from "../../../../components/09-useContext/screen/LoginScreen/LoginScreen";

describe('Pruebas en <LoginScreen />', () => {

  const setUser = jest.fn();
  
  const wrapper = mount(
    <UserContext.Provider value={{
      setUser
    }}>
      <LoginScreen />
    </UserContext.Provider>
  );
  
  test('debe mostrarse correctamenete', () => {
    expect(wrapper).toMatchSnapshot();    
  });

  test('debe llamar el setUser con los argumentos esperados', () => {
    wrapper.find('button').simulate('click');

    expect(setUser).toHaveBeenCalledTimes(1);
    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      name: 'Prueba1',
      email: 'prueba1@test.com'
    });
  });
})