import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onSetActiveEvent } from '../store';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      // TODO: Lllegar al backend
    } else {
      calendarEvent._id = new Date().getTime();
      dispatch(onAddNewEvent(calendarEvent));
    }
  };

  return {
    // properties
    events,
    activeEvent,

    // methods
    setActiveEvent,
    startSavingEvent,
  };
};
