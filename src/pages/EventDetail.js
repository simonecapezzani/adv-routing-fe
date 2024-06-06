import { json, useRouteLoaderData } from "react-router-dom";
import EventItem from '../components/EventItem';

function EventDetailPage() {
    // get higher level loader
    const data = useRouteLoaderData('event-detail');

    return (
        <EventItem event={data.event} />
    );

}
export default EventDetailPage;

export async function loader({ request, params }) {

    const id = params.eventId;

    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {

        throw json(
            { message: 'Could not fetch events.' },
            { status: 500 }
        );
    } else {
        return response;
    }


}