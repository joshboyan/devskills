const rewire = require("rewire")
const SkillChart = rewire("./SkillChart")
const x = SkillChart.__get__("x")
// @ponicode
describe("x", () => {
    test("0", () => {
        let callFunction = () => {
            x({ index: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            x({ index: 100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            x({ index: -1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            x({ index: -100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            x({ index: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            x({ index: Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})
