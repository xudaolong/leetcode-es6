/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLastWord = function (s) {
  let curLen = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      curLen++
    } else if (curLen !== 0) {
      break
    }
  }
  return curLen
}

console.log(lengthOfLastWord(' '))
