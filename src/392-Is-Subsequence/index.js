/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  return new RegExp(s.split('').join('.*?')).test(t)
}

console.log(isSubsequence('acb', 'ahbgdc'))
