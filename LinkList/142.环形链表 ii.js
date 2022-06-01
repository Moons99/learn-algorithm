/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 双指针
var detectCycle = function(head) {

    let fast = head
    let slow = head

    while (fast !== null){
        slow = slow.next
        if (fast.next !== null){
            fast = fast.next.next
        }else {
            return null
        }

        if (fast === slow){
            let curr = head
            while (curr !== slow){
                curr = curr.next
                slow = slow.next
            }
            return curr
        }
    }
    return null
}

//  因为如果一个结点是环形链表成环的起点，那么它一定是第一个被发现 flag 标志已存在的结点：
// var detectCycle = function(head) {
//     while (head){
//         if (head.flag){
//             return  head
//         }else {
//             head.flag = true
//             head = head.next
//         }
//     }
//     return null
// }