/*
window._state = {
    'date': 90,
    'subscribers': [],
    'subscribe': function(fn) {
        this.subscribers.push(fn)
    }
}

function getState() {
    return _state.date
}

function mut(s) {
    window._state.date = s
    console.log(window._state.date)
    //window._state.subscribers.forEach((e) => {e()});
}

window._state.subscribe(() => {
    document.getElementById('d').innerHTML = getState()
})
document.getElementById('d').innerHTML = getState()
console.log(window._state.date)
*/