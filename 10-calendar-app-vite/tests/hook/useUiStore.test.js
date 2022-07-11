/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { renderHook } from '@testing-library/react';
import { useUiStore } from '../../src/hooks/useUiStore';
import { uiSlice } from '../../src/store/ui/uiSlice';

const getMockStore = (initialState) => {
  return configureStore({
    reducer: {
      ui: uiSlice.reducer,
    },
    preloadedState: {
      ui: initialState,
    },
  });
};

describe('Pruebas en el useUiStore', () => {
  test('debe de regresar los valores por defecto', () => {
    const mockStore = getMockStore({ isDateModalOpen: false });

    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>,
    });

    expect(result.current).toEqual({
      isDateModalOpen: false,
      openDateModal: expect.any(Function),
      closeDateModal: expect.any(Function),
    });
  });
});
