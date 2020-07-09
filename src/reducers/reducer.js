const defaultState = {
    count: 0,
    // gender: null,
    // age: null,
    // weight: null,
    // height: null,
    // exerciseLevel: null,
    // goal: null,

    //     biometrics: {
    //         available: false,
    //         bmr: null,
    //         tdee: null,
    //         calories: null,
    //         protein: null,
    //         carbohydrates: null,
    //         fat: null,
    //     },

    //     credentialError: false
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

