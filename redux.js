/**
 * Author: Chidume Nnamdi
 */

/**
 * window.state = {
 *  articles = [],
 *  isAuth = false
 * }
 */

//window.state = {}
//window.reducers = {}
let reducers = {}
let reducers_state = {}

/**
 * 
 */
function getState() {

}

/**
 * type: "", payload
 * { type: 'LOAD_ARTICLES', article: {} }
 * @param {*} action 
 */
function dispatch(action) {
    console.log(action)
    for (var key in reducers) {
        var element = reducers[key];

        //console.log(key)
        //console.log(element.red)

        let state = element.red(undefined, action)
        console.log('displayin state...')
        console.log(state)

        //key({}, action)
        //element({}, action)
    }
}

/**
 * 
 * @param {*} subscriber 
 */
function subscribe(subscriber) {

}

/**
 * 
 * @param {*} _r 
 */
function initializeState(_key, _r) {
    let INIT_STATE = undefined
    let _state = _r(INIT_STATE, { type: 'INIT_STATE' })
        //console.log(_state)
    reducers_state[_key] = _state
    return _state
}

/**
 * 
 * @param {*} fn 
 */
function createStore(fn) {
    //console.log(fn)
    //reducers.fn = fn
    //console.log(reducers)
    for (var key in fn) {
        let reducer = fn[key]
        initializeState(key, reducer)
    }
}

/**
 * 
 * @param {*} reducers 
 */
function combineReducers(_reducers) {
    reducers = _reducers
    return reducers
}

exports.combineReducers = combineReducers
exports.createStore = createStore
exports.subscribe = subscribe
exports.dispatch = dispatch