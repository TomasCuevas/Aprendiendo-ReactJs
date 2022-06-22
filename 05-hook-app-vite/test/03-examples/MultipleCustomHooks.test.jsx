const { render, screen } = require("@testing-library/react");
const { MultipleCustomHooks } = require("../../src/03-examples/MultipleCustomHooks");

describe('Pruebas en <MultiplesCustomHook />', () => {

  test('debe de mostrar el componente por defecto', () => {
    render( <MultipleCustomHooks /> );

    expect( screen.getByText('Loading...') );
    expect( screen.getByText('Breaking Bad Quotes') );

    const nextButtom = screen.getByRole('button', { name: 'Next Quote' })
    expect( nextButtom.disabled ).toBeTruthy();
  });

})