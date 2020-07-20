const defaultState = {
    count: 0,
    user: null,
    myMeals: null
    
}

function reducer(prevState = defaultState, action) {
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

