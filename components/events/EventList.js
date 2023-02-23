import EventItem from "./EventItem";

import styles from './EventList.module.css'

function EventList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventList;
