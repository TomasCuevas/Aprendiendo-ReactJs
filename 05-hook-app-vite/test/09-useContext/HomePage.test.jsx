import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';

describe('Pruebas en el componente <HomePage />', () => {

  const user = {
    id: 1,
    name: 'Tomas'
  }
  
  test('debe de mostrar el componente SIN el usuario', () => {
    render(
      <UserContext.Provider value={{
        user: null
      }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preElement = screen.getByLabelText('pre');
    expect( preElement.innerHTML ).toBe( 'null' );
  });

  test('debe de mostrar el componente CON el usuario', () => {
    render(
      <UserContext.Provider value={{
        user: user
      }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preElement = screen.getByLabelText('pre');
    expect( preElement.innerHTML ).toContain( user.id.toString() );
    expect( preElement.innerHTML ).toContain( user.name.toString() );
  });

})