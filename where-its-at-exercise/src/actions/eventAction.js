const selectEvent = (event) => {
    return {
        type: 'SELECT_EVENT',
        payload: event
    }
}

export { selectEvent }