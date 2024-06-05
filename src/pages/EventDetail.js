import { useParams } from "react-router-dom";

function EventDetailPage() {

    const params = useParams();

    return (
        <>
            <h1>EventDetailPage</h1>
            <h2>Event id: {params.eventId}</h2>
        </>
    );

}
export default EventDetailPage;