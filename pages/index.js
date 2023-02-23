import Head from "next/head";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "@/components/events/EventList";

function HomePage() {
  const featureEvents = getFeaturedEvents();
  return (
    <>
      <Head>
        <title>Event App</title>
        <meta name="description" content="Event detail app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <EventList items={featureEvents} />
      </main>
    </>
  );
}

export default HomePage;
