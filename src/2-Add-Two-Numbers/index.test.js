/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/**
 分析
 3 4 5
 3 1 4

 sum = new node(6)
 head = sum
 tail = sum

 sum = new node(5)
 tail.next = sum
 tail = tail.next

 sum = new node(9)
 tail.next = sum
 tail = tail.next
 */
import chai from 'chai'
chai.use(require('chai-as-promised')).should()
const expect = chai.expect

function ListNode (val) {
  this.val = val
  this.next = null
}

const addTwoNumbers = (l1, l2) => {
  let tail
  let head
  // 进位
  let carry = 0
  while (l1 || l2 || carry) {
    const sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0)
    // 用作下次进位加一
    carry = Math.floor(sum / 10)
    // 余数
    const node = new ListNode(sum % 10)
    if (!head) {
      head = tail = node
    } else {
      tail = tail.next = node
    }
    // 指向下一层
    l1 = l1 && l1.next
    l2 = l2 && l2.next
  }
  return head
}

describe('twoSum', () => {
  it('2-add-two-numbers: addTwoNumbers', () => {
    const list1 = {
      val: 2,
      next: {
        val: 4,
        next: {
          val: 3,
          next: null
        }
      }
    }
    const list2 = {
      val: 5,
      next: {
        val: 6,
        next: {
          val: 4,
          next: null
        }
      }
    }
    expect(addTwoNumbers(list1, list2)).to.be.eql({
      val: 7,
      next: {
        val: 0,
        next: {
          val: 8,
          next: null
        }
      }
    })
  })
})
