import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {

    const { events } = useLoaderData();

    // if (data.isError) {
    //     return <p>{data.message}</p>
    // }

    return (
        <Suspense fallback={
            <p style={{ textAlign: 'center' }}>
                Loading...
            </p>
        }>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    );
}

export default EventsPage;

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // it's better to throw responses because you can use the extra "status" field
        // throw new Response(
        //     JSON.stringify({ message: 'Could not fetch events.' }),
        //     { status: 500 }
        // );

        // You can use the json import from react-router-dom
        return json(
            { message: 'Could not fetch events.' },
            { status: 500 }
        );
    } else {
        const resData = await response.json();
        return resData.events;
    }

}

export function loader() {
    return defer({
        events: loadEvents()
    });
};