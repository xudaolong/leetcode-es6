/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  const hashS = {}
  const hashT = {}

  for (let i = 0, len = s.length; i < len; i++) {
    if (hashS[s[i]] !== hashT[t[i]]) {
      return false
    }

    hashS[s[i]] = i
    hashT[t[i]] = i
  }
  return true
}

console.log(isIsomorphic('aba', 'baa'))
