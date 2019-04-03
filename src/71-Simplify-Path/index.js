/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
  const pathArr = path.split('/')
  const stack = []
  for (let path of pathArr) {
    if (path === '.' || path === '') {

    } else if (path === '..') {
      stack.pop()
    } else {
      stack.push(path)
    }
  }
  return '/' + stack.join('/')
}

console.log(simplifyPath('/home/'))
