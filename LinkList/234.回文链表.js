var isPalindrome = function(head) {
    let fast = head,
        slow = head
    let pre
    while (fast && fast.next){
        fast = fast.next.next

        let next = slow.next
        slow.next = pre
        pre = slow
        slow = next
    }

    if (fast){
        slow = slow.next
    }

    while (pre && slow){
        if (pre.val !== slow.val) return false
    }

    return true
}