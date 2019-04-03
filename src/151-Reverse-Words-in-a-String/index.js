/**
 * @param {string} str
 * @returns {string}
 */
const reverseWords = function (str) {
  return str.trim().split(/ +/).reverse().join(' ')
}

console.log(reverseWords(''))
