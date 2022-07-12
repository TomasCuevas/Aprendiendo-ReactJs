/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import { FabAddDelete } from '../../../calendar/components/FabAddDelete';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { useCalendarStore } from '../../../hooks';

jest.mock('../../../hooks/useCalendarStore.js');

describe('Pruebas en el componente <FabAddDelete />', () => {
  test('debe de mostrar el boton si hay un evento activo', () => {
    useCalendarStore.mockReturnValue({
      hasEventSelected: true,
    });

    render(
      <Provider store={store}>
        <FabAddDelete />
      </Provider>,
    );

    expect(screen.getByLabelText('btn-delete')).toBeTruthy();
  });

  test('debe de mostrar el boton si hay un evento activo', () => {
    const fn = jest.fn();

    useCalendarStore.mockReturnValue({
      hasEventSelected: true,
      startDeletingEvent: fn,
    });

    render(
      <Provider store={store}>
        <FabAddDelete />
      </Provider>,
    );

    const btn = screen.getByLabelText('btn-delete');
    fireEvent.click(btn);
    expect(fn).toHaveBeenCalled();
  });
});
