import { render, screen, fireEvent } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage"

describe('Pruebas en el componente <LoginPage />', () => {

  test('debe de mostrar el componente SIN el usuario', () => {
    render( 
      <UserContext.Provider value={{ user: null, setUser: jest.fn() }}>
        <LoginPage />
      </UserContext.Provider> 
    );

    const preElement = screen.getByLabelText('pre-login');
    expect( preElement.innerHTML ).toBe( 'null' );
  });

  test('debe de llamar el setUser al hacer click sobre el boton', () => {
    const setUserMock = jest.fn();
    
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    )

    const buttomElement = screen.getByLabelText('login-buttom');
    fireEvent.click( buttomElement );
    
    expect( setUserMock ).toHaveBeenCalledWith( { id: 123, name: 'Tomas Cuevas', email: 'tomascuevas15@gmail.com' } );
  });

})