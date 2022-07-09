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
        if (event._id === payload._id) return payload;
        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter((event) => event._id !== state.activeEvent._id);
        state.activeEvent = null;
      }
    },
    onLoadingEvents: (state, { payload = [] }) => {
      // state.events = payload;
      payload.forEach((event) => {
        const exist = state.events.some((dbEvent) => dbEvent._id === event._id);
        if (!exist) state.events.push(event);
      });
      state.isLoading = false;
    },
    onClearCalendar: (state) => {
      state.activeEvent = null;
      state.events = [];
      state.isLoading = true;
    },
  },
});

export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  onLoadingEvents,
  onClearCalendar,
} = calendarSlice.actions;
