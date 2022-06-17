import { render } from "@testing-library/react";
import { GifCard } from "../../../src/components/GifCard/GifCard";

describe('Pruebas en <GifCard />', () => {

  const title = 'Titulo del GIF';
  const url = 'https://urldelgif.com';
  
  test('hacer snapshot del componente', () => {
    const { container } = render(<GifCard title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  
})