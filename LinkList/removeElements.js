/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let ele = {
        next: head
    }
    let p = ele
    while (p.next){
        if (p.next.val === val){
            p.next = p.next.next
        }else {
            p = p.next
        }
    }
    return  ele
};


// 第二种
// var removeElements = function(head, val) {
//     if (head == null) return head
//     head.next = removeElements(head.next, val)
//     return  head.val === val ? head.next : head
// };