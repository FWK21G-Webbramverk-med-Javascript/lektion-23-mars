import { useSelector } from 'react-redux';

function Ticket() {
    const event = useSelector((state) => { return state.event });

    return (
        <section>
            <h2>Biljett</h2>
            <p>{ event.name }</p>
            <p>{ event.price } kr</p>
            <p>{ event.where }</p>
        </section>
    )
}

export default Ticket;