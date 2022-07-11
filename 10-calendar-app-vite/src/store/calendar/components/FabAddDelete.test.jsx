/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { FabAddDelete } from '../../../calendar/components/FabAddDelete';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('Pruebas en el componente <FabAddDelete />', () => {
  test('debe de mostrar el componente correctamente', () => {
    render(
      <Provider store={store}>
        <FabAddDelete />
      </Provider>,
    );

    screen.debug();
  });
});
