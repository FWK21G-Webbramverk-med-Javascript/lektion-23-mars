import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function BuyTicket() {
    const event = useSelector((state) => { return state.event });
    const navigate = useNavigate();

    function buyTicket() {
        navigate('/ticket');
    }

    return (
        <section>
            <h2>Köp biljett</h2>
            <p>{ event.name }</p>
            <p>{ event.price } kr</p>
            <p>{ event.where }</p>
            <button onClick={ buyTicket }>Köp biljett</button>
        </section>
    )
}

export default BuyTicket;