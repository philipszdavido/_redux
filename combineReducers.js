/* This function takes an reducers as arg, then combine 
the reducers into a single reducer function */
export function combineReducers(reducers) {

    // reducers will be in object, so we test for Object
    if (typeof reducers != 'object') {
        throw new Error('Reducers must be Object')
    }
    let keys = Object.keys(reducers)

    /* We check to make sure all reduers provided in the 
    object reducers are truly functions.
    */
    let finalReducers = {}
    for (var index = 0; index < keys.length; index++) {

        let reducer = reducers[key[index]]
        if (typeof reducer != 'function') {
            throw new Error('Reducers must all be function')
        }
        finalReducers[key] = reducer
    }
    return function combination(state = {}, action) {
        let finalReducersKeys = Object.keys(finalReducers)
        for (var index = 0; index < finalReducersKeys.length; index++) {
            let reducer = finalReducers[finalReducersKeys[index]]
            let nextState = reducer(, action)
        }
    }
}