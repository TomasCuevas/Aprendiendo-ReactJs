/* eslint-disable no-undef */
import {
  calendarSlice,
  onAddNewEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from '../../../src/store/calendar/calendarSlice';
import { calendarWithEventsState, events, initialState } from '../../__fixtures/calendarStates';

describe('Pruebas en calendarSlice', () => {
  test('debe de retornar el estado por defecto', () => {
    const state = calendarSlice.getInitialState();
    expect(state).toEqual(initialState);
  });

  test('onSetActiveEvent debe activar el evento', () => {
    const state = calendarSlice.reducer(calendarWithEventsState, onSetActiveEvent(events[0]));
    expect(state.activeEvent).toEqual(events[0]);
  });

  test('onAddNewEvent debe crear un nuevo evento', () => {
    const newEvent = {
      id: 3,
      start: new Date('2022-10-11 09:43:00'),
      end: new Date('2022-10-11 11:43:00'),
      title: 'Cumpleaños de Roberto Perez',
      note: 'Alguna nota para Roberto.',
    };
    const state = calendarSlice.reducer(calendarWithEventsState, onAddNewEvent(newEvent));

    expect(state.events).toEqual([...events, newEvent]);
  });

  test('onUpdateEvent debe de actualizar el evento', () => {
    const updatedEvent = {
      id: 1,
      start: new Date('2022-10-11 13:43:00'),
      end: new Date('2022-10-11 17:43:00'),
      title: 'Cumpleaños de Roberto Perez',
      note: 'Alguna nota para Robertoooo!!!.',
    };
    const state = calendarSlice.reducer(calendarWithEventsState, onUpdateEvent(updatedEvent));

    expect(state.events).toContain(updatedEvent);
  });
});
