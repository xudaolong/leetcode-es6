/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  return (new Set(nums)).size !== nums.length
}

console.log(containsDuplicate([1, 2, 3, 3]))
