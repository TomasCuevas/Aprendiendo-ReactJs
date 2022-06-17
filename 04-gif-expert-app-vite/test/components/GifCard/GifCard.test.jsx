import { render, screen } from "@testing-library/react";
import { GifCard } from "../../../src/components/GifCard/GifCard";

describe('Pruebas en <GifCard />', () => {

  const title = 'Titulo del GIF';
  const url = 'https://urldelgif.com';
  
  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<GifCard title={title} url={url} />);
    expect( container ).toMatchSnapshot();
  });

  test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifCard title={title} url={url} />);
    
    // expect( screen.getByRole('img').src ).toBe( `${url}/` );
    // expect( screen.getByRole('img').alt ).toBe( title );

    const { src, alt } = screen.getByRole('img');

    expect( src ).toBe( `${url}/` );
    expect( alt ).toBe( title );
  });

  test('debe de mostrar el titulo con el texto indicado', () => {
    render(<GifCard title={title} url={url} />);
    expect( screen.getByText(title) ).toBeTruthy();
  })

})