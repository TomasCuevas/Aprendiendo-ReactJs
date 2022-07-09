import { createSlice } from '@reduxjs/toolkit';

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    activeEvent: null,
    events: [],
    isLoading: true,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event.id === payload.id) return payload;
        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter((event) => event.id !== state.activeEvent.id);
        state.activeEvent = null;
      }
    },
    onLoadingEvents: (state, { payload = [] }) => {
      // state.events = payload;
      payload.forEach((event) => {
        const exist = state.events.some((dbEvent) => dbEvent.id === event.id);
        if (!exist) state.events.push(event);
      });
      state.isLoading = false;
    },
  },
});

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent, onLoadingEvents } =
  calendarSlice.actions;
