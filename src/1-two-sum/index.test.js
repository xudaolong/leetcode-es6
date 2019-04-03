import chai from 'chai'
chai.use(require('chai-as-promised')).should()
const expect = chai.expect

/**
 * @param {number[]} source
 * @param {number} target
 * @return {number[]}
 * 双指针扫描
 * - 返回数组某两元素之和等于指定数值的索引
 */

const twoSum = (nums, target) => {
  // 若考虑不是递增的数组
  const cloneSource = nums.slice(0).sort((a, b) => a - b)

  let left = 0
  let right = cloneSource.length - 1

  do {
    const aim = cloneSource[left] + cloneSource[right]
    if (aim === target) break
    // 右指针<-总数变少, 左指针->总数变大
    aim > target ? right-- : left++
  } while (right >= left)

  // 值找索引
  const leftIndx = nums.indexOf(cloneSource[left])
  const rightIndx = nums.lastIndexOf(cloneSource[right])

  return [leftIndx, rightIndx].sort()
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 把数组中的元素放到hash表中
 */

const twoSumHash = (nums, target) => {
  const numsHash = {}
  let left = 0
  do {
    const findExist = target - nums[left]
    const exist = numsHash[findExist]
    // 过滤数字 0 的判断, 目的能够匹配到之前已记录的值则可
    if (exist !== undefined) {
      return [exist, left]
    }
    numsHash[nums[left]] = left
    left++
  } while (left <= nums.length)
}

describe('twoSum', () => {
  it('1-two-sum: 双指针', () => {
    const source = [4, 0, 0, 3]; const target = 0
    expect(twoSum(source, target)).to.be.eql([1, 2])
  })
  it('1-two-sum: Hash', () => {
    const source = [4, 0, 0, 3]; const target = 0
    expect(twoSumHash(source, target)).to.be.eql([1, 2])
  })
})
