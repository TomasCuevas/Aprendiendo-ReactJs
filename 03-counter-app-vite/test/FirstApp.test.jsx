import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
  
  test('debe de hacer match con el snapshot', () => {
    const title = 'Hola Mundo';
    const { container } = render(<FirstApp title={ title } />);

    expect( container ).toMatchSnapshot();
  });

  test('debe de mostrar el titulo en un h1', () => {
    const title = 'Hola Mundo';
    const { container, getByText } = render(<FirstApp title={ title } />);
    const h1 = container.querySelector('h1');

    expect( getByText(title) ).toBeTruthy();
    expect( h1.innerHTML ).toContain(title);
  });

});
