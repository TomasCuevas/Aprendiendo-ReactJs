import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en el hook useForm', () => {

  const formValues = {
    name: 'Tomas',
    email: 'tomas15@gmail.com'
  }
  
  test('debe de regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(formValues))

    expect( result.current ).toEqual({
      name: formValues.name,
      email: formValues.email,
      formState: formValues,
      onInputChange: expect.any( Function ),
      onResetForm: expect.any( Function )
    })
  });

  test('debe de cambiar el nombre del formulario', () => {
    const { result } = renderHook(() => useForm(formValues));
    const { onInputChange } = result.current;
    const newValue = 'Anselmo';

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue }  })
    })

    expect( result.current.name ).toBe( newValue );
    expect( result.current.formState.name ).toBe( newValue );
  });

  test('debe de resetear el formulario', () => {
    const { result } = renderHook(() => useForm(formValues));
    const { onInputChange, onResetForm } = result.current;
    const newValue = 'Anselmo';

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue }  })
      onResetForm();
    })

    expect( result.current.name ).toBe( formValues.name );
    expect( result.current.formState ).toEqual( formValues );
  });

})