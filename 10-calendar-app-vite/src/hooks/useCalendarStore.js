import { useDispatch, useSelector } from 'react-redux';
import calendarApi from '../apis/calendarApi';
import { convertEventsToDateEvents } from '../helpers/convertToDateEvents';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      dispatch(onUpdateEvent(calendarEvent));
    } else {
      const { data } = await calendarApi.post('/events', calendarEvent);
      console.log(data);
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.eventSaved.id, user }));
    }
  };

  const startDeletingEvent = () => {
    dispatch(onDeleteEvent());
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get('/events');
      const events = convertEventsToDateEvents(data.events);
      console.log(events);
    } catch (error) {
      console.log('Error cargando eventos');
      console.log(error);
    }
  };

  return {
    // properties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    // methods
    setActiveEvent,
    startDeletingEvent,
    startLoadingEvents,
    startSavingEvent,
  };
};
