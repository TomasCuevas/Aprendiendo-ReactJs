import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Pruebas en "authReducer"', () => {

  test('debe de retornar el estado por defecto', () => {
    const action = {
      type: ''
    }
    const reducerReturn = authReducer(undefined, action);

    expect(reducerReturn).toEqual({logged: false});
  });

  test('debe de autenticar y colocar el name del usuario', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Tomas'
      }
    }
    const state = authReducer(undefined, action);

    expect(state).toEqual({
      name: 'Tomas',
      logged: true
    });
  });

  test('debe de borrar el name del usuario y logged en false', () => {
    const action = {
      type: types.logout
    };
    const state = authReducer({logged: true, name: 'Tomas'}, action);

    expect(state).toEqual({
      logged: false
    });
  });
})