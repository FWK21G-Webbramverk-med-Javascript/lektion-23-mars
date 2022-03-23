import events from '../assets/events.json';

import Event from '../components/Event'; 

function EventList() {

    const eventItems = events.map((event) => {
        return <Event info={ event } key={ event.name } />
    });

    return (
        <section>
            <h2>Events</h2>
            <article>
                { eventItems }
            </article>
        </section>
    )
}

export default EventList;