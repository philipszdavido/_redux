/** */
import { createStore } from './../src'

describe('Test', () => {

    const booksReducer = (state = {}, reducer) => {

    }
    const store = createStore(booksReducer)

    it('store should be an object', () => {
        expect(typeof store).toBe('object')
    })
})