// reducer - säger hur vi ska uppdatera vår redux store

const inititalState = {
    todos: []
}

const todoReducer = (state = inititalState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length,
                        task: action.payload
                    }
                ]
            }
        default:
            return state
    }
}

export default todoReducer;