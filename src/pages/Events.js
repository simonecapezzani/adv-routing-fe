import { Link } from "react-router-dom";

const EVENTS = [
    {
        id: 'e1',
        title: 'First event',
    },
    {
        id: 'e2',
        title: 'Second event',
    },
    {
        id: 'e3',
        title: 'Third event',
    }
]


function EventsPage() {

    return (
        <>
            <h1>EventsPage</h1>
            <ul>
                {EVENTS.map((event) => {
                    return (
                        <li key={event.id}>
                            <Link to={`/events/${event.id}`}>
                                {event.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );

}
export default EventsPage;