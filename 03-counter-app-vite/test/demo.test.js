test('Esta prueba no debe fallar', () => {

  if (0 === 0) throw new Error('No se puede dividir entre 0');
})