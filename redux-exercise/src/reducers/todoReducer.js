// reducer - säger hur vi ska uppdatera vår redux store

const inititalState = {
    todos: []
}

const todoReducer = (state = inititalState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            const newTodos = [...state.todos];
            newTodos.push({ id: state.todos.length, task: action.payload });

            return {
                ...state,
                todos: newTodos
            }
        case 'REMOVE_TODO':
            const newArray = state.todos.filter((todo) => {
                if (todo.id !== action.payload) {
                    return todo;
                }
            });

            console.log('Uppdaterad array:', newArray);

            return {
                ...state,
                todos: newArray
            }
        default:
            return state
    }
}

export default todoReducer;