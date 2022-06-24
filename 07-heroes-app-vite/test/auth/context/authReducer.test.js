import { authReducer } from "../../../src/auth";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en el authReducer', () => {

  const user = { id: '123', name: 'Tomas Cuevas' };
  const stateUnauthenticated = { logged: false };
  const stateAuthenticated = { logged: true, user }
  
  test('debe de retornar el estado por defecto', () => {
    const reducerReturn = authReducer( stateUnauthenticated );
    expect( reducerReturn ).toEqual( stateUnauthenticated );
  });

  test('debe de (login) llamar el login, autenticar y establecer el user', () => {
    const action = { type: types.login, payload: user };
    const reducerReturn = authReducer( stateUnauthenticated, action );

    expect( reducerReturn.logged ).toBeTruthy();
    expect( reducerReturn.user ).toEqual( user );
  });

  test('debe de (logout) borrar el name del usuario y establecer el logged en false', () => {
    const action = { type: types.logout };
    const reducerReturn = authReducer( stateAuthenticated, action );

    expect( reducerReturn.logged ).toBeFalsy();
    expect( reducerReturn.user ).toBe( undefined );
  });

})