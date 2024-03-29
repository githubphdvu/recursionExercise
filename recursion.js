function product(A, i = 0) {//return product of array elements
    if (i === A.length) return 1
    return A[i] * product(A,i+1)
};console.log(product([2,3]))//6

function longest(A, i = 0, ans = 0) {//return length of longest word
    if (i === A.length) return ans
    ans = Math.max(A[i].length, ans)
    return longest(A, i + 1, ans)
};console.log(longest(['hi','how','everything?']))

function everyOther(s, i = 0, ans = "") {//return a string with every other letter
    if (i >= s.length) return ans
    ans += s[i]
    return everyOther(s, i + 2, ans)
};console.log(everyOther('hello'))//'hlo'

function isPalindrome(s, i = 0) {
    let leftIdx = i, rightIdx = s.length-1-i
    if (s[leftIdx] !== s[rightIdx]) return false
    if (leftIdx >= rightIdx) return true
    return isPalindrome(s, i + 1)
};console.log(isPalindrome('racecar'))//true

function findIndex(A, a, i = 0) {//return index of element(or -1:not found)
    if (i === A.length) return -1
    if (A[i] === a) return i
    return findIndex(A, a, i + 1)
};console.log(findIndex(['hi','how','are'],'how'))//1

function revString(str, i = 0, ans = "") {//return a copy of a string, but in reverse
    if (ans.length === str.length) return ans
    ans += str[str.length - 1 - i]
    return revString(str, i + 1, ans)
};console.log(revString('abc'))//'cba'

function gatherStrings(obj) {//given object, return array of all of string values
    let A = []
    for (let key in obj) {
        if (typeof obj[key] === "string") A.push(obj[key])
        if (typeof obj[key] === "object") A.push(...gatherStrings(obj[key]))
    }
    return A
};console.log(gatherStrings({first:'Ja',address:{work:'SJ',zip:95111}}))//['Ja','SJ']

function binarySearch(A, a, L = 0, R = A.length) {//return index of ele(or -1:not found)
    if (L > R) return -1
    let mid = Math.floor((R + L) / 2)
    if (A[mid] === a) return mid
    if (A[mid] > a) return binarySearch(A, a, L, mid - 1)
    return binarySearch(A, a, mid + 1, R)
};console.log(binarySearch([1,2,3],2))//1

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
}
