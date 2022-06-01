var removeNthFromEnd = function(head, n) {
    let dummy = {
        next:head
    }
    let slow = dummy
    let fast = dummy
    while (n !== 0 ){
        fast = fast.next
        n--
    }

    while (fast.next){
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next

    return dummy.next
};