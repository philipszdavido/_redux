/** index.html */
const initialState = {
    articles: [],
    article: {}
}

function red(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_ARTICLES':
            return {
                state,
                articles: action.articles
            }
        default:
            return state
    }
}

let _reducer = combineReducers({ red })
let store = createStore(_reducer)
    //dispatch({ type: '_LOAD_ARTICLES', article: {} })
console.log(reducers)
console.log(reducers_state)