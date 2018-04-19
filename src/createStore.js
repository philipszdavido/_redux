export function createStore(reducer, preLoadedState) {

    let currentReducer = reducer
    let currentState = preLoadedState ? preLoadedState : null
    let listeners = []

    // we make sure the reducer is a function
    if (typeof reducer != 'function') {
        throw new Error('reducer must be a function')
    }

    /** This function returns the current state of our app */
    function getState() {
        return currentState
    }

    function subscribe(listener) {

        /* Since our listeners are of type array, 
        we simply push the arg listener to the array.
        */
        listeners.push(listener)

        /** we return an unsubscribe function back to the
         * user so they can remove their listener when they
         * want
         */
        return function unsubscribe() {
            /**
             * we are still in the same context, we can still acees
             * the listener arg. To unsbscribe, we use the splice method
             * to remove the listener from the listeners array.
             */
            listeners.splice(listeners.indexOf(listener), 1)
        }
    }

    function dispatch(action) {
        let state = currentState
        let _action = action
        let _state = currentReducer(state, action)
        currentState = _state

        for (var index = 0; index < listeners.length; index++) {
            const listener = listeners[index]
            listener()
        }
        return action
    }

    return {
        dispatch,
        getState,
        subscribe
    }
}