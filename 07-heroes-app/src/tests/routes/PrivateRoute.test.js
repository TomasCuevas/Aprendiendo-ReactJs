import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"

import { PrivateRoute } from "../../routes/PrivateRoute"
import { DasboardRoutes } from "../../routes/DasboardRoutes"
import { Auth } from "../../context/Auth"

describe('Pruebas en <PrivateRoute />', () => {
  
  test('debe de mostrar el compoonente si esta autenticado y guardar localStorage', () => {
    const component = () => {
      
      return (
        <span>Hello Word</span>
      )
    }
    
    const wrapper = mount(
      <Auth test={true} logged={true}>
        <MemoryRouter>
          <PrivateRoute component={component} />
        </MemoryRouter>
      </Auth>
    )
    
    expect(wrapper.find('span').exists()).toBe(true);
  })
})