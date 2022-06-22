const { render, screen } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");
const { MainApp } = require("../../src/09-useContext/MainApp");

describe('Prueba en el componente <MainApp />', () => {

  test('debe de mostrar el HomePage', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect( screen.getByText('HomePage') ).toBeTruthy();
  });

  test('debe de mostrar el LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );

    expect( screen.getByText('LoginPage') ).toBeTruthy();
  });

})