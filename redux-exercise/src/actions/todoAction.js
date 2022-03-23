// Action - vad ska vi uppdatera i vår store

// type - vad ska vi uppdatera
// payload - den data vi ska lägga till i vår redux store

const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        payload: id
    }
} 

export { addTodo, removeTodo }