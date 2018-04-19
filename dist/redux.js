(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.redux = {})));
}(this, (function (exports) { 'use strict';

    function createStore(reducer, preLoadedState) {

        let currentReducer = reducer;
        let currentState = preLoadedState ? preLoadedState : null;
        let listeners = [];

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
            listeners.push(listener);

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
                listeners.splice(listeners.indexOf(listener), 1);
            }
        }

        function dispatch(action) {
            let state = currentState;
            let _state = currentReducer(state, action);
            currentState = _state;

            for (var index = 0; index < listeners.length; index++) {
                const listener = listeners[index];
                listener();
            }
            return action
        }

        return {
            dispatch,
            getState,
            subscribe
        }
    }

    /* This function takes an reducers as arg, then combine 
    the reducers into a single reducer function */
    function combineReducers(reducers) {

        // reducers will be in object, so we test for Object
        if (typeof reducers != 'object') {
            throw new Error('Reducers must be Object')
        }
        let keys = Object.keys(reducers);

        /* We check to make sure all reduers provided in the 
        object reducers are truly functions.
        */
        let finalReducers = {};
        for (var index = 0; index < keys.length; index++) {

            let reducer = reducers[key[index]];
            if (typeof reducer != 'function') {
                throw new Error('Reducers must all be function')
            }
            finalReducers[key] = reducer;
        }
        return function combination(state = {}, action) {
            let finalReducersKeys = Object.keys(finalReducers);
            for (var index = 0; index < finalReducersKeys.length; index++) {
                let reducer = finalReducers[finalReducersKeys[index]];
                let nextState = reducer(state, action);
            }
        }
    }

    exports.createStore = createStore;
    exports.combineReducers = combineReducers;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
