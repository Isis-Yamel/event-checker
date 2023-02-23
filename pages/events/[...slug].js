import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/button";
import ErrorAlert from '../../components/ui/error-alert';

function EventFilter() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading ...</p>;
  }

  const year = filterData[0];
  const month = filterData[1];
  const numYear = +year;
  const numMonth = +month;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Invalid filter, please check your selection!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">All events</Button>
        </div>
      </>
    );
  }

  const events = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!events || events.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p className="center">No events found for the provided date</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">All events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </>
  );
}

export default EventFilter;
