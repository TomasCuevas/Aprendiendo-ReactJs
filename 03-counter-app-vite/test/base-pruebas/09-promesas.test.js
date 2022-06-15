import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas.js', () => {
  
  test('getHeroeByIdAsync debe de retornar un heroe', (done) => {
    const id = 1;
    
    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(typeof hero).toBe('object');
        done();
      })
  });

  test('getHeroeByIdAsync debe de retornar un error', (done) => {
    const id = 10;
    
    getHeroeByIdAsync(id)
      .catch((err) => {
        expect(err).toBe(`No se pudo encontrar el héroe ${id}`);
        done();
      })
  });

});
