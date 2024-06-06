import { useLoaderData, json } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {

    const data = useLoaderData();

    if (data.isError) {
        return <p>{data.message}</p>
    }

    const events = data.events;

    return (
        <>
            <EventsList events={events} />
        </>
    );
}

export default EventsPage;

export async function loader() {
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
        return response;
    }

};