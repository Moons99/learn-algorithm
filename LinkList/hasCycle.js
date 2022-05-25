/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let cache = new Set()
    while (head){
        if (cache.has(head)){
            return true
        }else {
            cache.add(head)
        }
        head = head.next
    }
    return false
};

// var hasCycle = function(head) {
//     let fast = head
//     let last = head
//     while(fast && fast.next){
//         fast = fast.next.next
//         last = last.next
//         if(fast === last) return true
//     }
//     return false
// };