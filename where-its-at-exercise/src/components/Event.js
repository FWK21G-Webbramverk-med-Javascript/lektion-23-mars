import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectEvent } from '../actions/eventAction';

function Event(props) {
    const { info } = props;
    const { name, price, where } = info;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleClick() {
        dispatch(selectEvent(info));
        navigate('/buy')
    }

    return (
        <section>
            <p onClick={ handleClick }>{ name } - { price } kr - { where }</p>
        </section>
    )
}

export default Event;