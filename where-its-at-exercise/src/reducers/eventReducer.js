const inititalState = {
    event: {}
}

const eventReducer = (state = inititalState, action) => {
    switch(action.type) {
        case 'SELECT_EVENT':
            return {
                ...state,
                event: action.payload
            }
        default:
            return state
    }
}

export default eventReducer;