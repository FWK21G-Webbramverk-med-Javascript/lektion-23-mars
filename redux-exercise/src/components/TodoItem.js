import './TodoItem.css';
import { useDispatch } from 'react-redux';

import { removeTodo } from '../actions/todoAction';

function TodoItem(props) {
    const dispatch = useDispatch();
    const { task, id } = props;

    function handleClick() {
        dispatch(removeTodo(id));
    }

    return (
        <li onClick={ handleClick }>{ task }</li>
    )
}

export default TodoItem;