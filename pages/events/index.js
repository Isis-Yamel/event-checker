import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';

function Events() {
  const allEvents = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const path = `/events/${year}/${month}`
    router.push(path)
  }

  return (
    <>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={allEvents}/>
    </>
  )
}

export default Events;
