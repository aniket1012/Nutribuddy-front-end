const defaultState = {
    count: 0,
}

function reducer(prevState = defaultState, action) {
    console.log('ACTION', action)
    // whatever is returned from reducer becomes state  
    //called on initialization to initialize state
    switch (action.type) {
        case 'LIKE':
            return {
                ...prevState, count: prevState.count + 1
            }


            default:
                return prevState

    }
}

export default reducer

