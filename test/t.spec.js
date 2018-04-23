const { createStore } = require('./../src/createStore')

describe("describe", () => {
    it("it", () => {
        expect(() => createStore()).toThrow()
    })
})

describe("Equality test:", () => {
    it("2 should equal 2", () => {
        expect(2).toEqual(2)
    })
})