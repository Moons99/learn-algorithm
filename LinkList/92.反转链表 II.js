var reverseBetween = function(head, left, right) {
    let dummy = new ListNode()
    dummy.next = head
    let p = dummy

    for (let i = 0; i < left; i++) {
        p = p.next
    }

    let pre = p.next
    let cur = pre.next

    for (let i = 0; i < right - left; i++) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    p.next.next = cur
    p.next = pre

    return dummy.next
};