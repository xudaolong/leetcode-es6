/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  return nums.reduce((pre, cur) => pre ^ cur)
}

console.log(singleNumber([1, 2, 3, 3, 2, 1, 4]))
