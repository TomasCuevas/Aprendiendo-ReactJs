import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
  
  // test('debe de hacer match con el snapshot', () => {
  //   const title = 'Hola Mundo';
  //   const { container } = render(<FirstApp title={ title } />);

  //   expect( container ).toMatchSnapshot();
  // });

  test('debe de mostrar el titulo en un h1', () => {
    const title = 'Hola Mundo';
    const { container, getByText, getByTestId } = render(<FirstApp title={ title } />);
    
    expect( getByText(title) ).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect( h1.innerHTML ).toContain( title );

    expect( getByTestId('test-title').innerHTML ).toContain( title );
  });

  test('debe de mostrar el subtitulo enviado por props', () => {
    const title = 'Hola Mundo';
    const subtitle = 'Subtitulo';
    const { getByText, getAllByText } = render(
      <FirstApp 
        title={ title } 
        subtitle={ subtitle } 
      />
    );

    expect( getByText(subtitle) ).toBeTruthy();
    // expect( getAllByText.length ).toBe(2);
  })

});
