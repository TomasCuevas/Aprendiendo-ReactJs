import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import calendarApi from '../apis/calendarApi';
import { convertEventsToDateEvents } from '../helpers/convertToDateEvents';
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
  onLoadingEvents,
} from '../store';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    try {
      if (calendarEvent._id) {
        await calendarApi.put(`/events/${calendarEvent._id}`, calendarEvent);
        dispatch(onUpdateEvent({ ...calendarEvent, user }));
        return;
      }

      const { data } = await calendarApi.post('/events', calendarEvent);
      console.log(data);
      dispatch(onAddNewEvent({ ...calendarEvent, _id: data.eventSaved._id, user }));
    } catch (error) {
      console.log(error);
      Swal.fire('Error al guardar la nota.', error.response.data.msg, 'error');
    }
  };

  const startDeletingEvent = async () => {
    try {
      await calendarApi.delete(`/events/${activeEvent._id}`);
      Swal.fire('Nota eliminada.', '', 'success');
      dispatch(onDeleteEvent());
    } catch (error) {
      console.log(error);
      Swal.fire('Error al eliminar la nota.', error.response.data.msg, 'error');
    }
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get('/events');
      const events = convertEventsToDateEvents(data.events);
      dispatch(onLoadingEvents(events));
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
