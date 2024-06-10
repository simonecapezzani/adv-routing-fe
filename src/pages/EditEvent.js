import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm';

function EditEventPage() {
    // get higher level loader
    const data = useRouteLoaderData('event-detail');
    const event = data.event;

    return (
        <>
            <EventForm event={event} method='patch'/>
        </>
    );

}
export default EditEventPage;