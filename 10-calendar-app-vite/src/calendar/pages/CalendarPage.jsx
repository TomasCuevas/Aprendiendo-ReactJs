import { Calendar } from 'react-big-calendar';
import { addHours } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar, CalendarEventBox } from '../';

import { localizer, getMessagesES } from '../../helpers';

const events = [
  {
    title: 'Cumpleaños del Jefe',
    notes: 'Hay que comprar pastel',
    start: new Date(),
    end: addHours(new Date(), 2),
    user: {
      id: '123',
      name: 'Tomas',
    },
  },
];

export const CalendarPage = () => {
  const eventStylesGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    };

    return {
      style,
    };
  };

  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStylesGetter}
        components={{
          event: CalendarEventBox,
        }}
      />
    </>
  );
};
