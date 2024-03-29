const {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
} = require("./recursion")

describe("", ()=> {
    it("", ()=> {//or test()
        expect(product([2, 3, 4])).toBe(24)
    })
    it("", ()=> {
        expect(longest(["hello", "hi", "hola"])).toBe(5)
    })    
    it("", ()=> {
        expect(everyOther("hello")).toBe("hlo")
    })    
    it("", ()=> {
        expect(isPalindrome("racecar")).toBe(true)
        expect(isPalindrome("goodbye")).toBe(false)
    })
    it("", ()=> {
        expect(findIndex(["duck", "cat", "pony", "cat"], "cat")).toBe(1)
    })    
    it("", ()=> {
        expect(revString("cat")).toBe("tac")
    })    
    it("", ()=> {
        let whiskey = {name: "Whiskey",age: 5,favFood: "popcorn"}
        expect(gatherStrings(whiskey).sort()).toEqual(["Whiskey", "popcorn"].sort())
    })
    it("", ()=> {
        expect(binarySearch([1, 2, 3],2)).toEqual(1)
    })
})