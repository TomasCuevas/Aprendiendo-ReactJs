export const events = [
  {
    id: 1,
    start: new Date('2022-7-11 09:43:00'),
    end: new Date('2022-7-11 11:43:00'),
    title: 'Cumpleaños de Pancracio Lopez',
    note: 'Alguna nota.',
  },
  {
    id: 2,
    start: new Date('2022-7-15 15:43:00'),
    end: new Date('2022-7-15 17:43:00'),
    title: 'Cumpleaños de Mamerta Lopez',
    note: 'Alguna nota.',
  },
];

export const initialState = {
  isLoading: true,
  events: [],
  activeEvent: null,
};

export const calendarWithEventsState = {
  isLoading: false,
  events: [...events],
  activeEvent: null,
};

export const calendarWithActiveEventState = {
  isLoading: false,
  events: [...events],
  activeEvent: { ...events[0] },
};
