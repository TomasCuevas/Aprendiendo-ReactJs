import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"

import { PrivateRoute } from "../../routes/PrivateRoute"
import { Auth } from "../../context/Auth"

describe('Pruebas en <PrivateRoute />', () => {
  
  Storage.prototype.setItem = jest.fn();
  
  test('debe de mostrar el componente si esta autenticado y guardar localStorage', () => {
    const component = () => {
      
      return (
        <span>Hello Word</span>
      )
    };
    
    const wrapper = mount(
      <Auth>
        <MemoryRouter>
          <PrivateRoute component={component} logged={true} />
        </MemoryRouter>
      </Auth>
    );
    
    expect(wrapper.find('span').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
    expect(localStorage.setItem).toHaveBeenCalledWith('authState', '{\"logged\":false}');
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test('debe de bloquear el componente si no esta autenticado', () => {
    const component = () => {
      
      return (
        <span>Hello Word</span>
      )
    };
    
    const wrapper = mount(
      <Auth test={true}>
        <MemoryRouter>
          <PrivateRoute component={component} logged={false} />
        </MemoryRouter>
      </Auth>
    );
    
    expect(wrapper.find('span').exists()).toBe(false);
  });
})